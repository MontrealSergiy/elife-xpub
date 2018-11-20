/* eslint-disable react/no-unused-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from '@pubsweet/ui'
import { th } from '@pubsweet/ui-toolkit'
import { Box, Flex } from 'grid-styled'
import { escapeRegExp } from 'lodash'

import SelectedItem from '../atoms/SelectedItem'
import PersonPod from './PersonPod'
import TwoColumnLayout from '../../global/layout/TwoColumnLayout'
import Centerer from '../../global/layout/Centerer'
import SearchBox from './SearchBox'
import { FormH2 } from '../atoms/FormHeadings'
import StickyFooter from '../atoms/StickyFooter'

const MAX_DISPLAYED_PODS = 30

const MainColumn = styled(Box).attrs({ mx: [0, 0, 0, '16.666%'] })`
  flex: 1 1 auto;
  min-width: 0;
`

const SelectedItems = ({ selection, onCloseClick }) => (
  <Flex>
    {selection.map(person => (
      <Box key={person.id} mr={1}>
        <SelectedItem
          label={person.name}
          onCloseClick={() => onCloseClick(person)}
        />
      </Box>
    ))}
  </Flex>
)

const SuccessMessage = styled.div`
  color: ${th('colorSuccess')};
`

const SelectionHint = ({ selection, minSelection, maxSelection }) => {
  const selectionLength = selection.length
  if (selectionLength < minSelection) {
    const numRequired = minSelection - selectionLength
    return (
      <div>
        {numRequired} more suggestion
        {numRequired === 1 ? '' : 's'} required
      </div>
    )
  }
  if (selectionLength >= maxSelection) {
    return <SuccessMessage>Maximum {maxSelection} choices</SuccessMessage>
  }
  return null
}

const PeoplePickerBody = ({
  isSelected,
  maxSelection,
  minSelection,
  people,
  selection,
  toggleSelection,
}) => (
  <React.Fragment>
    <Flex justifyContent="space-between" mb={3}>
      <SelectedItems onCloseClick={toggleSelection} selection={selection} />
      <SelectionHint
        maxSelection={maxSelection}
        minSelection={minSelection}
        selection={selection}
      />
    </Flex>
    <TwoColumnLayout>
      {people
        .map(person => (
          <PersonPod
            iconType={isSelected(person) ? 'selected' : 'add'}
            institution={person.aff}
            isIconClickable={
              isSelected(person) || selection.length < maxSelection
            }
            isKeywordClickable={false}
            key={person.id}
            keywords={person.subjectAreas}
            name={person.name}
            onIconClick={() => toggleSelection(person)}
            // onKeywordClick will need to be added, once we know what the desired behaviour is
          />
        ))
        .slice(0, MAX_DISPLAYED_PODS)}
    </TwoColumnLayout>
  </React.Fragment>
)

const PeoplePickerButtons = ({ isValid, onCancel, onSubmit }) => (
  <Flex>
    <Box mr={3}>
      <Button onClick={onCancel}>Cancel</Button>
    </Box>
    <Box>
      <Button
        data-test-id="people-picker-add"
        disabled={!isValid}
        onClick={onSubmit}
        primary
      >
        Add
      </Button>
    </Box>
  </Flex>
)

class PeoplePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selection: this.props.initialSelection,
      searchValue: '',
    }
  }

  toggleSelection(person) {
    if (this.isSelected(person)) {
      this.setState({
        selection: this.state.selection.filter(p => p.id !== person.id),
      })
    } else {
      this.setState({ selection: this.state.selection.concat(person) })
    }
  }

  handleSubmit() {
    if (this.isValid()) {
      this.props.onSubmit(this.state.selection)
    }
  }

  isSelected(person) {
    return this.state.selection.some(p => p.id === person.id)
  }

  isValid() {
    const selectionLength = this.state.selection.length
    return (
      selectionLength >= this.props.minSelection &&
      selectionLength <= this.props.maxSelection
    )
  }

  searchSubmit = searchValue => {
    this.setState({ searchValue })
  }

  filterPeople = (people, searchValue, field) => {
    if (!searchValue) return people

    const inputValue = searchValue.trim().toLowerCase()
    if (!inputValue) return people

    return people.filter(person =>
      person[field].toLowerCase().includes(inputValue),
    )
  }

  getMatchIndex = (inputValue, option) => {
    const re = new RegExp(escapeRegExp(inputValue))
    const match = re.exec(option.toLowerCase())
    if (match) return match.index
    return -1
  }

  render() {
    const {
      maxSelection = Infinity,
      minSelection = 0,
      people,
      title,
    } = this.props

    let extendedPeople = [...people].sort((a, b) =>
      a.name.localeCompare(b.name),
    )

    extendedPeople = extendedPeople.map(person => ({
      ...person,
      searchValue: `${person.name} ${person.subjectAreas.join(' ')} ${
        person.aff ? person.aff : ''
      }`,
    }))
    const searchOptions = extendedPeople.map(person => ({
      value: person.name,
    }))
    return (
      <React.Fragment>
        <Centerer pt={3} px={3}>
          <Flex>
            <MainColumn>
              <FormH2>Choose {title}</FormH2>
            </MainColumn>
          </Flex>
        </Centerer>
        <Centerer mb={3} px={3}>
          <Flex mx={-2}>
            <Box
              mx={[0, 0, 0, '16.666%']}
              px={[2, 2, 2, 1]}
              width={[1, 1, 1 / 2, 0.33]}
            >
              <SearchBox
                filterFunction={this.filterPeople}
                getMatchIndex={this.getMatchIndex}
                onSubmit={this.searchSubmit}
                options={searchOptions}
              />
            </Box>
          </Flex>
        </Centerer>
        <Centerer mb={3} px={3}>
          <Flex data-test-id="people-picker-body">
            <MainColumn mb={7}>
              <PeoplePicker.Body
                isSelected={person => this.isSelected(person)}
                maxSelection={maxSelection}
                minSelection={minSelection}
                people={this.filterPeople(
                  extendedPeople,
                  this.state.searchValue,
                  'searchValue',
                )}
                selection={this.state.selection}
                toggleSelection={person => this.toggleSelection(person)}
              />
            </MainColumn>
          </Flex>
        </Centerer>
        <StickyFooter>
          <MainColumn>
            <PeoplePicker.Buttons
              isValid={this.isValid}
              onSubmit={submission => this.handleSubmit(submission)}
            />
          </MainColumn>
        </StickyFooter>
      </React.Fragment>
    )
  }
}
const peopleArrayPropType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
  }),
)

PeoplePicker.propTypes = {
  initialSelection: peopleArrayPropType,
  minSelection: PropTypes.number,
  maxSelection: PropTypes.number,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  people: peopleArrayPropType.isRequired,
  title: PropTypes.string.isRequired,
}

PeoplePicker.defaultProps = {
  initialSelection: [],
  minSelection: 0,
  maxSelection: Infinity,
}

PeoplePicker.Body = PeoplePickerBody
PeoplePicker.Buttons = PeoplePickerButtons

export default PeoplePicker

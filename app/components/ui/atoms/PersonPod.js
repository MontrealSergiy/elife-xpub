import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { th } from '@pubsweet/ui-toolkit'
import { Action } from '@pubsweet/ui'
import { Flex, Box } from 'grid-styled'

import Icon from './Icon'
import ButtonAsIconWrapper from './ButtonAsIconWrapper'
import SmallParagraph from './SmallParagraph'
import Paragraph from './Paragraph'
import PersonInfo from './PersonInfo'
import PersonPodContainer from './PersonPodContainer'
import ModalDialog from '../molecules/ModalDialog'

const InfoIcon = props => (
  <Icon iconName="Info" overrideName="info" {...props} />
)

const StyledInfoIcon = styled(InfoIcon)`
  margin-right: 6px;
  height: 18px;
  width: 18px;
  fill: ${th('colorPrimary')};
`

const StyledParagraph = styled(Paragraph)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`

const StyledSmallParagraph = styled(SmallParagraph).attrs({ secondary: true })`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 3px 0;
`

const SmallAction = styled(Action)`
  font-size: ${th('fontSizeBaseSmall')};
  line-height: ${th('lineHeightBaseSmall')};
  margin: 3px 0;
`

const CollapsibleBox = styled(Box)`
  min-width: 0;
`

class PersonPod extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isModalOpen: false,
    }
  }

  openModal = () => {
    this.setState({ isModalOpen: true })
  }

  acceptModal = person => {
    this.setState({ isModalOpen: false })
    this.props.togglePersonSelection(person)
  }

  cancelModal = () => {
    this.setState({ isModalOpen: false })
  }

  render() {
    const {
      isSelectButtonClickable = true,
      togglePersonSelection,
      selectButtonType,
      name,
      institution = '',
      focuses,
      expertises,
      isKeywordClickable,
      isSelected,
      onKeywordClick = null,
      isStatusShown = false,
      status = '',
    } = this.props

    let keywordList
    const keywords = [].concat(focuses).concat(expertises)
    if (isKeywordClickable) {
      keywordList = keywords.map(keyword => (
        <SmallAction
          data-test-id="clickable-keyword"
          key={keyword}
          onClick={() => onKeywordClick(keyword)}
        >
          {keyword}
        </SmallAction>
      ))
    } else {
      keywordList = keywords.map(keyword => (
        <span data-test-id="non-clickable-keyword" key={keyword}>
          {keyword}
        </span>
      ))
    }

    const separatedKeywords = keywordList.reduce(
      (accu, elem) => (accu === null ? [elem] : [...accu, ', ', elem]),
      null,
    )

    return (
      <React.Fragment>
        <ModalDialog
          acceptText={isSelected ? 'Remove editor' : 'Add editor'}
          cancelText="Cancel"
          onAccept={this.acceptModal}
          onCancel={this.cancelModal}
          open={this.state.isModalOpen}
        >
          <PersonInfo
            expertises={expertises}
            focuses={focuses}
            institution={institution}
            name={name}
          />
        </ModalDialog>
        <PersonPodContainer
          isSelectButtonClickable={isSelectButtonClickable}
          selectButtonType={selectButtonType}
          togglePersonSelection={togglePersonSelection}
        >
          <CollapsibleBox m={2}>
            <StyledParagraph>{name}</StyledParagraph>
            {institution && <StyledParagraph>{institution}</StyledParagraph>}
            {!institution && <Box mb={3} />}
            <Flex alignItems="center">
              <ButtonAsIconWrapper onClick={this.openModal}>
                <StyledInfoIcon />
              </ButtonAsIconWrapper>
              <StyledSmallParagraph>{separatedKeywords}</StyledSmallParagraph>
            </Flex>
            {isStatusShown && (
              <StyledSmallParagraph>{status}</StyledSmallParagraph>
            )}
          </CollapsibleBox>
        </PersonPodContainer>
      </React.Fragment>
    )
  }
}

PersonPod.propTypes = {
  isSelectButtonClickable: PropTypes.bool,
  togglePersonSelection: PropTypes.func.isRequired,
  selectButtonType: PropTypes.oneOf(['add', 'remove', 'selected']).isRequired,
  name: PropTypes.string.isRequired,
  institution: PropTypes.string,
  focuses: PropTypes.arrayOf(PropTypes.string.isRequired),
  expertises: PropTypes.arrayOf(PropTypes.string.isRequired),
  isKeywordClickable: PropTypes.bool.isRequired,
  onKeywordClick: PropTypes.func,
  isStatusShown: PropTypes.bool,
  isSelected: PropTypes.bool.isRequired,
  status: PropTypes.string,
}

PersonPod.defaultProps = {
  isSelectButtonClickable: true,
  institution: '',
  focuses: [],
  expertises: [],
  onKeywordClick: null,
  isStatusShown: false,
  status: '',
}

export default PersonPod

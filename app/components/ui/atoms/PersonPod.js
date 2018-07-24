import React from 'react'
import styled from 'styled-components'
import { th } from '@pubsweet/ui-toolkit'
import { Action, Button } from '@pubsweet/ui'
import { Flex, Box } from 'grid-styled'

import Icon from './Icon'

const RegularP = styled.p`
  font-size: ${th('fontSizeBase')};
  line-height: ${th('fontLineHeightBase')};
  margin: 0;
`

const SmallP = styled.p`
  font-size: ${th('fontSizeBaseSmall')};
  line-height: ${th('fontLineHeightBaseSmall')};
  // vertical spacing of 6px comes from: 24px grid - fontLineHeightBaseSmall
  margin: 3px 0;
`

const SmallAction = styled(Action)`
  font-size: ${th('fontSizeBaseSmall')};
  line-height: ${th('fontLineHeightBaseSmall')};
  margin: 3px 0;
`

const StyledButton = styled(Button)`
  height: 100%;
  border: none;
`

const StyledPicker = styled(Flex)`
  display: flex;
  justify-content: space-between;

  background: ${th('colorSecondary')};
  border: ${th('borderWidth')} ${th('borderStyle')} ${th('colorBorder')};
  border-radius: ${th('borderRadius')};
  color: ${th('colorText')};
  font-family: ${th('fontInterface')};
  font-size: ${th('fontSizeBase')};
  min-width: 312px;
  height: 120px;
`

const PersonPod = ({
  isIconClickable,
  onIconClick,
  textContainer,
  icon,
  ...props
}) => (
  <StyledPicker>
    {textContainer}
    <Flex flexDirection="column" justifyContent="center">
      <StyledButton
        data-test-id="person-pod-toggle"
        disabled={!isIconClickable}
        onClick={onIconClick}
      >
        {icon}
      </StyledButton>
    </Flex>
  </StyledPicker>
)

const PlusIcon = <Icon size={3}>Plus</Icon>
const RubbishBinIcon = <Icon size={3}>RubbishBin</Icon>
const SelectedTickIcon = <Icon size={4}>SelectedTick</Icon>

const switchIcon = iconState => {
  switch (iconState) {
    case 'add':
      return PlusIcon
    case 'remove':
      return RubbishBinIcon
    case 'selected':
      return SelectedTickIcon
    default:
      return PlusIcon
  }
}

const buildPersonText = ({
  name,
  institution,
  keywords,
  isKeywordClickable,
  onKeywordClick,
  isStatusShown,
  status,
  ...props
}) => (
  <Box m={2}>
    <RegularP>{name}</RegularP>
    <RegularP>{institution}</RegularP>
    {isKeywordClickable && (
      <SmallAction onClick={onKeywordClick}>{keywords}</SmallAction>
    )}
    {!isKeywordClickable && <RegularP>{keywords}</RegularP>}
    {isStatusShown && <SmallP>{status}</SmallP>}
  </Box>
)

const ChosenPersonPod = ({ isIconClickable = true, onIconClick, ...props }) => {
  const IconByState = switchIcon(props.iconState)
  const ChosenPerson = buildPersonText(props)
  return (
    <PersonPod
      icon={IconByState}
      isIconClickable={isIconClickable}
      onIconClick={onIconClick}
      textContainer={ChosenPerson}
    />
  )
}

const buildChooserText = ({ role, isRequired, ...props }) => (
  <Flex flexDirection="column" justifyContent="center">
    <Box ml={2}>
      <RegularP>
        Choose {role} ({isRequired ? 'required' : 'optional'})
      </RegularP>
    </Box>
  </Flex>
)

const ChoosePersonPod = ({ onIconClick, ...props }) => {
  const ChooserText = buildChooserText(props)
  return (
    <PersonPod
      icon={PlusIcon}
      onIconClick={onIconClick}
      textContainer={ChooserText}
    />
  )
}

PersonPod.ChosenPersonPod = ChosenPersonPod
PersonPod.ChoosePersonPod = ChoosePersonPod

export default PersonPod
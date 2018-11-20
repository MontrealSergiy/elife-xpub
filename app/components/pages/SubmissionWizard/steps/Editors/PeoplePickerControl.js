import React from 'react'

import PersonPod from '../../../../ui/molecules/PersonPod'
import TwoColumnLayout from '../../../../global/layout/TwoColumnLayout'
import ModalHistoryState from '../../../../ui/molecules/ModalHistoryState'
import ModalOverlay from '../../../../ui/molecules/ModalOverlay'
import PeoplePicker from '../../../../ui/molecules/PeoplePicker'

const PeoplePickerControl = ({
  maxSelection = Infinity,
  minSelection = 0,
  onRequestRemove,
  onRequestModal,
  initialSelection,
  onSubmit,
  options,
  title,
}) => (
  <ModalHistoryState name={title}>
    {({ showModal, hideModal, isModalVisible }) => {
      const items = initialSelection.map(person => (
        <PersonPod
          iconType="remove"
          institution={person.aff}
          isKeywordClickable={false}
          key={person.id}
          keywords={person.subjectAreas}
          name={person.name}
          onIconClick={() => onRequestRemove(person)}
        />
      ))

      if (items.length < maxSelection)
        items.push(
          <PersonPod.Chooser
            isRequired={items.length < minSelection}
            key="chooser"
            onIconClick={showModal}
            roleName="editor"
          />,
        )

      return (
        <React.Fragment>
          <TwoColumnLayout>{items}</TwoColumnLayout>
          <ModalOverlay open={isModalVisible()} transparentBackground={false}>
            <PeoplePicker
              initialSelection={initialSelection}
              maxSelection={maxSelection}
              minSelection={minSelection}
              onCancel={hideModal}
              onSubmit={(...args) => {
                hideModal()
                onSubmit(...args)
              }}
              people={options}
              title={title}
            />
          </ModalOverlay>
        </React.Fragment>
      )
    }}
  </ModalHistoryState>
)

export default PeoplePickerControl

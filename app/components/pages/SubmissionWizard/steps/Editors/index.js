import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import EditorsPage from './EditorsPage'

const EDITOR_LIST_QUERY = gql`
  query EditorList($role: String!) {
    editors(role: $role) {
      id
      name
      aff
      focuses
      expertises
    }
  }
`

const EditorsPageContainer = ({ ...props }) => (
  <Query query={EDITOR_LIST_QUERY} variables={{ role: 'reviewing-editor' }}>
    {({
      loading: loadingReviewingEditors,
      data: { editors: reviewingEditors = [] },
    }) => (
      <Query query={EDITOR_LIST_QUERY} variables={{ role: 'senior-editor' }}>
        {({
          loading: loadingSeniorEditors,
          data: { editors: seniorEditors = [] },
        }) => {
          if (loadingReviewingEditors || loadingSeniorEditors)
            return 'Loading...' // TODO add spinner when one is implemented
          // TODO handle errors => if (error) return `Error! ${error.message}`;
          return (
            <EditorsPage
              reviewingEditors={reviewingEditors}
              seniorEditors={seniorEditors}
              {...props}
            />
          )
        }}
      </Query>
    )}
  </Query>
)

export default EditorsPageContainer

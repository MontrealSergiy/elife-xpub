import React from 'react'
import { Query } from 'react-apollo'
import AuthorPage from './AuthorPage'
import { CURRENT_USER } from '../../../../global/queries'

const AuthorPageContainer = ({ handleSubmit, setFieldValue }) => (
  <Query query={CURRENT_USER}>
    {({ data }) => (
      <AuthorPage
        handleSubmit={handleSubmit}
        prefill={() => {
          const identity = data.currentUser.identities[0]
          setFieldValue('author.firstName', identity.meta.firstName)
          setFieldValue('author.lastName', identity.meta.lastName)
          setFieldValue('author.email', identity.email)
          setFieldValue('author.aff', identity.aff)
        }}
      />
    )}
  </Query>
)

export default AuthorPageContainer

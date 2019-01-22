import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Subscription } from 'react-apollo'
import SubmissionOperations from './SubmissionOperations'
// import AuthorPageContainer from './steps/Author'
// import FilesPageContainer from './steps/Files'
// import SubmissionPage from './steps/Submission'
// import EditorsPageContainer from './steps/Editors'
// import DisclosurePage from './steps/Disclosure'
// import { schema as authorPageSchema } from './steps/Author/schema'
// import { schema as filesPageSchema } from './steps/Files/schema'
// import { schema as submissionPageSchema } from './steps/Submission/schema'
// import { schema as editorsPageSchema } from './steps/Editors/schema'
// import { schema as disclosurePageSchema } from './steps/Disclosure/schema'
// import WizardStep from './WizardStep'
// import ErrorPage from '../../../components/pages/Error'

import TestComponent from './testComponent'
import { ON_UPLOAD_PROGRESS } from './operations'
// import Route from '../../../trackedRoute';

const SubmissionWizard = ({ match, history }) => (
  <SubmissionOperations manuscriptId={match.params.id}>
    {({ initialValues, updateManuscript, submitManuscript }) => (
      <Subscription subscription={ON_UPLOAD_PROGRESS}>
        {({ data: uploadData, loading: uploadLoading }) => (
          <TestComponent 
            history={history} 
            initialValues={initialValues} 
            match={match} 
            submitManuscript={submitManuscript} 
            updateManuscript={updateManuscript} 
            uploadData={uploadData} 
            uploadLoading={uploadLoading}
          /> 
        )}
      </Subscription>
    )}
  </SubmissionOperations>
)

export default SubmissionWizard

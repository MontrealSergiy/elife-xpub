import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import FilesPageContainer from './steps/Files'
import SubmissionPage from './steps/Submission'
import EditorsPageContainer from './steps/Editors'
import DisclosurePage from './steps/Disclosure'
import { schema as authorPageSchema } from './steps/Author/schema'
import { schema as filesPageSchema } from './steps/Files/schema'
import { schema as submissionPageSchema } from './steps/Submission/schema'
import { schema as editorsPageSchema } from './steps/Editors/schema'
import { schema as disclosurePageSchema } from './steps/Disclosure/schema'
import WizardStep from './WizardStep'
import ErrorPage from '../../../components/pages/Error'

export default class TestComponent extends React.Component {

      shouldComponentUpdate(nextProps) {

        if (this.props.uploadData && this.props.uploadData !== nextProps.uploadData) {
            return this.props.uploadData.uploadProgress !== nextProps.uploadData.uploadProgress
        }
        return true
        // Object.entries(nextProps).forEach(([key, val]) => {
        //     if (this.props[key] !== val && key !== 'uploadData') {
        //         return true
        //     } else if ( this.props.uploadData && key === 'uploadData') {
        //         return this.props.uploadData.uploadProgress === nextProps.uploadData.uploadProgress
        //     }
        //     return false
        // })
        // return false
      }

      componentDidUpdate(prevProps) {
        Object.entries(this.props).forEach(([key, val]) =>
          prevProps[key] !== val && console.log(`Prop '${key}' changed`)
        );
        console.log(this.props.uploadData)
      }

    render() {
        return (
        <Switch>
            <Route
              exact
              path={`${this.props.match.path}/files`}
              render={() => (
                <WizardStep
                  component={FilesPageContainer}
                  handleAutoSave={this.props.updateManuscript}
                  handleButtonClick={this.props.updateManuscript}
                  history={this.props.history}
                  initialValues={this.props.initialValues}
                  nextUrl={`${this.props.match.url}/submission`}
                  previousUrl={`${this.props.match.url}/author`}
                  step={1}
                  title="Write your cover letter and upload your manuscript"
                  uploadData={this.props.uploadData}
                  uploadLoading={this.props.uploadLoading}
                  validationSchema={filesPageSchema}
                />
              )}
            />
            <Route
              path={`${this.props.match.path}/submission`}
              render={() => (
                <WizardStep
                  component={SubmissionPage}
                  handleAutoSave={this.props.updateManuscript}
                  handleButtonClick={this.props.updateManuscript}
                  history={this.props.history}
                  initialValues={this.props.initialValues}
                  nextUrl={`${this.props.match.url}/editors`}
                  previousUrl={`${this.props.match.url}/files`}
                  step={2}
                  title="Help us get your work seen by the right people"
                  validationSchema={submissionPageSchema}
                />
              )}
            />
            <Route
              path={`${this.props.match.path}/editors`}
              render={() => (
                <WizardStep
                  component={EditorsPageContainer}
                  handleAutoSave={this.props.updateManuscript}
                  handleButtonClick={this.props.updateManuscript}
                  history={this.props.history}
                  initialValues={this.props.initialValues}
                  nextUrl={`${this.props.match.url}/disclosure`}
                  previousUrl={`${this.props.match.url}/submission`}
                  step={3}
                  title="Who should review your work?"
                  validationSchema={editorsPageSchema}
                />
              )}
            />
            <Route
              path={`${this.props.match.path}/disclosure`}
              render={() => (
                <WizardStep
                  component={DisclosurePage}
                  finalStep
                  handleAutoSave={this.props.updateManuscript}
                  handleButtonClick={this.props.submitManuscript}
                  history={this.props.history}
                  initialValues={this.props.initialValues}
                  nextUrl={`/thankyou/${this.props.match.params.id}`}
                  previousUrl={`${this.props.match.url}/editors`}
                  step={4}
                  title="Disclosure of data to editors"
                  validationSchema={disclosurePageSchema}
                />
              )}
            />
            <Route
              path={`${this.props.match.path}/author`}
              render={() => {
                console.log('bbbbbbbbbbbbbbbbbbb')
                return (
                <WizardStep
                  component={this.props.AuthorPageContainer}
                  handleAutoSave={this.props.pdateManuscript}
                  handleButtonClick={this.props.updateManuscript}
                  history={this.props.history}
                  initialValues={this.props.initialValues}
                  nextUrl={`${this.props.match.url}/files`}
                  step={0}
                  title="Your details"
                  validationSchema={authorPageSchema}
                />
              )}}
            />
            <Redirect
              exact
              from="/submit/:id"
              to={`/submit/${this.props.match.params.id}/author`}
            />
            <ErrorPage error="404: page not found" />
          </Switch>)
    }

}
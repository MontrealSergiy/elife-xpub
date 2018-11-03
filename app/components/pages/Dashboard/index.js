import React from 'react'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'
import { Box, Flex } from 'grid-styled'
import qs from 'query-string'
import { Button } from '@pubsweet/ui'
import { th } from '@pubsweet/ui-toolkit'
import { CREATE_MANUSCRIPT } from '../SubmissionWizard/operations'
import media from '../../global/layout/media'
import SmallParagraph from '../../ui/atoms/SmallParagraph'
import NativeLink from '../../ui/atoms/NativeLink'
import StickyFooter from '../../ui/atoms/StickyFooter'
import Tabs from '../../ui/molecules/Tabs'
import Submissions from './panels/Submissions'
import Archived from './panels/Archived'
import Admin from './panels/Admin'

const BoxHiddenFromMobile = styled(Box)`
  text-align: right;
  display: none;
  ${media.mobileUp`display: block`};
`

const TabbedSubmissions = styled(Tabs)`
  min-height: 300px;
  margin-bottom: ${th('space.3')};
`

const MobileOnlyStickyFooter = styled(StickyFooter)`
  display: block;
  ${media.mobileUp`display: none;`};
`

const CenterdSmallParagraph = styled(SmallParagraph)`
  color: ${th('colorTextSecondary')};
  text-align: center;
`
const DashboardPage = ({ history }) => {
  const parsed = qs.parse(window.location.search, { ignoreQueryPrefix: true })
  const admin = !!parsed.admin

  return (
    <Mutation mutation={CREATE_MANUSCRIPT}>
      {createManuscript => (
        <Flex>
          <Box flex="1 1 auto" mx={[0, 0, 0, '16.666%']}>
            <BoxHiddenFromMobile mb={1} mt={3}>
              <Button
                data-test-id="desktop-new-submission"
                onClick={() =>
                  createManuscript().then(result =>
                    history.push(
                      `/submit/${result.data.createManuscript.id}/author`,
                    ),
                  )
                }
                primary
              >
                New Submission
              </Button>
            </BoxHiddenFromMobile>

            <TabbedSubmissions>
              <Tabs.List>
                <Tabs.Tab>Submissions</Tabs.Tab>
                <Tabs.Tab>Archive</Tabs.Tab>
                {admin ? <Tabs.Tab>Admin</Tabs.Tab> : ''}
              </Tabs.List>
              <Tabs.Panel data-test-id="manuscripts">
                <Submissions />
              </Tabs.Panel>
              <Tabs.Panel>
                <Archived />
              </Tabs.Panel>
              {admin ? (
                <Tabs.Panel>
                  <Admin />
                </Tabs.Panel>
              ) : (
                ''
              )}
            </TabbedSubmissions>

            <CenterdSmallParagraph>
              Can&#39;t find a submission? You might find it in our full{' '}
              <NativeLink href="https://submit.elifesciences.org">
                peer review and submissions
              </NativeLink>{' '}
              system
            </CenterdSmallParagraph>
          </Box>

          <MobileOnlyStickyFooter>
            <Button
              data-test-id="mobile-new-submission"
              onClick={() =>
                createManuscript().then(result =>
                  history.push(
                    `/submit/${result.data.createManuscript.id}/author`,
                  ),
                )
              }
              primary
            >
              New Submission
            </Button>
          </MobileOnlyStickyFooter>
        </Flex>
      )}
    </Mutation>
  )
}

export default DashboardPage

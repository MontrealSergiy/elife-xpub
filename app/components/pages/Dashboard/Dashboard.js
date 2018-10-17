import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Box } from 'grid-styled'
import { Button } from '@pubsweet/ui'
import theme from '@elifesciences/elife-theme'

import { FormH2, FormH3 } from '../../ui/atoms/FormHeadings'
import Paragraph from '../../ui/atoms/Paragraph'
import ManuscriptStatus from '../../ui/atoms/ManuscriptStatus'
import StickyFooter from '../../ui/atoms/StickyFooter'

/* Temporary dashboard view pending receipt of designs */

const sizes = {
  mobile: theme.breakpoints[0],
  tabletPortrait: theme.breakpoints[1],
  tabletLandscape: theme.breakpoints[2],
  desktop: theme.breakpoints[3],
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})

const StyledBox = styled(Box)`
  display: none;
  ${media.mobile`display:block;`};
`

const StyledStickyFooter = styled(StickyFooter)`
  ${media.mobile`display: none;`};
`

const Header = styled.th`
  text-align: left;
  padding: 3px 6px;
`

const Cell = styled.td`
  border-top: 1px solid grey;
  padding: 3px 6px;
`

const Dashboard = ({ manuscripts, deleteManuscript, createManuscript }) => (
  <React.Fragment>
    <FormH2>Dashboard Dummy Page</FormH2>

    <StyledBox mb={4}>
      <Button
        data-test-id="desktop-new-submission"
        onClick={createManuscript}
        primary
      >
        New Submission
      </Button>
    </StyledBox>

    <FormH3>All manuscripts</FormH3>

    {!manuscripts.length && <p>No manuscripts to display</p>}

    {!!manuscripts.length && (
      <table data-test-id="manuscripts">
        <thead>
          <tr>
            <Header>Title</Header>
            <Header>Stage</Header>
            <Header />
          </tr>
        </thead>
        <tbody>
          {manuscripts.map(manuscript => (
            <tr key={manuscript.id}>
              <Cell data-test-id="title">
                <Paragraph data-test-id="title">
                  <Link to={`/submit/${manuscript.id}`}>
                    {manuscript.meta.title || '(Untitled)'}
                  </Link>
                </Paragraph>
              </Cell>
              <Cell data-test-id="stage">
                <ManuscriptStatus statusCode={manuscript.clientStatus} />
              </Cell>
              <Cell>
                <Button onClick={() => deleteManuscript(manuscript.id)} small>
                  Delete
                </Button>
              </Cell>
            </tr>
          ))}
        </tbody>
      </table>
    )}
    <StyledStickyFooter>
      <Button
        data-test-id="mobile-new-submission"
        onClick={createManuscript}
        primary
      >
        New Submission
      </Button>
    </StyledStickyFooter>
  </React.Fragment>
)

export default Dashboard

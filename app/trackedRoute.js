import React from 'react'
import { Route } from 'react-router-dom'
import ReactGA from 'react-ga'

const TrackedRoute = (props) => {
    const { path } = props
    trackPage(path)
    return (
        <Route { ...props  } />
    )
}

const trackPage = (page) => {
//   console.log(`tracking page ${page}`)
  ReactGA.set({
    page,
  })
  ReactGA.pageview(page)
}

export default TrackedRoute
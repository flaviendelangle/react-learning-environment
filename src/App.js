import { Router, Link } from '@reach/router'
import React from 'react'

import { ThunderProvider, NavBar, NavBarItem, FontIcon } from '@habx/thunder-ui'

import { ExercisePage, HomePage } from '@components/pages'

import { GlobalStyle, Page, PageContent } from './App.style'

const NavLink = props => (
  <NavBarItem
    as={Link}
    {...props}
    getProps={({ isCurrent }) => ({
      'data-active': isCurrent,
    })}
  />
)

const App = () => (
  <ThunderProvider>
    <GlobalStyle />
    <Page>
      <NavBar>
        <NavLink icon={<FontIcon icon="home" />} to="/" tooltip="Home" />
        <NavLink
          icon={<FontIcon icon="create" />}
          to="/exercises"
          tooltip="Exercises"
        />
      </NavBar>
      <PageContent>
        <Router>
          <HomePage path="/" />
          <ExercisePage path="/exercises/:exerciseId" />
        </Router>
      </PageContent>
    </Page>
  </ThunderProvider>
)

export default App

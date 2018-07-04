import React from 'react'
import ReactDOM from 'react-dom'
import LandingPage from './'
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<LandingPage />)
})
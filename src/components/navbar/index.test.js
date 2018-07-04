import React from 'react'
import { shallow } from 'enzyme'
import Nav from './'

describe('LotteryPage', () => {
  it('renders without crashing', () => {
    shallow(<Nav />)
  })
})
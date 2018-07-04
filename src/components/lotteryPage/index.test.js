import React from 'react'
import { shallow } from 'enzyme'
import LotteryPage from './'

describe('LotteryPage', () => {
  it('renders without crashing', () => {
    shallow(<LotteryPage />)
  })
})


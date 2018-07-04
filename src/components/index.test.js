import React from 'react'
import { shallow } from 'enzyme'
import App from './'
let wrapper

beforeEach(() => {
    wrapper = shallow(<App />)
  })

describe('App', () => {
  it('should render without crashing', () => {
    shallow(<App />)
  })
  
  it('should have a "page" state of false', () => {
    expect(wrapper.state().page).toBe(false)
  })

  it('#pageChangeHandler should change "page" state from false to true', () => {
    wrapper.instance().pageChangeHandler()
    expect(wrapper.state().page).toBe(true)
  })

  it('#logoClickHandler should change the "page" state to false', () => {
    wrapper.setState({page: true})
    expect(wrapper.state().page).toBe(true)
    wrapper.instance().logoClickHandler()
    expect(wrapper.state().page).toBe(false)
  })

  it('#enterBet should bring you to a confirmation screen', () => {
    wrapper.instance().enterBet()
  })
})
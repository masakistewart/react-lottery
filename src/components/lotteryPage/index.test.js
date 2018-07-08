import React from 'react'
import { shallow } from 'enzyme'

const errorObject = {
  text: "THERE WAS AN ERROR",
  status: "ERROR"
}.toString()

const completionObj = {
  text: "transaction complete",
  status: "COMPLETE"
}.toString()

const pendingObj = {
  text: 'submitting the transaction',
  status: "PENDING"
}.toString()


import LotteryPage from './'


describe('LotteryPage', () => {
  it('renders without crashing', () => {
    const app = shallow(<LotteryPage />)
  })

  it('#onSubmit: set a pending message', () => {
    const app = shallow(<LotteryPage />)
    app.instance().onSubmit({ preventDefault: () => true })
    expect(app.state().message.toString()).toBe(pendingObj)
  })

  it('#onSubmit: on completion set complete message', () => {
    const original = LotteryPage.prototype.sendEth

    LotteryPage.prototype.sendEth = () => {
      return true
    }

    const app = shallow(<LotteryPage />)
    app.instance().onSubmit({ preventDefault: () => { } })
    expect(app.state().message.toString()).toBe(completionObj)

    LotteryPage.prototype.sendEth = original
  })

  it('#onSubmit: on error set error message', () => {
    const original = LotteryPage.prototype.sendEth

    LotteryPage.prototype.sendEth = () => {
      return false
    }

    const app = shallow(<LotteryPage />)
    app.instance().onSubmit({ preventDefault: () => { } })

    expect(app.state().message.toString())
      .toBe(errorObject)
  })

})


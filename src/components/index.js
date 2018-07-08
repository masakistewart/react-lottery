import React, { Component } from "react"
import Nav from './navbar'
import LandingPage from './landingPage'
import LotteryPage from './lotteryPage'
import { Switch, Route } from "react-router-dom"


export default class App extends Component {

    render() {
        return (
            <div>
                <Nav />
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route exact path='/signup' render={(props) => <LotteryPage {...props} />} />
                </Switch>
            </div>
        )
    }
}
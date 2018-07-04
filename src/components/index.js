import React, { Component } from "react"
import Nav from './navbar'
import LandingPage from './landingPage'
import LotteryPage from './lotteryPage'

export default class App extends Component {
    
    constructor() {
        super()
        this.state = {
            page: false
        }
        this.pageChangeHandler = this.pageChangeHandler.bind(this)
        this.logoClickHandler = this.logoClickHandler.bind(this)
    }

    pageChangeHandler() {
        this.setState({page: true})
    }

    logoClickHandler() {
        this.setState({page: false})
    }

    render() {
    let currentPage = !this.state.page ? (<LandingPage pageChangeHandler={this.pageChangeHandler} />) : (<LotteryPage />)
        return (
            <div>
                <Nav  logoClickHandler={this.logoClickHandler}/>
                {currentPage}
            </div>
            )
    }
}
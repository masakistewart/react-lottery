import React, { Component } from "react"

export default class LandingPage extends Component {
    render() {
        return (
            <div className="outer">
                <div className="middle">
                    <div className="landing-heroBlock">
                        <h1>TEST YOUR LUCK</h1>
                        <button className="btn btn-dark" onClick={this.props.pageChangeHandler}>
                            Winner Winner Chicken Dinner
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
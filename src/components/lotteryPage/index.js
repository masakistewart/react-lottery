import React, { Component } from "react"

export default class LotteryPage extends Component {
    render() {
        return (
            <div className="outer">
                <div className="middle">
                    <div className="lotteryPage-form-container">
                        <form>
                            <div className="text-white">
                                <h1>Lottery Sign Up Form</h1>
                                <p className="lead">your email will not be shared with any third parties, please enter the require information below</p>
                            </div>
                            <div className="form-row mt-3">
                                <div className="col">
                                    <input type="email" className="form-control" placeholder="email" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="wallet address" />
                                </div>
                            </div>
                            <div className="form-row mt-3">
                                <button style={{width: '100%', background: 'red'}} className="btn btn-dark text-white">
                                    place your bet
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
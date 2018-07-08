import React, { Component } from "react"
import Lottery from '../../lotteryInterface'
import web3 from '../../web3'

export default class LotteryPage extends Component {

    state = {
        manager: ' ',
        players: ' ',
        balance: ' ',
        value: '0',
        message: {
            text: ' ',
            status: false
        }
    }

    async componentDidMount() {
        const { methods, options } = Lottery
        const manager = await methods.manager().call()
        const players = await methods.getPlayers().call()
        const balance = await web3.eth.getBalance(options.address)

        this.setState({ manager, players, balance })
    }

    async sendEth() {
        try {
            const accounts = await web3.eth.getAccounts()

            await Lottery.methods.enter().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            })

            return true
        } catch (e) {
            console.error(e)
            return false
        }
    }

    onSubmit = async (e) => {
        e.preventDefault()
        this.setState({ message: { text: 'submitting the transaction', status: "PENDING" } })

        return this.sendEth() ? this.setState({ message: { text: "transaction complete", status: "COMPLETE" } }) : this.setState({ message: { text: "THERE WAS AN ERROR", status: "ERROR" } })
    }

    alertCss(type) {
        return {
            "PENDING": "warning",
            "COMPLETE": "success",
            "ERROR": "error"
        }[type]
    }


    get showStatus() {
        let alertType = this.alertCss(this.state.message.status)
        return (
            <div className={`alert alert-${alertType}`} role="alert">
                {this.state.message.text}
            </div>
        )
    }

    onClick = async () => {
        try {
            const accounts = await web3.eth.getAccounts()
            this.setState({ message: { text: 'submitting the transaction', status: "PENDING" } })

            await Lottery.methods.pickWinner().send({
                from: accounts[0]
            })

            this.setState({ message: { text: "transaction complete", status: "COMPLETE" } })
        } catch (e) {
            console.log(e)
        }


    }

    render() {
        const { manager, players, balance, value } = this.state

        return (
            <div className="outer">
                <div className="middle">
                    <div className="lotteryPage-form-container">
                        {this.showStatus}
                        <form onSubmit={this.onSubmit}>
                            <div className="text-white">
                                <h1>Lottery Sign Up Form</h1>
                                <p>manager account is: {manager}</p>
                                <p>Number of people entered: {players.length}</p>
                                <p>Amount of winnings: {web3.utils.fromWei(balance, 'ether')}</p>
                                <p className="lead">your email will not be shared with any third parties, please enter the require information below</p>
                            </div>
                            <div className="form-row mt-3">
                                <div className="col">
                                    <input onChange={e => this.setState({ value: e.target.value })} type="number" value={value} className="form-control" placeholder="ether amount" />
                                </div>
                            </div>
                            <div className="form-row mt-3">
                                <button style={{ width: '100%', background: 'red' }} className="btn btn-dark text-white">
                                    place your bet
                                </button>
                            </div>
                        </form>
                        <button className="btn" onClick={this.onClick}>pickWinner</button>
                    </div>
                </div>
            </div>
        )
    }
}
import React, { Component } from "react"

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-dark" style={{background: '#333333'}}>
                <a className="navbar-brand text-white" onClick={this.props.logoClickHandler}>Etherium Lotto</a>
            </nav>
        )
    }
}
import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-dark" style={{background: '#333333'}}>
                <Link to="/" className="navbar-brand text-white" >Etherium Lotto</Link>
            </nav>
        )
    }
}
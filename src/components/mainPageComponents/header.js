import React, { Component } from 'react'
import logo from "../../../static/assets/AdHocLogo-svg (1).png"

export default class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <div className="left-column">
                    <div className="logo">
                        <img src={logo}></img>
                    </div>
                    <div className="phrase-wrapper">
                        When Necessary Or Needed
                    </div>
                </div>
                <div className="right-column">
                    <button className="header-btn">
                        Login
                    </button>
                    <button className="header-btn">
                        Register
                    </button>
                </div>
            </div>
        )
    }
}

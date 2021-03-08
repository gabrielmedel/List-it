import React, { Component } from "react";
import Logo from "../../Logo.png";
import "./Nav.css";
import NavIcons from "./NavIcons";

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="nav-container">
                    <div className="nav-items">
                        <div className="logo">
                            <a href="/">
                                <img src={Logo} alt="logo of List-it" />
                            </a>
                        </div>
                        <NavIcons></NavIcons>
                    </div>
                </div>
            </nav>
        );
    }
}

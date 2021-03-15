import React, { Component } from "react";
import "./Nav.css";
import NavIcons from "./NavIcons";

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="nav-container">
                    <div className="nav-items">
                        <NavIcons></NavIcons>
                    </div>
                </div>
            </nav>
        );
    }
}

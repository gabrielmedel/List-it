import React, { Component } from "react";
import "./Nav.css";
import plus from "./icons/plus.svg";
import home from "./icons/home.svg";
import user from "./icons/person.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class NavIcons extends Component {
    render() {
        function Icon(props: any) {
            return (
                <div className="icon-container" title={props.title}>
                    <img src={props.path} alt={props.alt} />
                </div>
            );
        }
        return (
            <div className="container-icons">
                <Router>
                    <Link to="/">
                        <Icon path={home} alt={"edit icon to edit an icon"} title={"Edit a note"} />
                    </Link>

                    <Icon path={plus} alt={"plus icon to add new icon"} title={"Add new note"} />
                    <Icon path={user} alt={"user account icon"} title={"Go to user panel"} />
                </Router>
            </div>
        );
    }
}

import React, { Component } from "react";
import "./Nav.css";
import plus from "./icons/plus.svg";
import edit from "./icons/edit.svg";
import user from "./icons/person.svg";

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
                <Icon path={plus} alt={"plus icon to add new icon"} title={"Add new note"} />
                <Icon path={edit} alt={"edit icon to edit an icon"} title={"Edit a note"} />
                <Icon path={user} alt={"user account icon"} title={"Go to user panel"} />
            </div>
        );
    }
}

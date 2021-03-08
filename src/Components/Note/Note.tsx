import React, { Component } from "react";
import "./Note.css";
import zoom from "../Nav/icons/zoom.svg";

var text = ["Leche 5l", "Agua 6", "2 barras de pan", "Lejia 5l"];

function NumberList(props: any) {
    const numbers = props.numbers;
    const listItems = numbers.map((number: any) => <li>{number}</li>);
    return <ul>{listItems}</ul>;
}

export default class Note extends Component<any, any> {
    render() {
        return (
            <div>
                <div className="note">
                    <h2>{this.props.title}</h2>
                    <div className="list-container">
                        <NumberList numbers={text} />
                    </div>
                    <div className="zoom-icon">
                        <div className="zoom-icon-note" title="zoom the list">
                            <img src={zoom} alt="zoom list" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

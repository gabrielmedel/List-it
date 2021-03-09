import React, { Component } from "react";
import "./Note.css";
import pin from "../../assets/icons/pin.svg";

var text = ["Leche 5l", "Agua 6", "2 barras de pan", "Lejia 5l", "Cereales 2"];

function NumberList(props: any) {
    const numbers = props.numbers;
    const listItems = numbers.map((number: any) => <li key={number}>- {number}</li>);
    return <ul>{listItems}</ul>;
}

export default class Note extends Component<any, any> {
    render() {
        const tip = `Pin the ${this.props.title} list`;
        const tip2 = `Zoom the ${this.props.title} list`;

        return (
            <div>
                <div className="note" title={tip2}>
                    <h2>{this.props.title}</h2>
                    <div className="list-container">
                        <NumberList numbers={text} />
                    </div>
                    <div className="zoom-icon">
                        <div className="zoom-icon-note" title={tip}>
                            <img src={pin} alt="zoom list" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

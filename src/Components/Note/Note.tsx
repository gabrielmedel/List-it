import React, { Component } from "react"
import "./Note.css"
import pin from "../../assets/icons/pin.svg"

function NotesList(props: any) {
  let notesListed = props.notes
    .map(({ title, items }) => (
      <div
        key={title}
        className="note"
        onClick={props.handleClick}
        title={"zoom the " + title + " list"}>
        <h2 key={title}>{title}</h2>
        <div className="list-container">
          <ul>
            {items.map(item => {
              return <li>- {item}</li>
            })}
          </ul>
        </div>
        <div className="zoom-icon">
          <div key={title} className="zoom-icon-note" title={"pin the " + title + " list"}>
            <img src={pin} alt="zoom list" />
          </div>
        </div>
      </div>
    ))
    .reverse()

  return notesListed
}

export default class Note extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { notes: JSON.parse(localStorage.getItem("note")) || [] }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e: any) {
    this.setState({ notes: [...this.state.notes, e.target.value] })
  }

  handleClick(e: any) {
    console.log(e.target)
  }
  render() {
    const notes = this.state.notes
    const tip = `Pin the ${this.props.title} list`
    const tip2 = `Zoom the ${this.props.title} list`
    return (
      <NotesList
        handleClick={this.handleClick}
        notes={this.state.notes}
        value={notes}
        onChange={this.handleChange}
        tip={tip}
        tip2={tip2}
      />
    )
  }
}

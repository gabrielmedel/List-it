import React, { Component, useState } from "react"
import "./Note.css"
import pin from "../../assets/icons/pin.svg"

function NotesList(props: any) {
  const [notes, setNotes] = useState(props.notes)

  function handleRemove(arr, value) {
    return arr.filter(function ({ id }) {
      return id !== value
    })
  }
  function removeNote(arr) {
    console.log(arr)
    let stringified = JSON.stringify(arr)
    localStorage.setItem("note", stringified)
    setNotes(arr)
  }

  let notesListed = notes
    .map(({ id, title, items }) => (
      <div
        onClick={e => removeNote(handleRemove(notes, id))}
        key={id}
        className="note"
        title={"zoom the " + title + " list"}>
        <h2 key={id}>{title}</h2>
        <div className="list-container">
          {console.log()}
          <ul>
            {items.map(item => {
              return <li>- {item}</li>
            })}
          </ul>
        </div>
        <div className="zoom-icon">
          <div key={id} className="zoom-icon-note" title={"pin the " + title + " list"}>
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
  }

  handleChange(e: any) {
    this.setState({ notes: [...this.state.notes, this.state.notes] })
  }

  render() {
    const notes = this.state.notes
    const tip = `Pin the ${this.props.title} list`
    const tip2 = `Zoom the ${this.props.title} list`

    return (
      <NotesList
        notes={this.state.notes}
        value={notes}
        onChange={this.handleChange}
        tip={tip}
        tip2={tip2}
      />
    )
  }
}

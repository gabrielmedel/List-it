import React, { Component } from "react"
import "./AddNote.css"

function InputGenerator(props: any) {
  const items = props.items
  const handler = props.handler
  const listItems = items.map((item: any) => (
    <input
      autoFocus
      className="noteItem"
      autoComplete="off"
      placeholder="Write the item here and press enter..."
      type="text"
      name="item"
      onKeyPress={handler}
    />
  ))
  return listItems
}

let notes = JSON.parse(localStorage.getItem("note")) || []

export default class AddNote extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      title: " ",
      value: [],
    }
    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
    this._handleKeyPress = this._handleKeyPress.bind(this)
  }

  _handleKeyPress(e: any) {
    if (e.key === "Enter") {
      e.preventDefault()
      this.setState({ value: [...this.state.value, e.target.value] })
    }
  }

  changeHandler(e: any) {
    e.preventDefault()
    this.setState({ title: e.target.value })
  }

  submitHandler(e: any) {
    e.preventDefault()
    this.setState({ value: [...this.state.value, e.target.value] })
    const note = {
      title: this.state.title,
      items: [...this.state.value],
    }
    notes.push(note)
    localStorage.setItem("note", JSON.stringify(notes))
    e.target.reset()
    this.setState({ title: "" })
    this.setState({ value: [] })
  }

  render() {
    return (
      <div className="addNoteContainer">
        <form className="addNote" onSubmit={this.submitHandler}>
          <input
            required
            autoComplete="off"
            placeholder="Write title here..."
            className="noteTile"
            type="text"
            name="title"
            onChange={this.changeHandler}
          />
          <input
            required
            className="noteItem"
            autoComplete="off"
            placeholder="Write the item here and press enter..."
            type="text"
            name="item"
            defaultValue={this.state.value}
            onKeyPress={this._handleKeyPress}
          />
          <InputGenerator items={this.state.value} handler={this._handleKeyPress}></InputGenerator>
          <input className="submitButton" type="submit" value="Add note" />
        </form>
      </div>
    )
  }
}

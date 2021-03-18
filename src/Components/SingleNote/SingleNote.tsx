import React, { Component } from "react"
import "./SingleNote.css"

export default class SingleNote extends Component<any, any> {
  render() {
    function Note(props: any) {
      function filter(arr, value) {
        return arr.filter(function ({ id }) {
          return id === value
        })
      }
      let notes = JSON.parse(localStorage.getItem("note")) || []

      let filtered = filter(notes, props.id)
      let notesListed = filtered
        .map(({ id, title, items }) => (
          <div key={id} className="note">
            <h2 key={id}>{title}</h2>
            <div className="list-container">
              {console.log()}
              <ul>
                {items.map(item => {
                  return <li>- {item}</li>
                })}
              </ul>
            </div>
          </div>
        ))
        .reverse()

      return notesListed
    }

    return (
      <div className="singleNote">
        <Note id={this.props.match.params.id} />
      </div>
    )
  }
}

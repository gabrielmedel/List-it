import React, { Component } from "react"

export default class SingleNote extends Component<any, any> {
  render() {
    function Icon(props: any) {
      return <h1>{props.title}</h1>
    }
    return (
      <div>
        <h1>
          <Icon title={"pipoo"} />
        </h1>
      </div>
    )
  }
}

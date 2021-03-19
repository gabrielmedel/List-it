import React from "react"
import "../../App.css"
import { ReactComponent as IconPlus } from "./close.svg"

export const Close = props => {
  return (
    <div className="Person close" onClick={props.handleClick}>
      <IconPlus className="home__icon" />
    </div>
  )
}

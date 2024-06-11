import React from "react"
export default function Button(props) {
  const style = {
    border: 0,
    backgroundColor: 'blue',
    padding: '5px 8px',
  }
  console.log(props)
  return (
    <button style={style} onClick={props.onClick}>{props.children}</button>
  )
}

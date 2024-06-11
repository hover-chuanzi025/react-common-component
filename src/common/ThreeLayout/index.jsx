import React from 'react'
import './index.css'
export default function ThreeLayout(props) {
  return (
    <div className='three-layout'>
      <div className='center'>{props.children[0]}</div>
      <div className='leftAside'>{props.children[1]}</div>
      <div className='rightAside'>{props.children[2]}</div>
    </div>
  )
}

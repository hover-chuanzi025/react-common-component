import React from 'react';
import './index.css';

export default function Modal(props) {
  return (
    <div className='modal-wrap'>
      { props.children }
    </div>
  )
}

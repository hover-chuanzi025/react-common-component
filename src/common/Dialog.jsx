import './Dialog.css'
import Close from './icons/Close'
import React from 'react'
export default function Dialog(props) {
  console.log(props)
  const [body, footer] = props.children;
  const style = {
    width: '30%',
    backgroundColor: '#fff',
    padding: '5px',
    borderRadius: '10px',
  }
  return (
    <div className="dialog-wrap" style={{ display: props.dialogVisible ? 'flex' : 'none'}}>
      <div style={style}>
        <div className="header">
          <Close toggle={props.changeDialog}/>
        </div>
        <div className="body">{body}</div>
        <div className="footer">{footer}</div>
      </div>
    </div>
  );
}
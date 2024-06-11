export default function Arrow(props) {
  const style = {
    transform: props.type === 'left' ? 'rotate(180deg)' : 'rotate(0deg)'
  }
  return (
    <svg 
      style={style}
      t="1718106998850"
      viewBox="0 0 1024 1024" 
      version="1.1" xmlns="http://www.w3.org/2000/svg" 
      p-id="4231" width="24" height="24"><path d="M318.57 223.95l322.99 322.99c21.87 21.87 57.33 21.87 79.2 0 21.87-21.87 21.87-57.33 0-79.2l-323-322.99c-21.87-21.87-57.33-21.87-79.2 0-21.86 21.87-21.86 57.33 0.01 79.2z" fill="#ffffff" p-id="4232"></path><path d="M729.75 555.95L406.76 878.93c-21.87 21.87-57.33 21.87-79.2 0-21.87-21.87-21.87-57.33 0-79.2l322.99-322.99c21.87-21.87 57.33-21.87 79.2 0 21.87 21.88 21.87 57.34 0 79.21z" fill="#ffffff" p-id="4233"></path></svg>
  )
}
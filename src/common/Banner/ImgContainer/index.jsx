import React, { forwardRef, useImperativeHandle } from 'react'
import { useState } from 'react'

const ImgContainer = forwardRef((props, ref) => {
  const [ x, setX] = useState(0)
  const style = {
    display: 'flex',
    width: props.imgSrcs.length * 1200 + 'px',
    transform: `translateX(-${x}%)`,
    transition: 'all ease .5s'
  }
  const imgStyle = {
    width: props.width + 'px',
    height: props.height  + 'px'
  }
  const imgList = props.imgSrcs?.map((src, index) => <img src={src} alt="" key={index} style={imgStyle}/>)

  /**
   * 切换到第几张图片
   * 调用此函数，此组件会经过一段动画后完成切换
   * @param {*} index 图片下标从0开始
   */
  useImperativeHandle(ref, () => ({
    switchTo(index) {
      setX(index * 100 / props.imgSrcs.length)
    }
  }));
  return (
    <div style={style}>
      {imgList}
    </div>
  )
})

export default ImgContainer
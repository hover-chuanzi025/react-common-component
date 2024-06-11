import React, { useRef, useState } from 'react'
import './index.css'
import Arrow from '../icons/Arrow'
import ImgContainer from './ImgContainer'
import pic1 from '../../assets/images/pic1.jpg'
import pic2 from '../../assets/images/pic2.jpg'
import pic3 from '../../assets/images/pic3.jpg'
import pic4 from '../../assets/images/pic4.jpg'
import pic5 from '../../assets/images/pic5.jpg'
import pic6 from '../../assets/images/pic6.jpeg'
import pic7 from '../../assets/images/pic7.jpg'
import pic8 from '../../assets/images/pic8.jpg'

export default function Banner(props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const childRef = useRef();
  // 需要父组件传入高度，宽度，
  const defaultProps = {
    width: 800 * 1.5,
    height: 450 * 1.5
  }
  const imgSrcs = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
  const handle = (action) => {
    if (action === '+') {
      if (childRef.current) {
        if(currentIndex < imgSrcs.length - 1) {
          childRef.current.switchTo(currentIndex + 1);
          setCurrentIndex(currentIndex + 1);
        }
      }
    } else {
      if (currentIndex > 0) {
        if (childRef.current) {
          childRef.current.switchTo(currentIndex - 1);
          setCurrentIndex(currentIndex - 1);
        }
      }
      
    }
   
  }
  const handleClick = (index) => {
    childRef.current.switchTo(index);
    setCurrentIndex(index);
  }

  const data = {
    ...defaultProps,
    ...props
  }
  
  return (
    <div className='banner-container' style={{width: `${data.width}px`, height: `${data.height}px`}}>
      <span className='next' onClick={() => handle('+')}>
        <Arrow />
      </span>
      <span className='before' onClick={() => handle('-')}>
        <Arrow type={'left'}/>
      </span>
      <div className='indicator-wrap'>
        { imgSrcs.map((item, index) => <div key={item} onClick={() => handleClick(index)} className={currentIndex === index ? 'active' : ''}></div>)}
      </div>
      <ImgContainer imgSrcs={imgSrcs} width={1200} height={675} ref={childRef}/>
    </div>
  )
}

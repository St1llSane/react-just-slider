import { useState, useEffect } from 'react'
import './slider.scss'

const images = [
  './slider-1.jpg',
  './slider-2.jpg',
  './slider-3.jpg',
  './slider-4.jpg',
  './slider-5.jpg',
]

function Slider() {
  const [sliderItemWidth] = useState(900)
  const [currentIndex, setCurrentIndex] = useState(0)

  const changeSlideHandler = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="slider">
      <div
        className="slider__wrapper"
        style={{
          width: `calc(${sliderItemWidth}px * ${images.length})`,
          transform: `translateX(calc(-${sliderItemWidth}px * ${currentIndex}))`,
        }}
      >
        {images.map((item, index) => (
          <div
            className={`slider__wrapper-item ${
              index === currentIndex ? 'active' : ''
            }`}
            key={item}
          >
            <img
              src={item}
              className={`slider__wrapper-item_img `}
              alt="slider-img"
            />
          </div>
        ))}
      </div>
      <ul className="slider__pagination">
        {images.map((_, index) => (
          <li
            className={`slider__pagination-item ${
              index === currentIndex ? 'active' : ''
            }`}
            key={index}
            onClick={() => changeSlideHandler(index)}
          ></li>
        ))}
      </ul>
    </div>
  )
}

export default Slider

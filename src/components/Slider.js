import React, { useState, useEffect } from 'react'
import { data } from '../data/data-slider'
import { MdArrowBackIos, MdArrowForwardIos } from '../utils'

const Slider = () => {
  const [sliderData, setSliderData] = useState(data)
  const [current, setCurrent] = useState(0)
  const length = sliderData.length - 1

  const nextSlide = () => {
    setCurrent(current === length ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length : current - 1)

  }



  return (
    <section className="slider-section">
          <MdArrowBackIos className='left-arrow' onClick={prevSlide}/>
          <MdArrowForwardIos className='right-arrow' onClick={nextSlide} />
          {sliderData.map((item, index) => {
            const { id, image, name } = item;
            return (
              <article key={id} className={index === current ? 'slide active' : 'slide'}>
                {index === current && (<img src={image} alt={name} className='slider-image' />)}
              </article>
            )
           })}

    </section>

  )
}

export default Slider

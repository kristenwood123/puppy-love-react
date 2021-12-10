import React, { useState, useEffect } from 'react'
import { data } from '../data/data-slider'

const Slider = () => {
  const [carouselData, setCarouselData] = useState(data)
  const [index, setIndex] = useState(0)
  return (
    <section className="slider-section">
        <div className="section-center">
          {carouselData.map((item, index) => {
            const { id, image, name } = item;
            return (
              <article key={id}>
                <img src={image} alt={name} className='slider-image' />
              </article>
            )
          })}
        </div>
    </section>
  )
}

export default Slider

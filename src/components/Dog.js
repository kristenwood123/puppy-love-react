import React from 'react'

const Dog = ({dog}) => {
  const { id, name, breed, image, percent } = dog;
  console.log(percent)

  return (
    <div key={id} className='dog__card'>
      <div className="card__wrapper">
      <img src={image} alt={name}/>
      <div className="card__text">
          <button className='match__button btn'>
          <svg className='heart__button' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                <path
                  d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
              </svg>
            <span className='heart-margin'></span>{percent}% Match!
            </button>
            <h3>{name}</h3>
            <p>{breed}</p>
        </div>
        {/* Button group */}
        <div className="button-group">
          <button className="icon-small icons">
                <a href="#" className="card-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </a>
              </button>

              <button className='icons'>
                <a href="#" className="card-link p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#000" className="bi bi-x-lg"
                    viewBox="0 0 16 16">
                    <path
                      d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                  </svg>
                </a>
              </button>

              <button className='icons'>
                <a href="#" className="card-link p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#AB37A5"
                    className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                    <path
                      d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                  </svg>
                </a>
              </button>
              
              <button className="icon-small icons">
                <a href="#" className="card-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="violet"
                    className="bi bi-lightning-fill" viewBox="0 0 16 16">
                    <path
                      d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z" />
                  </svg>
                </a>
              </button>
            </div>
          </div> 
      </div>
  )
}

export default Dog

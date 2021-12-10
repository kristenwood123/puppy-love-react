import React from 'react'
import Dog from './Dog'

const Explore = ({ currentUser, setCurrentUser, dogs }) => {
  const handleLike = () => {

  }
  // pass dog Id
  const handleDislike = () => {

  }

  console.log(currentUser)
  return (
        <div className='explore-page'>
          <h1>Explore</h1>
          <div className="dog-wrapper">
            {dogs.map(dog => {
              return (
                <div className='dog-list'>
                  <Dog dog={dog}/>
                </div>
              )
            })}
          </div>
        </div>
  )
}

export default Explore

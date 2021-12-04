import React from 'react'
import Dog from './Dog'

import image from '../images/dog1.jpg'

const Explore = ({ currentUser, setCurrentUser, dogs }) => {
  const handleLike = () => {

  }
  // pass dog Id
  const handleDislike = () => {

  }

  console.log(currentUser)
  return (
    <div style={{backgroundColor: 'white', color: 'black'}}>
      <h1>Explore</h1>
      {dogs.map(dog => {
        return (
          <React.Fragment>
            <Dog dog={dog}/>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Explore

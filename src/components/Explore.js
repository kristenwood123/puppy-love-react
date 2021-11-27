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
    <div style={{backgroundColor: 'white', color: 'black'}}>
      <h1>Explore</h1>
      {dogs.map(dog => {
        return (
          <>
            {/* <p>{dog.name}</p>
            <button>Like</button>
            <button>Dislike</button> */}
            <Dog dog={dog}/>
          </>
        )
      })}
    </div>
  )
}

export default Explore

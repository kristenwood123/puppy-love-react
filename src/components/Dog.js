import React from 'react'


const Dog = ({dog}) => {
  const { id, name, breed, image } = dog;

  return (
    <div key={id}>
      <h1>{name}</h1>
      <p>{breed}</p>
      <img src={image} alt={name} style={{maxWidth: '200px'}}/>
    </div>
  )
}

export default Dog

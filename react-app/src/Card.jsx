import React from 'react'
const card = ({el}) => {
  return (
    <div className='card'>
        <img src={el.photo}></img>
        <h1>Name : {el.name}</h1>
        <h2>Age : {el.age}</h2>
        <h2>Country : {el.country}</h2>
      
    </div>
  )
}
export default card
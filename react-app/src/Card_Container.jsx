import React from 'react'
import Card from './Card'

const Card_Container = ({players}) => {
  return (
    <div >
      {players.map(el=><Card el={el}/>)}
    </div>
  )
}

export default Card_Container

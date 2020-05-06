import React from 'react'

import './styles.css'

function Comment ({ comment }) {
  const { author, content } = comment
  const { avatar, name } = author

  return (
    <div className='comment'>
      <img src={avatar} alt={`Foto de ${name}`}/>
      <p><strong>{name}</strong> {content}</p>
    </div>
  )
}

export default Comment

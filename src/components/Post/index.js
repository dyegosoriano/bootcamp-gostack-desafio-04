import React from 'react'
import Coment from '../Comment'

import './styles.css'

function Post ({ data }) {
  const { author, date, content, comments } = data
  const { avatar, name } = author

  return (
    <div className='post'>
      <div className='post__header'>
        <img src={avatar} alt={'Foto de ' + name}/>
        <div>
          <span className='name'>{name}</span>
          <time>{date}</time>
        </div>
      </div>

      <p className='content'>{content}</p>

      {comments.map(comment => <Coment key={comment.id} comment={comment}/>)}
    </div>
  )
}

export default Post

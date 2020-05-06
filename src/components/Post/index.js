import React from 'react'
import Coment from '../Comment'

import './styles.css'

function Post ({ data }) {
  return (
    <div className='post'>
      <div className='post__header'>
        <img src={data.author.avatar} alt={'Foto de ' + data.author.name}/>
        <div>
          <span className='name'>{data.author.name}</span>
          <time>{data.date}</time>
        </div>
      </div>

      <p className='content'>{data.content}</p>

      {data.comments.map(comment => <Coment key={comment.id} comment={comment}/>)}
    </div>
  )
}

export default Post

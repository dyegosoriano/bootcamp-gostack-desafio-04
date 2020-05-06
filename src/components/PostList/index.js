import React, { Component } from 'react'

import Post from '../Post'

import './styles.css'

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Dyego Soriano",
          avatar: "https://avatars3.githubusercontent.com/u/4140145?s=400&u=d2c245d62a73752fa034546e277d637cca37dc59&v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Filipe Deschamps",
              avatar: "https://avatars2.githubusercontent.com/u/4248081?s=400&u=98a643ad7f90c7950d9311e4b5a762fe77af8ada&v=4"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Dyego Soriano",
          avatar: "https://avatars3.githubusercontent.com/u/4140145?s=400&u=d2c245d62a73752fa034546e277d637cca37dc59&v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Filipe Deschamps",
              avatar: "https://avatars2.githubusercontent.com/u/4248081?s=400&u=98a643ad7f90c7950d9311e4b5a762fe77af8ada&v=4"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
    ]
  };

  render () {
    return (
      <div className='container'>
        {this.state.posts.map(post => <Post key={post.id} data={post}/>)}
      </div>
    )
  }
}

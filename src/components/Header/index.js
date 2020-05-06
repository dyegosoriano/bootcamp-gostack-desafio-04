import React from 'react'

import './styles.css'

function Header () {
  return (
    <header>
      <span>Facebook</span>

      <div className='perfil'>
        <p>Meu perfil</p>
        <div className='perfil-img'></div>
      </div>
    </header>
  )
}

export default Header

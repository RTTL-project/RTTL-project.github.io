import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="https://rttl-project.github.io/" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>한가</strong>할 때 쓰는 블로그
        <br />
        <br />
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header

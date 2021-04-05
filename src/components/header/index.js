import React from 'react'
import './style.scss'


const Header = (props) => {
  return (
    <header className="header">
      <div className="menu">
        <div className="menu-item home">首页</div>
        <div className="menu-item">桥</div>
        <div className="menu-item">连接</div>
      </div>
    </header>
  )
}

export default Header
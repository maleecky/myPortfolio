import React from 'react'
import { FiHome } from 'react-icons/fi'
import { MdWorkOutline } from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'
import { TbHeartHandshake } from 'react-icons/tb'
import { HiSortDescending } from 'react-icons/hi'
import './menu.scss'

function Menu() {
  return (
    <nav className="sm-dsply topAlways vr-centered ps-fixed-b">
      <div className="flex-np nmwid">
        <a href="#home">
          <FiHome />
        </a>
        <a href="#works">
          <MdWorkOutline />
        </a>
        <a href="#about">
          <BsPerson />
        </a>
        <a href="#experience">
          <TbHeartHandshake />
        </a>
        <a href="#end">
          <HiSortDescending />
        </a>
      </div>
    </nav>
  )
}

export default Menu

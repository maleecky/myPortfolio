import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { MdOutlineWork } from 'react-icons/md'
import { TbHeartHandshake } from 'react-icons/tb'
import { HiOutlineSortDescending } from 'react-icons/hi'
import './navtab.scss'
function Navtab() {
  return (
    <nav className="menutab" aria-label="links to navigate through different pages">
      <ul>
        <li>
          <a href="#home">
            <AiOutlineHome />
          </a>
        </li>
        <li>
          <a href="#works">
            <MdOutlineWork />
          </a>
        </li>
        <li>
          <a href="#about">
            <BsPerson />
          </a>
        </li>
        <li>
          <a href="#experience">
            <TbHeartHandshake />
          </a>
        </li>
        <li>
          <a href="#foot">
            <HiOutlineSortDescending />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navtab

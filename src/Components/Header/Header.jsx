import React, { useEffect, useRef, useState } from 'react'
import './header.scss'
import { BiMenu } from 'react-icons/bi'
import CV from '../../Assets/Pdfs/AO-resume.pdf'

function Header() {
  const [iszeroWidth, setisWidth] = useState(true)
  const [show, setshow] = useState(true)

  const menuRef = useRef()
  if(!iszeroWidth){
    document.body.style.overflowY = 'hidden'
  }
  else{
    document.body.style.overflowY = 'visible'
  }

useEffect(()=>{
 let listener = document.addEventListener('scroll',e => {
    const scrolled = document.scrollingElement.scrollTop
    if(scrolled >=200){
      setshow(false)
    }else{
      setshow(true)
    }
  })
  return () =>{
    window.removeEventListener('scroll',listener)
  }
},[show])
useEffect(()=>{
  document.addEventListener('mousedown',(event)=>{
    if(!menuRef.current.contains(event.target)){
      setisWidth(true)
    }
  })
},[iszeroWidth])




  return (
    <header className={`pghead R-flex  ${!show && 'hide-nav'}`}>
      <div className="logo">
        <a href="#home">
          <svg
            width="43"
            height="44"
            viewBox="0 0 43 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="40.7097"
              height="42"
              fill="transparent"
              stroke="var(--green-crl)"
              strokeWidth="2"
            />
            <path
              d="M8.80127 28H7.20752L12.2461 16.1299H13.9478L19.0112 28H17.3096L15.7739 24.2646H11.8477L12.271 23.0195H15.2593L13.043 17.6406L8.80127 28ZM21.8335 22.0317C21.8335 25.2358 23.2806 26.8379 26.1748 26.8379C29.0081 26.8379 30.4248 25.2358 30.4248 22.0317C30.4248 18.8719 29.0081 17.292 26.1748 17.292C23.2806 17.292 21.8335 18.8719 21.8335 22.0317ZM20.2148 22.0815C20.2148 18.0584 22.2015 16.0469 26.1748 16.0469C30.0872 16.0469 32.0435 18.0584 32.0435 22.0815C32.0435 26.0825 30.0872 28.083 26.1748 28.083C22.2015 28.083 20.2148 26.0825 20.2148 22.0815Z"
              fill="var(--green-crl)"
            />
          </svg>
        </a>
      </div>
      <nav className="nav-links">
        <ol className="sm-flex-nav flex-np">
          <li>
            <a href="#works">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href={CV} className="primary-btn">
              Resume
            </a>
          </li>
        </ol>
        <div className="sm-menu">
          {iszeroWidth && (
            <button
              className="btn sm-menu-btn"
              aria-expanded="false"
              aria-label="Menu"
              onClick={() => setisWidth(!iszeroWidth)}
            >
              {' '}
              <BiMenu />
            </button>
          )}
          <div
            className={`sm-menu-overlay ${
              iszeroWidth ? 'hidden-menu' : 'shown-menu'
            }` }
          ref={menuRef}
          >
            {iszeroWidth && (
              <>
               <button
              className="btn close-btn "
              aria-expanded="false"
              onClick={() => setisWidth(!iszeroWidth)}
              tabIndex={-1}
            >
              &times;
            </button>
            <div className="sm-menu-content center-aligned"  >
              <ol>
                <li>
                  <a href="#works"  tabIndex={-1}  >Work</a>
                </li>
                <li>
                  <a href="#about"  tabIndex={-1} >About</a>
                </li>
                <li>
                  <a href="#experience"  tabIndex={-1} >Experience</a>
                </li>
                <li>
                  <a href="#contact"  tabIndex={-1} >Contact</a>
                </li>
                <li>
                  <a href={CV} className="primary-btn"  tabIndex={-1} >
                    Resume
                  </a>
                </li>
              </ol>
            </div>
              
              </>
            )}
            {!iszeroWidth && (
                            <>
                            <button
                           className="btn close-btn "
                           aria-expanded="false"
                           onClick={() => setisWidth(!iszeroWidth)}
                           tabIndex={1}
                         >
                           &times;
                         </button>
                         <div className="sm-menu-content center-aligned"  >
                           <ol>
                             <li>
                               <a href="#works"  tabIndex={1} onClick={() => setisWidth(!iszeroWidth)}>Work</a>
                             </li>
                             <li>
                               <a href="#about"  tabIndex={1} onClick={() => setisWidth(!iszeroWidth)}>About</a>
                             </li>
                             <li>
                               <a href="#experience"  tabIndex={1} onClick={() => setisWidth(!iszeroWidth)}>Experience</a>
                             </li>
                             <li>
                               <a href="#contact"  tabIndex={1} onClick={() => setisWidth(!iszeroWidth)} >Contact</a>
                             </li>
                             <li>
                               <a href={CV} className="primary-btn"  tabIndex={1} onClick={() => setisWidth(!iszeroWidth)}>
                                 Resume
                               </a>
                             </li>
                           </ol>
                         </div>
                           
                           </>
            )}
           
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

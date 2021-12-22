import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import "../style/navbar.css"
import { IconContext } from 'react-icons/lib'


export default function Navb() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}} />
      <div className="navbar">
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
           <li className='navbar-toggle'>
              <Link to='#' className='menu-exit'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
              <div className='Data'>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                   <li>
                    <Link to="/About">About</Link>
                  </li>
                  <li>
                    <Link to="/Talk">Talk</Link>
                  </li>
                </ul>
            </div>
          </ul>
        </nav>
    </>
  )
}

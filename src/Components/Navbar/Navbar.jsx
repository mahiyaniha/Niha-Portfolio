import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
    const [menu,setMenu] = useState("home")
    const [mobileOpen, setMobileOpen] = useState(false)
    return (
        <div className= 'navbar'>
            <img src={logo} alt="" />
            <img 
            src={menu_open} 
            alt="" 
            className={`nav-mob-open ${mobileOpen ? "hide" : ""}`}
            onClick={() => setMobileOpen(true)}
/>
            <ul className={`nav-menu ${mobileOpen ? "nav-menu-open" : ""}`}>
                <img src={menu_close} alt="" className="nav-mob-close"  onClick={() => setMobileOpen(false)} />
                <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"? <img src={underline}alt=""/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"? <img src={underline}alt=""/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#education'><p onClick={()=>setMenu("education")}>Education</p></AnchorLink>{menu==="education"? <img src={underline}alt=""/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>My Work</p></AnchorLink>{menu==="work"? <img src={underline}alt=""/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"? <img src={underline}alt=""/>:<></>}</li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>

        </div>
    )
}

export default Navbar
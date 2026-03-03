import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt=""/>
            <h1><span>Hi, I’m Mahiya Niha, </span>I love coding, designing, and creating beautiful web experiences.</h1>
            <p>Based in Bangladesh</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            </div>

        </div>
    )
}

export default Hero
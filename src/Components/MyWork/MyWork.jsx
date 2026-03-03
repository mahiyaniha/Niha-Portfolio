import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>

      <div className="mywork-title">
        <h1>My Work</h1>
        <img src={theme_pattern} alt=""/>
      </div>

      <div className="mywork-container">

        <div className="work-card">
          <h2>Currency Converter App</h2>
          <p>Java & JavaFX app with real-time currency rates and flags</p>
        </div>

        <div className="work-card">
          <h2>React Portfolio Website</h2>
          <p>Responsive personal portfolio using React and CSS</p>
        </div>

        <div className="work-card">
          <h2>Tic-Tac-Toe Game</h2>
          <p>A modern, stylized take on the classic X and O game.</p>
        </div>
      </div>
    </div>
  )
}

export default MyWork
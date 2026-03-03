import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpeg'
const About = () => {
    return(
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt=""/>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt=""/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hello! I’m <strong>Mahiya Niha</strong>, a passionate Computer Science student from Bangladesh. I love building interactive websites and exploring new technologies. My journey in programming has made me adaptable, curious, and eager to take on challenging projects.</p>
                        <p>Over time, I have gained hands-on experience with <strong>HTML, CSS, JavaScript, React JS, C and C++, and Python</strong>. I enjoy turning ideas into clean and functional code, and I’m constantly learning to improve my skills. When I’m not coding, I love designing graphics and exploring creative solutions to problems.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{width:"50%"}} /> 
                        </div>
                         <div className="about-skill">
                            <p>React JS</p><hr style={{width:"30%"}} /> 
                        </div>
                         <div className="about-skill">
                            <p>Javascript</p><hr style={{width:"30%"}} /> 
                        </div>
                         <div className="about-skill">
                            <p>Next JS</p><hr style={{width:"10%"}} /> 
                        </div>
                        <div className="about-skill">
                            <p>Python</p><hr style={{width:"50%"}} /> 
                        </div>
                        <div className="about-skill">
                            <p>C and C++</p><hr style={{width:"10%"}} /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
import React from 'react'
import "./TrainingStyles.css"

import Pod from "../assets/pod.jpg"
import Moon from "../assets/moon.jpg"
import { Link } from 'react-router-dom'

function TrainingSection() {
  return (
    <div className='training'>
      <div className='left'>
        <h1>Training</h1>
        <p>Trough training is a necessity when traveling to space. We offer all inclusive training for pre-flight an in-flight scenarios.</p>
        <Link to="/contact"><button className="btn">Contact</button></Link>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='image-stack top'>
            <img src={Moon} className="img" alt="Spaceman on the Moon" />
          </div>
          <div className='image-stack bottom'>
            <img src={Pod} className="img" alt="Spacerocket flying into the Galaxy" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingSection
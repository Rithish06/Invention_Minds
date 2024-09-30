import React, { useState } from 'react'
import './Vision.css'

const Vision = () => {

    const [vision, hideVision] = useState(false)
    const [mission, hideMission] = useState(false)


    const visionBtn = () => {
        hideVision(true)
        hideMission(false)
    }

    const missionBtn = () => {
        hideVision(false)
        hideMission(true)
    }

  return (
    <div className='visionContainer'>
        <div className="Vision_content">
            <div className={`Vision Vission_box ${vision ? "missionActive" : "visionActive"}`}>
                <div className="vision_heading">Vision</div>
                <div className="vision_para">Empower brands through cutting-edge digital prowess. We envision a dynamic agency that pioneers creativity, leverages data insights and forges authentic connections. Our mission: catalyze business growth by crafting strategies that redefine digital marketing’s impact.</div>
            </div>
            <div className={`Mission Vission_box ${vision ? "missionActive" : "visionActive"}`}>
                <div className="vision_heading">Mission</div>
                <div className="vision_para">Our mission statement serves as a constant reminder that we want to build happy teams who, in turn, build satisfied clients. Our company depends heavily on its clients, therefore keeping them happy is key.</div>
            </div>
        </div>
        <div className="FlexButtons">
            <div className="button_circle" onClick={missionBtn}><i className="fa-solid fa-angle-up arrow_buttons"></i></div>
            <div className="button_circle" onClick={visionBtn}><i className="fa-solid fa-angle-down arrow_buttons"></i></div>
        </div>
    </div>
  )
}

export default Vision

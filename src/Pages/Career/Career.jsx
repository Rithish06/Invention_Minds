import React from 'react'
import './Career.css'
import { assets } from '../../assets/assets'

const Career = () => {
  return (
    <div className='Career_Container'> 
        <div className="career_banner">
            <div className="careerBannerContent">
                {/* career heading */}
                <div className="career_heading">
                    <div className="invention">Invention</div>
                    <div className="minds">Minds</div>
                    <div className="hiring">Now Hiring...</div>
                </div>
                {/* career questions */}
                <div className="career_questions">
                    <img src= {assets.careerQuestions} alt="" />
                </div>
                {/* career button */}
                <div className="career_exploremoreButton">Explore</div>
            </div>
            <div className="career_banner_image">
                <img src={assets.Career_Brain} alt="" />
            </div>
        </div>
        <div className="career_container_2">
             
        </div>
    </div>
  )
}

export default Career

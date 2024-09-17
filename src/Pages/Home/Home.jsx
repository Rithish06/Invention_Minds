import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='Home_container'>
        <div className="home_container_1">
            <div className="greeting">Welcome to Invention Minds</div>
            <div className="container_1_heading">We Partner With You</div>
            <div className="container_1_description">Squash latencies, detect bottlenecks and debug errors - 10X faster.<br/>Slash APM licensing costs by over 60%</div>
            <div className="contaier_1_buttons">
                <button className="container_1_btn container_1_btn_1">Get Started</button>
                <button className="container_1_btn container_1_btn_2">Explore More</button>
            </div>
        </div>
    </div>
  )
}

export default Home

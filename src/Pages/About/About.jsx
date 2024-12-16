import React from 'react'
import './About.css'
import '../../assets/assets'
import { assets } from '../../assets/assets'
import Navbar from '../../Components/Navbar/Navbar'
import Vision from '../../Components/Vision/Vision'
import Heroics from '../../Components/Heroics/Heroics'
import { Helmet } from 'react-helmet'

const About = () => {
  return (
    <div className='about_container'>

        {/* meta title and description */}
        <Helmet>
            <title>About Invention Minds | Leading Digital Solutions Provider</title>
            <meta name = "description" content = "Learn about Invention Minds, a Bengaluru-based leader in digital solutions, web development, mobile apps, and digital marketing innovation."/>
            <meta name = "keywords" content = "About Invention Minds, Top digital solutions provider, Innovative technology solutions, Web development experts, Mobile app development services, Digital marketing solutions, Technology-driven business growth, Leading digital agency in Bengaluru"/>
        </Helmet>

        {/* container 1 */}
        <div className="about_container_1">
            <div className="About_Banner_content">Your Partner for Digital Success</div>
            <div className="About_banner_description">At Invention Minds, we believe in making a positive difference for businesses by leveraging the right tools and strategies.</div>
            <div className="About_banner_container fa-fade">
                <img src={assets.AboutContainer1Img} alt="Invention Minds office building in Bangalore" className="AboutBannerImg"/>
            </div>
        </div>

        {/* container 2 */}

        <div className="about_container_2">
            <div className="container_2_box container_2_box_1">
                <div className="box_1_heading">What<br /><span>we</span><br />do</div>
                <div className="box_content">
                    <div className="para_1">The Invention Minds team comes with a unique strategy, and our market analyses are accurate and subject-oriented. We are best at providing consistently successful strategies and unique, forward-thinking digital marketing, web development, and website design solutions that consider each client’s individual requirements and unique demands.</div>
                    <div className="para_1">Our team of specialists and strong knowledge base allow us to take any project from inception, through requirements and design, to implementation and installation. For each step in the execution of the project, we do our best to perform tasks with responsibility by using knowledge, creativity, and skills to the utmost efficiency.</div>
                </div>
            </div>
            <div className="container_2_box container_2_box_2">
                <div className="box_content">
                    <div className="para_1">We value open communication and are always delighted to engage in friendly discussions to address questions, concerns, or ideas from our customers, aiming to reach the best decisions together. Client satisfaction is our primary driving force, and we pride ourselves on delivering promises while acknowledging and rectifying any mistakes. Upholding business ethics and trust is paramount to achieving stable, ongoing growth. The basic ideals at Invention Minds are quality over quantity, context over substance, and accuracy over production. Our commitment to achieving optimization in all processes aligns with the fundamental factors of success: Quality, Time, and Cost.</div>
                </div>
                <div className="box_image">
                    <img src={assets.Astronaut} alt="Invention Minds office building in Bangalore" className='fa-beat-fade' />
                </div>
            </div>
        </div>

        <div className="container_3">
            <Vision />
        </div>
        <div className="container_4">
            <Heroics />
        </div>

    </div>
  )
}

export default About

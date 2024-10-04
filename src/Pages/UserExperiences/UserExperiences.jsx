import React from 'react'
import './UserExperiences.css'
import { assets } from '../../assets/assets'
import ServicesBannerDesign from '../../Components/ServicesBannerDesign/ServicesBannerDesign'


const UserExperiences = () => {
  return (
    <div className='servicesPage'>
        <ServicesBannerDesign 
        staza1Color = "#fff"
        staza2Color = "#F99B2B"
        staza3Color = ""
        stanza1 = "Transforming Ideas into Exceptional "
        stanza2 = "User Experiences"
        decription = "Create intuitive UI/UX designs that enhance user engagement and improve overall satisfaction."
        smallTitle = "UI/UX Design"
      />

      <div className="UserExperienceContainer_2">
        <div className="gradient_headings">Choose Invention Minds for our expertise in crafting user-friendly designs that enhance engagement and drive results.</div>
        <div className="services_para">At Invention Minds, we believe that exceptional UI/UX design is not just about aesthetics- it's about creating intuitive experiences that meet user expectations and drive business success. UI (User Interface) focuses on the visual aspects, ensuring the product is attractive, cohesive and brand-aligned. From color schemes to layout, our team ensures every element enhances user interaction. UX (User Experience), on the other hand, deals with functionality, ensuring users navigate smoothly, achieving their goals effortlessly.</div>
        <div className="services_para">We conduct thorough user research, prototyping, and testing to ensure our designs are not only beautiful but also effective. Whether it’s web or mobile development, our approach ensures your product feels good and works seamlessly, improving user retention and engagement. A consistent and well-designed UI/UX can differentiate your product in the market, making it more appealing and functional for users.</div>
      </div>

      <div className="UserExperienceContainer_3">
        <div className="UE_contentts">
            <div className="UE_con_row UE_con_row_1">
                <div className="UE_con_row_box">
                    <img src={assets.uxIcon1} alt="" />
                    <div className="box_heading">Empathizing with user needs</div>
                    <div className="box_description">Understanding your unique challenges, we tailor solutions that align with your vision and goals. Your success drives every decision we make.</div>
                </div>
                <div className="UE_con_row_box">
                    <img src={assets.uxIcon2} alt="" />
                    <div className="box_heading">Defining problems clearly</div>
                    <div className="box_description">By identifying the core issues, we provide clarity and focus to your project. Clear problem definition ensures efficient and effective solutions.</div>
                </div>
            </div>
            <div className="UE_con_row UE_con_row_2">
            <div className="UE_con_row_box">
                    <img src={assets.uxIcon3} alt="" />
                    <div className="box_heading">Ideating solutions through brainstorming</div>
                    <div className="box_description">Collaborative brainstorming sparks innovative ideas, turning challenges into opportunities. Together, we create tailored solutions that drive success.</div>
                </div>
                <div className="UE_con_row_box">
                    <img src={assets.uxIcon4} alt="" />
                    <div className="box_heading">Prototyping and testing to ensure designs are flawless</div>
                    <div className="box_description">Collaborative brainstorming sparks innovative ideas, turning challenges into opportunities. Together, we create tailored solutions that drive success.</div>
                </div>
            </div>
        </div>
        <div className="UE_img">
            <img src={assets.UserExperienceImg} alt="" />
        </div>
      </div>
      <div className='services_para UserExperienceDescription'>If you’re looking to save time and elevate your digital presence, let Invention Minds provide a smooth, enjoyable and results-driven design for your product. Whether for mobile apps or websites, our focus is on providing solutions that match your business objectives while keeping the user’s experience at the core.</div>
    </div>
  )
}

export default UserExperiences

import React,{useState, useEffect, useMemo} from 'react'
import './Heroics.css'
import SandeepSir from '../../assets/Images/Sandeep.png'
import Tejaswini from '../../assets/Images/Tejaswini.png'
import Nithish from '../../assets/Images/Nithish.png'
import Rithish from '../../assets/Images/Rithish.png'
import Keerthu from '../../assets/Images/Keerthu.png'


const Heroics = () => {
  const heroics_content = [
    {
      name : "Sandeep Kumar P",
      designation : "Head of Business & Strategies",
      experience : "17",
      briefProfile : "For 15 years, Mr.Sandeep Kumar P worked in the healthcare, education, and information technology sectors. He is well renowned for his strategic inventiveness in fusing creative strategy with commercial objectives. Today, he effectively oversees brand development and marketing plans for several clients."
    },
    {
      name : "Tejaswini M Gowda",
      designation : "Process Analyst ",
      experience : "8",
      briefProfile : "Ms. Tejaswini is well-known for her strategic acumen; she has successfully linked company goals with creative approaches for the past five years across a wide range of industries (Healthcare, Education, and Real estate). She successfully steers her team, which is in charge of brand design and marketing strategies for a wide range of clients."
    },
    {
      name : "Nithish M. K",
      designation : "UI & UX Instructor and Designer ",
      experience : "4",
      briefProfile : "Mr. Nithish is a seasoned UI & UX Designer and Instructor with shaping user experiences across diverse industries, including Real Estate, E-Commerce, Healthcare, and Digital Media. His expertise in Figma, WordPress,Adobe and Filmora has been instrumental in delivering exceptional design solutions that resonate with both users and stakeholders. As an instructor, Nithish brings his real-world experience"
    },
    {
      name : "Rithish M",
      designation : "Full Stack Developer",
      experience : "4",
      briefProfile : "Mr. Rithish is a proficient Full Stack Developer with a strong command of both frontend and backend technologies. With a passion for creating visually stunning and highly responsive web applications, Rithish combines his technical expertise with a keen eye for design to deliver seamless user experiences. His proficiency in HTML, CSS, JavaScript, "
    },
    {
      name : "Keerthana M",
      designation : "Full Stack Developer ",
      experience : "6",
      briefProfile : "Ms. Keerthana M is a dynamic Full Stack Developer with one year of rich experience in developing scalable and efficient web applications. Specializing in Angular, Node.js, Express.js, and MySQL, Keerthana brings a comprehensive skill set that covers both frontend and backend development. Her proficiency in these technologies enables her to craft robust solutions that align with business needs and deliver superior user "
    },
]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentDetails, setCurrentDetails] = useState(0);
    const images = [SandeepSir,Tejaswini,Nithish,Rithish,Keerthu]
    // const pics = images.reverse()
    const updateCarousel = () => {
        const imageElements = document.querySelectorAll(".image");
    
        imageElements.forEach((img, index) => {
    
          if (index < currentIndex) {
            img.style.transform = "rotate(360deg)";
            img.style.marginLeft = "2000px"
            img.style.marginTop = "-300px"
            img.style.transitionDuration = "1s"
          } 
          else if (index == currentIndex) {
            img.style.transform = "rotateX(0deg)";
            img.style.zIndex = "100";
            img.style.marginLeft = ""
            img.style.marginTop = ""
            img.style.transitionDuration = "1s"
          } 
          else {
            img.style.transform = `rotate(${(index - currentIndex) * -3}deg)`;
            img.style.zIndex = "1";
            img.style.transitionDuration = "1s"
          }
        });
      };
    
      
    
      useEffect(() => {
        updateCarousel();
      }, [currentIndex]);
    
      const handleNext = () => {
        if (currentIndex < images.length - 1) {
          setCurrentIndex((prevIndex) => prevIndex + 1);
          setCurrentDetails((curr) => curr - 300)
        }
      };

      const handlePrev = () => {
        if (currentIndex > 0){
          setCurrentIndex((prevIndex) => prevIndex - 1);
          setCurrentDetails((curr) => curr + 300)
        }
      };

      const contentStyle = {
        transform : `translateY(${currentDetails}px)`,
        transitionDuration  : "1s",
        transitionTimingFunction : "ease-out"
      }


  return (
    <div className='Heroic_container'>    
    <div className="Meet_Heroics">MEET OUR TEAM</div>
    <div className="Heroics">
      <div className="heroics_content">
      <div className="box">
          {
            heroics_content.map((content, index) => (
              <div style={contentStyle} className='content' key = {index}>
                  <div className='heroicNames'>{content.name}</div>
                  <div className='heroicDesignation'>{content.designation} | <span className='YearsOfExperience'>Years of Experience : {content.experience}</span></div>
                  <div className='heroicBriefProfile'>{content.briefProfile}</div>
              </div>
            ))
          }
          </div>
      </div>
      <div className="heroics_images">
        <div className="images">
          {images.map((src, index) => (
            <img key={index} src={src} className="image" alt={`Image ${index + 1}`} />
          ))}
        </div>
      </div>
      <div className="prev_next_buttons">
          <div className="heroic_buttons prev_button" onClick={handlePrev}><i class="fa-solid fa-angle-left"></i></div>
          <div className="heroic_buttons next_button" onClick={handleNext}><i class="fa-solid fa-angle-right"></i></div>
        </div>
    </div>
    </div>

  )
}

export default Heroics

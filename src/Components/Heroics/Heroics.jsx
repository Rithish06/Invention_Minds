import React,{useState, useEffect, useMemo} from 'react'
import './Heroics.css'
import SandeepSir from '../../assets/images/Sandeep.png'
import Tejaswini from '../../assets/images/Tejaswini.png'
import Nithish from '../../assets/images/Nithish.png'
import Rithish from '../../assets/images/Rithish.png'
import Keerthu from '../../assets/images/Keerthu.png'
import dummyf from '../../assets/images/dummyf.png' 
import dummym from '../../assets/images/dummym.png' 
import Aaron from "../../assets/images/Aaron.png";

const Heroics = () => {
  const heroics_content = [

    {
      name : "Chaitra B S",
      designation : "Managing Partner ",
      experience : "10",
      briefProfile : "Chaitra, our Managing Partner, brings a decade of leadership and industry knowledge to the team. Her strategic vision and deep understanding of the field drive our company’s growth. Chaitra’s commitment to excellence and her ability to manage complex challenges make her an essential leader in our organization."
    },

    {
      name : "Ramya",
      designation : "Partner",
      experience : "10",
      briefProfile : "Ramya, as a Partner, contributes significantly to the direction and success of our company. With ten years of experience, she blends industry expertise with a focus on innovation. Ramya’s collaborative approach and strong problem-solving abilities have been key in fostering long-term relationships with our clients and partners."
    },

    {
      name : "Prakash K",
      designation : "Director",
      experience : "36",
      briefProfile : 'Mr. Prakash is the senior and most highly qualified person with a career spanning 36 years in periodicals, IT, healthcare, educational institutions, automobiles, etc. His competence areas include brand development, project management, content editing, and general operational management. He truly adores developing development plans for both new companies and well-established firms.'
    },

    {
      name : "Sandeep Kumar P",
      designation : "Head of Business & Strategies",
      experience : "17",
      briefProfile : "For 15 years, Mr.Sandeep Kumar P worked in the healthcare, education, and information technology sectors. He is well renowned for his strategic inventiveness in fusing creative strategy with commercial objectives. Today, he effectively oversees brand development and marketing plans for several clients."
    },

    {
      name : "Rajesh Yadav N",
      designation : "Business Analyst",
      experience : "14 ",
      briefProfile : "Mr. Rajesh Yadav has 14 years of experience working in the IT and Healthcare industries. He is widely renowned for his ability to strategically combine artistic strategy with business goals."
    },

    // {
    //   name : "Meghana C",
    //   designation : "HR Executive",
    //   experience : "6",
    //   briefProfile : "Meghana C effectively manages human resources operations to support organizational goals. Her expertise in talent acquisition, employee relations, and performance management ensures a positive and productive work environment. Meghana’s ability to align HR practices with business objectives is essential in cultivating a strong and engaged team."
    // },

    {
      name : "S V Reddy",
      designation : "Content Proofreader",
      experience : "9",
      briefProfile : "With nine years of experience in content proofreading, S V Reddy ensures that every piece of content meets the highest standards of accuracy and quality. A meticulous approach to detail and a strong command of language are key to maintaining the professional integrity of all communications."
    },

    {
      name : "Deepashri",
      designation : "Co-ordinator",
      experience : "5",
      briefProfile : "With five years of experience, Deepashri plays a crucial role in ensuring seamless coordination across all our projects. Her expertise in organizing tasks, managing schedules, and facilitating effective communication is vital to our team's operational efficiency and success."
    },

    {
      name : "Tejaswini M Gowda",
      designation : "Process Analyst ",
      experience : "8",
      briefProfile : "Ms. Tejaswini is well-known for her strategic acumen; she has successfully linked company goals with creative approaches for the past five years across a wide range of industries (Healthcare, Education, and Real estate). She successfully steers her team, which is in charge of brand design and marketing strategies for a wide range of clients."
    },
    // {
    //   name : "Surya",
    //   designation : "Graphic Designer",
    //   experience : "9",
    //   briefProfile : "A seasoned graphic designer with an impressive track record spanning 9+ years. His diverse experience encompasses the Real estate, E-Commerce, Healthcare, and Television industries, where he notably excelled as the best designer for Zee Kannada.His innate talent shines through as he seamlessly translates abstract concepts into captivating visuals. "
    // },
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
    {
      name : "Aaron Z Philip",
      designation : "Graphic Designer ",
      experience : "2",
      briefProfile : "Mr.Aaron Z Philip is a creative and detail-oriented Graphic Designer with 2 years of experience specialising in digital and print design. Adept at creating visually compelling designs for a variety of media, including branding, logo creations and banner designing.He is proficient in Adobe Creative Suite (Photoshop, Illustrator, InDesign), strong understanding of typography, color theory, and layout design, ability to work under tight deadlines and manage multiple projects and have an excellent communication and collaboration skills."
    }
]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentDetails, setCurrentDetails] = useState(0);
    const images = [dummyf,dummyf,dummym,SandeepSir,dummym,dummyf,dummyf,Tejaswini,Nithish,Rithish,Keerthu,Aaron]
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
            img.style.transform = `rotate(${(index - currentIndex) * -2}deg)`;
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
      </div>
      <div className="prev_next_buttons">
          <div className="heroic_buttons prev_button" onClick={handlePrev}><i className="fa-solid fa-angle-left"></i></div>
          <div className="heroic_buttons next_button" onClick={handleNext}><i className="fa-solid fa-angle-right"></i></div>
        </div>
    </div>

  )
}

export default Heroics

import React from 'react'
import './Clients.css'
import { assets } from '../../assets/assets'



const Clients = () => {

  const logos = [
    {
      imagePath: assets.rashtrotthana,
      imageClassName: "rashtrotthana",
      websiteUrl: "https://www.rashtrotthanahospital.com",
      alt: "Rashtrotthana Hospital"
    },
    {
      imagePath: assets.akshaLogo,
      imageClassName: "akshaLogo",
      websiteUrl: "https://www.akshahospital.in/",
      alt: "Aksha Hospital"
    },
    {
      imagePath: assets.DSpace,
      imageClassName: "DSpace",
      websiteUrl: "https://dspaceinterior.in/",
      alt: "Dsapce Interior"
    },
    {
      imagePath: assets.coral,
      imageClassName: "coral",
      websiteUrl: "https://coralwomencare.com/",
      alt: "Coral Advanced Fertility and Women's Care"
    },
    {
      imagePath: assets.sapience,
      imageClassName: "sapience",
      websiteUrl: "https://www.sapiensclinic.com/",
      alt: "Sapience Clinic"
    },
    {
      imagePath: assets.ssrvm,
      imageClassName: "ssrvm round_img",
      websiteUrl: "https://vignannagar.ssrvm.org/",
      alt: "SSRVM Vignan Nagar"
    },
    {
      imagePath: assets.IVFsuccessFertility,
      imageClassName: "IVFsuccessFertility round_img",
      websiteUrl: "https://ivfsuccessstories.com/",
      alt: "IVF Success Stories"
    },
    {
      imagePath: assets.HrproIndia,
      imageClassName: "HrproIndia",
      websiteUrl: "",
      alt: "HR Pro India"
    },
    {
      imagePath: assets.Krishik,
      imageClassName: "Krishik round_img",
      websiteUrl: "",
      alt: "Krishik UAS Darwad"
    },
    {
      imagePath: assets.ashwiniAyurveda,
      imageClassName: "ashwiniAyurveda",
      websiteUrl: "",
      alt: "Ashwini Ayurveda"
    },
      
  ]

  const containerWidth = 1000; // Adjust the width of the container
  const containerHeight = 500; // Adjust the height of the container

  document.querySelectorAll('.image_container img').forEach(img => {
    const randomX = Math.random() * (containerWidth - 100); // 100 is approximate image width, adjust accordingly
    const randomY = Math.random() * (containerHeight - 100); // 100 is approximate image height, adjust accordingly
    img.style.top = `${randomY}px`;
    img.style.left = `${randomX}px`;
    // img.style.animationDuration = `${8 + Math.random() * 5}s`;
    // img.style.animationDelay = `${Math.random() * 5}s`;
  });

  return (
    <div className='client_logos'>
      <div className="clients_heading">Our Clients</div>
      <div className="imageWrapper">
          <div className="image_container">
          {
            logos.map((logo, index) => (
              <a href={logo.websiteUrl} key={index}><img className={logo.imageClassName} src={logo.imagePath} alt={logo.alt} /></a>
            ))
          }
        </div>
          <div className="image_container">
          {
            logos.map((logo, index) => (
              <a href={logo.websiteUrl} key={index}><img className={logo.imageClassName} src={logo.imagePath} alt={logo.alt} /></a>
            ))
          }
        </div>
         {/*<div className="image_container">
          {
            logos.map((logo, index) => (
              <a href={logo.websiteUrl} key={index}><img className={logo.imageClassName} src={logo.imagePath} alt={logo.alt} /></a>
            ))
          }
        </div> */}
      </div>
    </div>
  )
}

export default Clients

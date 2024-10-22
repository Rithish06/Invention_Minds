import React from 'react'
import './Clients.css'
import { assets } from '../../assets/assets'

const Clients = () => {

  const logos = [
    {
      imagePath : assets.rashtrotthana,
      imageClassName : "rashtrotthana",
      websiteUrl : "https://www.rashtrotthanahospital.com",
    },
    {
      imagePath : assets.akshaLogo,
      imageClassName : "akshaLogo",
      websiteUrl : "https://www.akshahospital.in/",
    },
    {
      imagePath : assets.DSpace,
      imageClassName : "DSpace",
      websiteUrl : "https://dspaceinterior.in/",
    },
    {
      imagePath : assets.coral,
      imageClassName : "coral",
      websiteUrl : "https://coralwomencare.com/",
    },
    {
      imagePath : assets.sapience,
      imageClassName : "sapience",
      websiteUrl : "https://www.sapiensclinic.com/",
    },
    {
      imagePath : assets.ssrvm,
      imageClassName : "ssrvm round_img",
      websiteUrl : "https://vignannagar.ssrvm.org/",
    },
    {
      imagePath : assets.IVFsuccessFertility,
      imageClassName : "IVFsuccessFertility round_img",
      websiteUrl : "https://ivfsuccessstories.com/",
    },
    {
      imagePath : assets.HrproIndia,
      imageClassName : "HrproIndia",
      websiteUrl : "",
    },
    {
      imagePath : assets.Krishik,
      imageClassName : "Krishik round_img",
      websiteUrl : "",
    },
    {
      imagePath : assets.ashwiniAyurveda,
      imageClassName : "ashwiniAyurveda",
      websiteUrl : "",
    },

  ]

  const containerWidth = 1000; // Adjust the width of the container
const containerHeight = 500; // Adjust the height of the container

document.querySelectorAll('.image_container img').forEach(img => {
  const randomX = Math.random() * (containerWidth - 100); // 100 is approximate image width, adjust accordingly
  const randomY = Math.random() * (containerHeight - 100); // 100 is approximate image height, adjust accordingly
  img.style.top = `${randomY}px`;
  img.style.left = `${randomX}px`;
});

  return (
    <div className='client_logos'>
      <div className="clients_heading">Our Clients</div>
      <div className="image_container">
      {
        logos.map((logo, index) => (
            <a href={logo.websiteUrl} key={index}><img className={logo.imageClassName} src={logo.imagePath} alt="" /></a>
        ))

      }
      </div>
    </div>
  )
}

export default Clients

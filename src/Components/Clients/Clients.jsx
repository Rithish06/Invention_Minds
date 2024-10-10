import React from 'react'
import './Clients.css'
import { assets } from '../../assets/assets'

const Clients = () => {

  const logos = [
    {
      imagePath : assets.rashtrotthana,
      imageClassName : "rashtrotthana"
    },
    {
      imagePath : assets.akshaLogo,
      imageClassName : "akshaLogo"
    },
    {
      imagePath : assets.DSpace,
      imageClassName : "DSpace"
    },
    {
      imagePath : assets.coral,
      imageClassName : "coral"
    },
    {
      imagePath : assets.ssrvm,
      imageClassName : "ssrvm"
    },
    {
      imagePath : assets.sapience,
      imageClassName : "sapience"
    },
    {
      imagePath : assets.IVFsuccessFertility,
      imageClassName : "IVFsuccessFertility"
    },
    {
      imagePath : assets.HrproIndia,
      imageClassName : "HrproIndia"
    },
    {
      imagePath : assets.Krishik,
      imageClassName : "Krishik"
    },
    {
      imagePath : assets.ashwiniAyurveda,
      imageClassName : "ashwiniAyurveda"
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
            <img className={logo.imageClassName} key={index} src={logo.imagePath} alt="" />
        ))

      }
      </div>
    </div>
  )
}

export default Clients

import React from 'react'
import './Clients.css'
import { assets } from '../../assets/assets'

const Clients = () => {
  return (
    <div className='client_logos'>
      <img className='clientImage' src={assets.logo} alt="" />
    </div>
  )
}

export default Clients

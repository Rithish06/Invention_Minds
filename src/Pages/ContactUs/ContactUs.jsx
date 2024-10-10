import React from "react";
import "./ContactUs.css";
import { assets } from "../../assets/assets";
import { useForm } from "react-hook-form";
import HomeForm from "../../Components/HomeForm/HomeForm";

const ContactUs = () => {

  return (
    <div className="ContactUs">
      <HomeForm />
      {/* map */}
      <div className="contactMap">
        <div className="map_heading">Locate Us</div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.464458395888!2d77.54363807500434!3d12.942104515524424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e18763530c3%3A0xb24bf60bea2ee9f1!2sInvention%20Minds!5e0!3m2!1sen!2sin!4v1728496003293!5m2!1sen!2sin" loading="lazy"></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

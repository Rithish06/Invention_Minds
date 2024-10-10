import React from "react";
import { assets } from "../../assets/assets";
import "./HomeForm.css";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com"; // Import EmailJS

const HomeForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  
  const onSubmit = (data) => {
    // Define your EmailJS service, template, and user IDs
    const serviceID = "home_page_form";
    const templateID = "template_2jxqnyf";
    const userID = "h-ZQGpG0Ul1KZ3lvE";

    // Send the email using EmailJS
    emailjs.send(serviceID, templateID, data, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert('Email sent successfully!');
        reset(); // Reset form after successful submission
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert('Failed to send email. Please try again later.');
      });
  };

  return (
    <div className="HomeForm">
      <div className="formContainer">
        <div className="form_heading">GET IN TOUCH</div>
        <div className="form_description">Contact us if you need supports for next event</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* First Name */}
          <div className="name_Field">
            <div className="formFields">
              <label>First Name</label>
              <input
                type="text"
                name="firstname"
                {...register("firstname", {
                  required: "First name is required",
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "First name should contain only letters",
                  },
                })}
                className="name_input_filed"
              />
              {errors.firstname && <p className="error_msg">{errors.firstname.message}</p>}
              </div>
              {/* Last Name */}
              <div className="formFields">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  {...register("lastname", {
                    required: "Last name is required",
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Last name should contain only letters",
                    },
                  })}
                  className="name_input_filed"
                />
                {errors.lastname && <p className="error_msg">{errors.lastname.message}</p>}
              </div>
          </div>

          {/* Email */}
          <div className="formFields">
            <label>Email</label>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && <p className="error_msg">{errors.email.message}</p>}
          </div>

          {/* Phone Number */}
          <div className="formFields">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phonenumber"
              {...register("phonenumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be exactly 10 digits",
                },
              })}
            />
            {errors.phonenumber && <p className="error_msg">{errors.phonenumber.message}</p>}
          </div>

          {/* Message */}
          <div className="formFields">
            <label>Message</label>
            <textarea
            name="message"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
            />
            {errors.message && <p className="error_msg">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="submit_button_container">
            <button className="submit_button" type="submit">Submit</button>
          </div>
          
        </form>
      </div>
      <div className="formImageContainer">
        <img src={assets.HomeFormImage} alt="" />
      </div>
    </div>
  );
};

export default HomeForm;
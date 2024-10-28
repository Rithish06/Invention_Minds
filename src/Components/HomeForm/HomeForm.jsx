import React, {useState} from "react";
import { assets } from "../../assets/assets";
import "./HomeForm.css";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com"; // Import EmailJS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,  // Import reset from useForm
} = useForm();

const [isSubmitting, setIsSubmitting] = useState(false); // Manage button state

const onSubmit = (data) => {
    // Disable the submit button while submitting
    setIsSubmitting(true);

    // Define your EmailJS service, template, and user IDs
    const serviceID = "service_ft48q3q";
    const templateID = "im_form_temp";
    const userID = "5siXgoaMR-a7DGzR9";

    // Send the email using EmailJS
    emailjs
        .send(serviceID, templateID, data, userID)
        .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
            toast.success("Email sent successfully!");
            // Reset the form after a successful submission
            reset();
        })
        .catch((error) => {
            console.error("FAILED...", error);
            toast.error("Failed to send email. Please try again later.")
        })
        .finally(() => {
            // Re-enable the submit button after submission is complete
            setIsSubmitting(false);
        });
};

  return (
    <div className="HomeForm">
      <div className="formContainer">
        <div className="form_heading">GET IN TOUCH</div>
        <div className="form_description">Contact us if you need supports for next event</div>
        <form onSubmit={handleSubmit(onSubmit)} className="con_form">
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
            <button className="submit_button" id="submit_button" disabled = {isSubmitting} type="submit">Submit</button>
          </div>
          
        </form>
      </div>
      <div className="formImageContainer">
        <img src={assets.HomeFormImage} alt=""  />
      </div>
      <ToastContainer />
    </div>
  );
};

export default HomeForm;
import React from "react";
import "./ContactUs.css";
import { assets } from "../../assets/assets";
import { useForm } from "react-hook-form";

const ContactUs = () => {
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
    emailjs
      .send(serviceID, templateID, data, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
        reset(); // Reset form after successful submission
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send email. Please try again later.");
      });
  };

  return (
    <div className="ContactUs">
      {/* container 1 */}
      <div className="contact_us_container_1">
        <img src={assets.contactUs_bg} alt="" className="contactDesktopBg" />
        <img src={assets.ContactUsBgMobile} alt="" className="contactMobileBg" />
      </div>
      {/* container 2 */}
      <div className="contact_us_container_2">
        <img src={assets.contactUs_layer_2} alt="" className="contactDesktopLayer" />
        <img src={assets.contactUsMobileLayer2} alt="" className="contactMobileLayer" />
      </div>
      {/* container 3 */}
      <div className="contact_us_container_3">
        <div className="container_3_image">
          <img src={assets.contactUsImg} alt="" />
        </div>

        <div className="ContatUs_Form_container">
        {/* <div class="corner-edge"></div> */}
          <div className="from_wrapper">
            <div className="fromcontent">
              <div className="form_upper_description">
                At Invention Minds, we value clear communication and are
                committed to addressing your inquiries promptly. Whether you’re
                looking to explore our services, discuss a project, or seek
                guidance on your digital strategy, our team is here to assist.
              </div>
              <div className="map_link">View on map</div>
            </div>
            <div className="contact_us_form">
              <form action="" onSubmit={handleSubmit}>
                {/* name */}
                <div className="inputfields">
                  <label>Name</label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="*"
                    {...register("firstname", {
                      required: "First name is required",
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "First name should contain only letters",
                      },
                    })}
                  />
                  {errors.firstname && (
                    <p className="error_msg">{errors.firstname.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="inputfields">
                  <label>Email address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="*"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="error_msg">{errors.email.message}</p>
                  )}
                </div>

                {/* Message */}
                <div className="inputfields">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="*"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                  />
                  {errors.message && (
                    <p className="error_msg">{errors.message.message}</p>
                  )}
                </div>
                <button className="ContactFormButton"><div className="ContactFormDiv" type="submit">Let’s talk! <i className="fa-solid fa-arrow-right"></i></div></button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* map */}
      <div className="contactMap">
        <div className="map_heading">Locate Us</div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.464458395888!2d77.54363807500434!3d12.942104515524424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e18763530c3%3A0xb24bf60bea2ee9f1!2sInvention%20Minds!5e0!3m2!1sen!2sin!4v1728496003293!5m2!1sen!2sin" loading="lazy"></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

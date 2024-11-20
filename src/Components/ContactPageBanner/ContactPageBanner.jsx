import React, { useState } from "react";
import "./ContactPageBanner.css";
import { assets } from "../../assets/assets";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com"; // Import EmailJS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { MdEmail } from "react-icons/md";

const ContactPageBanner = () => {

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
        <div className="contact_page">

            <div className="or_img">
                <img src="" alt="" />
            </div>
            <div className="form_content">
                {/* left side form */}
                <div className="contact_left">
                    <form action="" className="Home_form" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="contact_us_heading">Contact <span>Us</span></h3>

                        {/* name */}
                        <div className="inputfields">
                            <input
                                type="text"
                                name="firstname"
                                placeholder="Name"
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
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
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

                        {/* phone number */}
                        <div className="inputfields">
                            <input
                                type="tel"
                                name="phonenumber"
                                placeholder="Phone Number"
                                {...register("phonenumber", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Phone number must be exactly 10 digits",
                                    },
                                })}
                            />
                            {errors.phonenumber && (
                                <p className="error_msg">{errors.phonenumber.message}</p>
                            )}
                        </div>

                        {/* Message */}
                        <div className="inputfields">
                            <textarea
                                name="message"
                                placeholder="Message"
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
                        <button type="submit" disabled={isSubmitting} className="ContactFormButton">Submit</button>

                    </form>
                </div>

                {/* contact us form right */}

                <div className="contact_right">
                    <div className="socialmedia_icons">
                        <p className="follw_us">Follow us on</p>
                        <a href="https://www.instagram.com/invention_minds2023/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color : "black"}}><AiFillInstagram className="sm_icons" /></a>
                        <a href="" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color : "black"}}><IoLogoLinkedin className="sm_icons" /></a>
                        <a href="https://www.facebook.com/profile.php?id=100085627813693" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color : "black"}}><FaFacebook className="sm_icons" /></a>
                        <a href="" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color : "black"}}><FaYoutube className="sm_icons" /></a>
                    </div>
                    <div className="contact_us_contacts">
                        <p className="contact_para">
                            At Invention Minds, we value clear communication and are committed to addressing your inquiries promptly. Whether you’re looking to explore our services, discuss a project, or seek guidance on your digital strategy, our team is here to assist.
                        </p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.464458395888!2d77.54363807500434!3d12.942104515524424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e18763530c3%3A0xb24bf60bea2ee9f1!2sInvention%20Minds!5e0!3m2!1sen!2sin!4v1728496003293!5m2!1sen!2sin" loading="lazy"></iframe>
                        <div className="contact_address">
                            <div className="contact_flex">
                                <FaLocationDot className="contact_icons_location" />
                                <p>No. 12/1, 22nd main road, Muneshwara block, Girinagar Bengaluru, Karnataka- 560085</p>
                            </div>
                            <div className="contact_flex">
                                <LuPhoneCall className="contact_icons" />
                                <p>+91 98440 05600</p>
                            </div>
                            <div className="contact_flex">
                                <MdEmail className="contact_icons" />
                                <p>inventionmindsblr@gmail.com</p>
                            </div>
                            <div className="contact_flex"></div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>

    )
}

export default ContactPageBanner

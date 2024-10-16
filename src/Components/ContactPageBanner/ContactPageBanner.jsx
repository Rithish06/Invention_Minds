import React,{useState} from "react";
import "./ContactPageBanner.css";
import { assets } from "../../assets/assets";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com"; // Import EmailJS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <div className="ContactUs">
            {/* container 1 */}
            <div className="contact_us_container_1">
                <img src={assets.contactUs_bg} alt="" className="contactDesktopBg" />
                <img src={assets.ContactUsBgMobile} alt="" className="ContactUsBgMobile" />
            </div>
            {/* container 2 */}
            <div className="contact_us_container_2">
                <img src={assets.contactUs_layer_2} alt="" className="contactDesktopLayer"/>
                <img src={assets.contactUsMobileLayer2} alt="" className="contactUsMobileLayer" />
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
                            <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/p7hSn5tbMcE1xgB57"><div className="map_link">View on map</div></a>
                        </div>
                        <div className="contact_us_form">
                            <form action="" onSubmit={handleSubmit(onSubmit)}>
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

                                {/* phone number */}
                                <div className="inputfields">
                                    <label>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phonenumber"
                                        placeholder="*"
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
                                <button type="submit" disabled = {isSubmitting} className="ContactFormButton">
                                    <div className="ContactFormDiv" type="submit">
                                        Let’s talk! <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ContactPageBanner;

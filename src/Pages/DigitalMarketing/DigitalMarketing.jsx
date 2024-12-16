import React from 'react'
import './DigitalMarketing.css'
import ServicesBannerDesign from '../../Components/ServicesBannerDesign/ServicesBannerDesign'
import { assets } from '../../assets/assets'
import { Helmet } from 'react-helmet'

const DigitalMarketing = () => {
    return (
        <div className='servicesPage'>
            {/* meta title and description */}
            <Helmet>
                <title>Digital Marketing Services | Boost Your Online Presence with Invention Minds</title>
                <meta name='description' content="Achieve online success with Invention Minds' digital marketing services. Specializing in SEO, PPC, social media, and content marketing strategies." />
                <meta name='keywords' content="Digital marketing services, Online marketing strategies, SEO services, PPC advertising, Social media marketing, Content marketing solutions, Boost online presence, Digital marketing company, Marketing agency, Digital growth experts" />
            </Helmet>

            <ServicesBannerDesign
                staza1Color="#fff"
                staza2Color="#F99B2B"
                staza3Color=""
                stanza1="Transforming Visions into Digital"
                stanza2=" Success"
                decription="Expert Digital Marketing Services in Bengaluru – Invention Minds"
                smallTitle="Digital Marketing"
            />
            <div className="DMcontainer_2">
                <div className="DMbox_1">
                    <div className="DMbox1_content">
                        <div className="gradient_headings">Why Choose Invention Minds for Your Digital Marketing Needs?</div>
                        <div className="services_para">We’re proud to be recognized as one of the most trusted digital marketing companies in Bangalore, helping businesses of all sizes grow online.At Invention Minds, we believe every business is unique. That’s why we don’t use templates or follow the same formula for every client. Instead, we work closely with you to understand your brand’s story, audience, and goals. Whether you’re running a small startup or managing a well-established company, our team creates digital marketing strategies that truly reflect your business and help it grow.</div>
                        <div className="services_para">Bangalore is a city of endless opportunities, but it’s also a highly competitive market. To stand out, you need more than just a digital marketing presence - you need a strategy that works.</div>
                    </div>
                    <div className="DMbox_1_img">
                        <img src={assets.digitalMarketing1} alt="Best digital marketing service in Bangalore | Invention Minds"/>
                    </div>
                </div>
                <div className="DMbox_1 DMbox_2">
                    <div className="DMbox1_content">
                        <div className="services_para">Whether you’re a startup aiming to make a big impression or a well-established company looking to grow further, our team is here to help. As a trusted digital marketing company in Bangalore, we combine creativity with data to deliver impactful results.</div>
                        <div className="services_para">At Invention Minds, we combine creativity with data. Our team of skilled marketers and content creators develops personalized strategies that are built around your goals. From boosting visibility through SEO to running effective digital ad campaigns, we offer a full range of services designed to grow your business. And it’s not just about leads - it’s about getting the right leads that turn into loyal customers.</div>
                        <div className="services_para">Operating in a competitive market like Bangalore means you need more than just a digital marketing agency - you need a partner who understands the local market and has a proven track record of success.</div>
                    </div>
                    <div className="DMbox_1_img">
                        <img src={assets.digitalMarketing2} alt="Top digital marketing agency in Bangalore | Invention Minds" />
                    </div>
                </div>
                <div className="DMbox1_content">
                    <h1 className='gradient_headings'>What We Offer</h1>
                    
                    <div className="services_para"><h2 className='gradient_sub_headings'>Search Engine Optimization (SEO) : </h2>Improve your website’s ranking and attract organic traffic with our effective SEO strategies.</div>                
                    <div className="services_para"><h2 className='gradient_sub_headings'>Social Media Marketing : </h2>Build your online presence and engage with your audience on platforms like Facebook, Instagram and LinkedIn.</div>
                    <div className="services_para"><h2 className='gradient_sub_headings'>Content Creation : </h2>Share your brand’s story with high-quality blogs, videos and graphics that resonate with your audience.</div>                    
                    <div className="services_para"><h2 className='gradient_sub_headings'>Paid Advertising : </h2>Maximize your ROI with targeted ad campaigns that reach the right customers at the right time.</div>                   
                    <div className="services_para"><h2 className='gradient_sub_headings'>Lead Generation : </h2>Drive qualified leads to your business and convert them into loyal customers.</div>
                </div>
            </div>

        </div>
    )
}

export default DigitalMarketing

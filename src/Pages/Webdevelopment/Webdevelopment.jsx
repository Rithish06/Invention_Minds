import React from 'react'
import ServicesBannerDesign from '../../Components/ServicesBannerDesign/ServicesBannerDesign'
import './Webdevelopment.css'
import { assets } from '../../assets/assets'
import { Helmet } from 'react-helmet'


const Webdevelopment = () => {


	const faqs = [
		{
			ques: "Which is the best website development company in Banashankari, Bangalore?",
			ans: `
			<div className = "services_para">Invention Minds is proud to be recognized as one of the best website development companies in Banashankari, Bangalore. With over a decade of experience in delivering custom website development, web design services, and web application solutions, we are trusted by businesses across Bangalore. Our commitment to quality, innovation, and timely delivery makes us a preferred choice for clients looking for a reliable website development company in Banashankari, Bangalore.</div>
			`
		},
		{
			ques: "What services does Invention Minds offer?",
			ans: `
			<div className = "services_para">Invention Minds offers a complete range of digital services including :</div><br />
			<ul>
				<li className = "services_para">Custom website development</li>
				<li className = "services_para">Responsive website design</li>
				<li className = "services_para">Web application development</li>
				<li className = "services_para">WordPress and CMS development</li>
				<li className = "services_para">E-commerce websites</li>
				<li className = "services_para">SEO-friendly website design</li>
				<li className = "services_para">Digital marketing support</li>
			</ul><br />
			<div className = "services_para">As a professional website development company in Bangalore, we provide these services to businesses in Banashankari, Jayanagar, BTM Layout, JP Nagar, and beyond.</div>
			`
		},
		{
			ques: "Does Invention Minds provide custom website development?",
			ans: `
			<div className = "services_para">Yes, we specialize in custom website development that aligns with your specific business goals, branding, and user needs. Our team builds websites from the ground up using modern technologies like React, Node.js, WordPress, PHP, and Django. We serve clients across Banashankari, RR Nagar, and Mysore Road, helping them stand out with customized digital platforms.</div>
			`
		},
		{
			ques: "Are your websites mobile responsive?",
			ans: `
			<div className = "services_para">Every website we build is 100% responsive. At Invention Minds, mobile-first design is a standard—not an extra. Whether your audience browses from smartphones, tablets, or desktops, your site will adapt flawlessly. Our responsive website design services are trusted by businesses throughout Banashankari, Silk Board, and JP Nagar for their ability to engage users on every screen.</div>
			`
		},
		{
			ques: "Is SEO included in your web development services?",
			ans: `
			<div className = "services_para">Absolutely. Invention Minds is known for delivering SEO-friendly website development that helps your site rank higher on Google. We follow on-page SEO best practices like optimized structure, fast loading speed, proper metadata, and mobile optimization. Businesses in Banashankari and across Bangalore benefit from our SEO-first development approach, ensuring that your site performs well both for users and search engines.</div>
			`
		},
		{
			ques: "What industries do you serve?",
			ans: `
			<div className = "services_para">Our clients come from a wide variety of industries including healthcare, education, real estate, retail, manufacturing, tech startups, consulting, and more. Whether you’re a local business in BTM Layout or a service provider in Kumaraswamy Layout, Invention Minds can build a website that fits your goals and grows your brand.</div>
			`
		},
		{
			ques: "Do you offer support after the website is launched?",
			ans: `
			<div className = "services_para">Yes. Invention Minds believes in long-term partnerships. As a dependable website development company in Banashankari, Bangalore, we provide ongoing support, regular updates, technical fixes, and additional feature development as needed. We’re here to ensure your website continues to evolve with your business.</div>
			`
		},
	]

	return (
		<div className='servicesPage'>
			<Helmet>
				<title>Top Web Development Services | Custom Websites for Business Growth</title>
				<meta name='description' content="Boost your online presence with Invention Minds' expert web development services. We build responsive, SEO-friendly, and custom websites tailored to your business." />
				<meta name='keywords' content="Web Development Services, Custom Website Design, Responsive Web Design, SEO-Friendly Websites,  Business Website Development, Professional Web Development, Best Web Development Company, E-Commerce Website Development, Mobile-Friendly Web Solutions, Website Development for Business Growth" />
			</Helmet>

			<ServicesBannerDesign
				staza1Color="#fff"
				staza2Color="#F99B2B"
				staza3Color=""
				stanza1="Bangalore’s Expert"
				stanza2=" Web Design & Development"
				decription="Professional Web Development Services in Bengaluru – Invention Minds"
				smallTitle="Web Design & Development"
			/>

			<div className="web_container_2">
				<h1 className="gradient_headings web_con_2_heading">Website Development Company in Banashankari, Bangalore</h1>
				<div className="services_para">Invention Minds is a trusted website design and development company based in Banashankari, Bangalore. Known for delivering high-quality yet affordable web development solutions, we have helped businesses across various sectors establish a strong digital presence. With over a decade of industry experience and a client base that spans startups to established enterprises, we’ve become a preferred choice for brands looking for results-driven web solutions.</div>
				<div className="services_para">We are committed to helping businesses - especially startups and local companies - compete in today’s digital-first world. Our team of skilled developers, designers, and digital experts work together to ensure every website and application we build is built for performance, visibility, and long-term success. Many reputable brands continue to rely on us to support their growth through custom, innovative digital solutions.</div>
				<div className="services_para">At Invention Minds, we specialize in mobile-first, fully responsive websites that deliver seamless experiences across all devices. As a professional website development company in Banshankari Bangalore, we offer a wide range of services, including:</div>
				<div className="dev_list">
					<ul className='div_list_1'>
						<li className="dev_list_item">Custom CMS website development </li>
						<li className="dev_list_item">PHP, Python, and Django web applications</li>
						<li className="dev_list_item">React JS and Vue.js development</li>
					</ul>
					<ul className='div_list_1'>
						<li className="dev_list_item">WordPress website design and development</li>
						<li className="dev_list_item">Custom web application development</li>
						<li className="dev_list_item">UI/UX-focused web design</li>
					</ul>
				</div>
				<div className="services_para">We ensure that every project aligns with your business goals and brand identity. Our team carefully selects or customizes web design frameworks and templates based on your specific requirements, ensuring a unique and engaging experience for your users.</div>
				<div className="services_para">With our successful projects and satisfied clients, Invention Minds is committed to delivering reliable, scalable and cost-effective web solutions. Our team is always available to offer strategic input and technical guidance to help you achieve your digital goals - on time and within budget.</div>

				<div className="webImgContainer">
					<div className='dev_image_text'>
						I'm currently looking to join a <span className='crossFunctional'>cross-functional </span><br />
						<span className='img_text_small'>that values improving people's lives through accessible design </span>
					</div>
					<img src={assets.webServices} alt="Best web development services in Bangalore | Invention Minds" className='webServiceImg' />
				</div>
			</div>
			<div className="web_container_3">
				<h2 className="gradient_headings web_con_2_heading">Top Website Design Company in Banashankari Bangalore</h2>
				<div className='flex_1 flex mt'>
					<div>
						<div className="services_para">Invention Minds is a leading website design and development company based in Banashankari, Bangalore, offering modern and scalable web solutions for businesses of all sizes. We specialize in responsive website design, custom web development, web application development, web portals, and mobile app solutions. Alongside our development services, we also provide cost-effective digital marketing solutions designed to help brands build a strong online presence.</div>
						<div className="services_para">Our approach is centered around combining innovation with functionality. Every project we deliver is crafted with precision, keeping in mind performance, user experience, and long-term growth. We work closely with clients across industries, ensuring that each website or application aligns with their goals and brand identity.</div>
					</div>
					<div>
						<img className='webimg' src={assets.webdevelopmentImg1} alt="Web application development | Basavanagudi | Bangalore | Invention Minds" />
					</div>
				</div>
				<div className='flex column-reverse mt'>
					<div>
						<img className='webimg' src={assets.webdevelopmentImg2} alt="Web developers near me | jpnagar | bangalore | Invention Minds" />
					</div>
					<div>
						<div className="services_para">At the start of each project, we conduct a detailed discovery session to understand the business objectives, target audience, and technical needs. Based on these insights, our team recommends the ideal technology stack that aligns with modern design trends and performance standards. This process ensures the final product is not only visually compelling but also capable of driving higher traffic, engagement, and revenue.</div>
						<div className="services_para">Whether you're a startup or an established enterprise, we aim to help you reach your target audience across devices including mobile phones and tablets. Our mobile-first approach ensures your platform performs flawlessly on any screen size.</div>
					</div>
				</div>
				<div className="services_para" >As a reputable website development company in Banashankari Bangalore, Invention Minds is committed to delivering excellence in every project. Our core services include:</div>
				<div className='dev_list'>
					<ul className='div_list_1' >
						<li className="dev_list_item">Website design and development</li>
						<li className="dev_list_item">Custom web application development</li>
						<li className="dev_list_item">Web portal development</li>
					</ul>
					<ul className='div_list_1'>
						<li className="dev_list_item">Mobile app development</li>
						<li className="dev_list_item">Responsive and mobile-first design</li>
						<li className="dev_list_item">Digital marketing and SEO support</li>
					</ul>
				</div>
				<div className="services_para">With a growing client base and a proven track record, we continue to help businesses in Banshankari Bangalore and beyond succeed in the digital landscape through strategic, functional and high-performing web solutions.</div>
			</div>
			<div className="web_container_3">
				<h2 className="gradient_headings web_con_2_heading">Why Choose Invention Minds?</h2>
				<div className='flex_2 flex mt'>
					<div>
						<ul className='div_list_1'>
							<li className="dev_list_item">Specialists in responsive web design for small businesses</li>
							<li className="dev_list_item">Expertise in SEO-friendly website design services</li>
							<li className="dev_list_item">Advanced tech stack including React, Node.js, PHP, WordPress, Django, and more</li>
							<li className="dev_list_item">Affordable pricing for businesses across Banashankari and Bangalore</li>
							<li className="dev_list_item">Dedicated support from design to deployment</li>
						</ul>
					</div>
					<div>
						<img className='webimg' src={assets.webdevelopmentImg3} alt="Website designing and development companie | MysoreRoad | bangalore | Invention Minds" />
					</div>
				</div>
				<div className="services_para">Our mission is to empower businesses with stunning websites that engage users and drive results - whether you're a startup in BTM Layout or a retailer in Basavanagudi.</div>
			</div>
			<div className="web_container_3">
				<h2 className="gradient_headings web_con_2_heading">Our Web Development Services</h2>
				<div className='flex web_container_3_mt'>
					<div className='imgFlex'>
						<img className='webimg' src={assets.webdevelopmentImg4} alt="website developer company near me​ | jayanagar | bangalore | Invention Minds" />
						<img className='webimg' src={assets.webdevelopmentImg5} alt="" />
					</div>
					<div>
						<h2 className="gradient_sub_headings">Custom Website Development</h2>
						<div className="services_para_1" >We create tailor-made websites that reflect your brand identity and business goals.</div>
						<h2 className="gradient_sub_headings">Web Application Development</h2>
						<div className="services_para_1" >From dashboards to customer portals, our team builds secure and efficient web apps.</div>
						<h2 className="gradient_sub_headings"> MERN and MEAN Stack Development</h2>
						<div className="services_para_1" > Modern full-stack solutions using MongoDB, Express, React, Angular, and Node.js.</div>
						<h2 className="gradient_sub_headings">SEO-Friendly Website Design Services</h2>
						<div className="services_para_1" > Our websites are built with clean code, fast loading speeds, and optimized structure for better visibility.</div>
						<h2 className="gradient_sub_headings">Responsive Web Design for Small Businesses</h2>
						<div className="services_para_1" > Get a mobile-first website that works beautifully across devices—perfect for small and growing businesses.</div>
						<h2 className="gradient_sub_headings"> Custom React and Node.js Web Applications</h2>
						<div className="services_para_1" >For businesses needing dynamic, performance-driven solutions.</div>
					</div>
				</div>
				<div>
					<div className="gradient_sub_headings web_container_3_mt">Let’s Build Your Online Presence</div>
					<div className="services_para">At Invention Minds, we’re not just building websites - we’re creating digital experiences that help businesses grow. Whether you need custom website development, web application development, or SEO-friendly website design services, we’re the website developer company near you that can make it happen.</div>
					<div className="services_para">Get in touch today to start your project with the best web development company in Banashankari, Bangalore.</div>
				</div>
			</div>
			<div className="web_container_3">
				<h2 className="gradient_headings web_con_2_heading">FAQ’s - Choosing a Website Development Company</h2>

				{
					faqs.map((value, index) =>
						<div>
							<div className='gradient_sub_headings'><b>Q{index + 1}. {value.ques}</b></div>
							<div className="services_para" dangerouslySetInnerHTML={{__html : value.ans}}/>
						</div>
					)
				}

			</div>
		</div>


	)
}

export default Webdevelopment

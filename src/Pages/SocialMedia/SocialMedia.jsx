import React from "react";
import "./SocialMedia.css";
import ServicesBannerDesign from "../../Components/ServicesBannerDesign/ServicesBannerDesign";
import { assets } from "../../assets/assets";
import { Helmet } from "react-helmet";

const SocialMedia = () => {

    const faqs = [
        {
            ques : "What is social media management and why is it important for my business?",
            ans : "Social media management involves creating, scheduling, analyzing and engaging with content posted on platforms like Facebook and Instagram. It's important for building your digital presence, improving online branding and connecting directly with your target audience. At Invention Minds, our social media management in Banashankari helps businesses grow through content, ads and community engagement."
        },
        {
            ques : "How can social media marketing help generate leads or sales?",
            ans : "Through strategic targeting, social ads and engaging content, social media can attract qualified traffic to your website or profile. We create platform-specific campaigns including facebook ad strategy for local businesses and instagram ads to convert followers into paying customers. Our focus is on digital growth with measurable ROI."
        },
        {
            ques : "What platforms do you manage under your social media services?",
            ans : "We manage a wide range of platforms, including YouTube, Facebook, Instagram, LinkedIn and Twitter. Most of our clients focus on Facebook marketing and Instagram marketing, where we offer complete page handling, ad setup and post design services to ensure consistent brand visibility."
        },
        {
            ques : "Do I need to provide content or will your team handle it?",
            ans : "Our team handles everything - from strategy and content planning to facebook & instagram post design, copywriting and publishing. You’re welcome to share inputs, but our SMM experts manage your profiles entirely so you can focus on running your business."
        },
        {
            ques : "Can you help increase followers on our social pages?",
            ans : "Absolutely. We focus on follower growth through organic methods (engagement, hashtags, content) and paid methods like instagram advertising and facebook post boosts. Our strategy balances social boost and quality engagement, ensuring followers are not only increasing but relevant to your brand."
        },
        {
            ques : "How do you measure success in social media marketing?",
            ans : "We track key performance indicators (KPIs) like reach, impressions, engagement rate, clicks, conversions and follower growth. Our social media managers for business provide detailed monthly reports with actionable insights to continuously improve your results."
        },
        {
            ques : "What kind of businesses benefit from social media management?",
            ans : "Almost every business today benefits from being on social media. We work with clinics, schools, restaurants, real estate agents, e-commerce stores and local service providers. Whether you’re in Basavanagudi, Jayanagar or anywhere in Bangalore, we can help your business stay competitive and visible."
        },
        {
            ques : "Do you offer affordable packages for small businesses?",
            ans : "Yes, we provide affordable social media marketing agency plans ideal for startups and small businesses. Our packages are flexible and focused on performance - from basic content management to advanced campaigns and social media ads."
        },
    ]

    return (
        <div className="servicesPage">
            {/* meta title and description */}
            <Helmet>
                <title>Social Media Marketing Services in Bengaluru | Invention Minds</title>
                <meta name="description" content="Boost your brand's online presence with Invention Minds' expert social media marketing services in Bengaluru. Engage your audience and drive growth today." />
                <meta name="keywords" content="Social Media Marketing Services, Social Media Management, Social Media Strategy, Social Media Advertising, Social Media Optimization, Social Media Campaigns, Social Media Consulting, Social Media Analytics, Social Media Engagement, Social Media Branding" />
            </Helmet>
            <ServicesBannerDesign
                staza1Color="#fff"
                staza2Color="#F99B2B"
                staza3Color="#fff"
                stanza1="Boost Engagement with Targeted "
                stanza2=" Social Media"
                stanza3=" Strategies"
                decription="Comprehensive Social Media Marketing Services in Bengaluru – Invention Minds"
                smallTitle="Social Media"
            />
            {/* container 2 */}

            <div className="flex s_containerPadding">
                <div className="s_content">
                    <h1 className="gradient_headings">Social Media Management in Banashankari</h1>
                    <div className="services_para">Invention Minds offers full-service Social Media Management in Banashankari to help businesses establish a strong digital presence, build brand credibility and convert followers into loyal customers. As the best social media marketing and management company, we provide end-to-end support - from content planning and design to advertising and performance tracking.</div>
                    <div className="services_para">In today’s competitive landscape, just being online isn’t enough. We help you stand out through professional social media marketing services designed to grow your business through targeted content, campaigns and platform-specific strategies.</div>
                </div>
                <div className="s_image">
                    <img src={assets.SmImg_2} alt="Best social media marketing Banashankari" />
                </div>
            </div>

            <div className="flex s_containerPadding">
                <div className="s_content">
                    <h2 className="gradient_sub_headings">Why Invention Minds is the Best SMM Company in Banashankari</h2>
                    <div className="services_para">As a top-rated SMM company in Banashankari for local businesses, we combine creativity, strategy and analytics to deliver measurable results across Facebook and Instagram. Whether you’re a small business or an expanding brand, our experts ensure every post, ad and story works toward your growth.</div>
                    <div className="services_para"><b>We are:</b></div>
                    <div className="services_lists">
                        <ul>
                            <li className="services_para">A professional social media management company with proven strategies</li>
                            <li className="services_para">A reliable partner for facebook marketing services and instagram advertising experts</li>
                            <li className="services_para">A hands-on team that manages content, engagement, ad spend and reporting</li>
                        </ul>
                        <ul>
                            <li className="services_para">Known for crafting facebook ad strategy for local businesses that deliver results</li>
                            <li className="services_para">Highly rated for building consistent digital presence and helping businesses achieve real follower growth</li>
                        </ul>
                    </div>
                    <div className="services_para">From design to conversion - we handle it all</div>
                </div>
            </div>

            <div className="flex s_containerPadding column_reverse">
            <div className="s_image">
                    <img src={assets.smm7} alt="Social Media Marketing Agency Banashankari Bangalore" />
                </div>
                <div className="s_content">
                    <h2 className="gradient_sub_headings">1. Social Media Audit & Strategy Planning</h2>
                    <div className="services_para">We begin every project by analyzing your current performance, competitors and goals. This foundation helps us build a custom SMM strategy that delivers.</div>
                    <div className="services_lists">
                        <ul>
                            <li className="services_para">Profile optimization (bio, highlights, CTA buttons)</li>
                            <li className="services_para">Content tone and theme definition</li>
                            <li className="services_para">Hashtag research for better discovery</li>
                        </ul>
                        <ul>
                            <li className="services_para">Trend mapping and seasonal calendar alignment</li>
                            <li className="services_para">KPI definition (reach, engagement, leads)</li>
                        </ul>
                    </div>
                    <div className="services_para">This sets the tone for consistent, high-impact online branding across platforms.</div>
                </div>
            </div>

            <div className="flex s_containerPadding">
                <div className="s_content">
                    <h2 className="gradient_sub_headings">2. Page Handling & Content Management</h2>
                    <div className="services_para">Managing a page isn’t about just posting. Our page handling service ensures your feed looks professional, timely and intentional.</div>
                    <div className="services_lists">
                        <ul>
                            <li className="services_para">Custom content calendar creation</li>
                            <li className="services_para">Caption writing with hashtags and CTAs</li>
                            <li className="services_para">Response management (DMs, comments, reviews)</li>
                        </ul>
                        <ul>
                            <li className="services_para">Profile updates and link management</li>
                            <li className="services_para">Stories, reels, video posts, carousels</li>
                        </ul>
                    </div>
                    <div className="services_para">With a consistent brand voice and high-quality content, we help build a digital presence that grows.</div>
                </div>
                <div className="s_image">
                    <img src={assets.smm9} alt="social media experts near me" />
                </div>
            </div>

            <div className="flex s_containerPadding column_reverse">
                <div className="s_image">
                    <img src={assets.smm3} alt="social media marketing services Banashankari Bangalore" />
                </div>
                <div className="s_content">
                    <h2 className="gradient_sub_headings">3. Facebook Marketing & Page Management</h2>
                    <div className="services_para">We offer targeted facebook marketing to reach local and niche audiences, with a focus on business growth.</div>
                    <div className="services_lists">
                        <ul>
                            <li className="services_para">Facebook page management for regular engagement</li>
                            <li className="services_para">Post boosting and custom ad campaigns</li>
                            <li className="services_para">Events, offers and lead-gen posts</li>
                        </ul>
                        <ul>
                            <li className="services_para">Creative social ads to highlight services and promotions</li>
                            <li className="services_para">Target audience setup and custom retargeting</li>
                        </ul>
                    </div>
                    <div className="services_para">Whether you're a local brand or service provider, our strategies help you create immediate and lasting impact.
                    </div>
                </div>
            </div>

            <div className="flex s_containerPadding">
                <div className="s_content">
                    <h2 className="gradient_sub_headings">4. Instagram Marketing & Visual Identity</h2>
                    <div className="services_para">Instagram thrives on aesthetic + consistency. We help you maintain a cohesive brand style while also pushing reach.</div>
                    <div className="services_lists">
                        <ul>
                            <li className="services_para">Instagram marketing campaigns tailored to your goals</li>
                            <li className="services_para">Product showcases, testimonial stories and reels</li>
                            <li className="services_para">Highlight covers, guides and visual storytelling</li>
                        </ul>
                        <ul>
                            <li className="services_para">Creative layout planning for your feed</li>
                            <li className="services_para">Design and execution of Instagram ads</li>
                        </ul>
                    </div>
                    <div className="services_para">As your instagram advertising experts, we build your identity while ensuring measurable business outcomes.</div>
                </div>
                <div className="s_image">
                    <img src={assets.SmImg_3} alt="social media marketing agency near me" />
                </div>
            </div>

            <div className="flex s_containerPadding column_reverse">
            <div className="s_image">
                    <img src={assets.smm4} alt="instagram advertising experts in Basavanagudi Bangalore" />
                </div>
                <div className="s_content">
                    <h2 className="gradient_sub_headings">5. Paid Social Ads - Growth-Driven Advertising</h2>
                    <div className="services_para">Boost your business with paid social ads that convert.</div>
                    <div className="services_lists">
                        <ul>
                            <li className="services_para">Target-based campaigns (age, interests, behavior, location)</li>
                            <li className="services_para">Budget-friendly daily and monthly spend plans</li>
                            <li className="services_para">Facebook ad strategy for local businesses</li>
                        </ul>
                        <ul>
                            <li className="services_para">Lead generation and message ads</li>
                            <li className="services_para">Re-targeting and dynamic ad setup</li>
                        </ul>
                    </div>
                    <div className="services_para">Our paid ad team ensures you get maximum digital growth with real ROI.</div>
                </div>
            </div>

            <div className="flex s_containerPadding">
                <div className="s_content">
                    <h2 className="gradient_sub_headings">6. Branding Through Content & Design</h2>
                    <div className="services_para">Strong content builds strong brands. We help with:</div>
                    <div className="services_lists">
                        <ul>
                            <li className="services_para">Branded facebook & instagram post design</li>
                            <li className="services_para">Custom graphics, festive creatives, quote cards, infographics</li>
                            <li className="services_para">Promotional content and product features</li>
                        </ul>
                        <ul>
                            <li className="services_para">CTA banners and visual callouts</li>
                            <li className="services_para">Visual elements designed for social boost</li>
                        </ul>
                    </div>
                    <div className="services_para">We align every post to your brand values and audience preferences - because social media should reflect who you are.</div>
                </div>
                <div className="s_image">
                    <img src={assets.smm5} alt="facebook marketing services near me" />
                </div>
            </div>

            <div className="flex s_containerPadding column_reverse">
            <div className="s_image">
                    <img src={assets.smm6} alt="social media management services near me" />
                </div>
                <div className="s_content">
                    <h2 className="gradient_sub_headings">7. Follower Growth & Engagement Strategy</h2>
                    <div className="services_para">Getting followers is one thing. Retaining and engaging them is where we shine.</div>
                    <div className="services_lists">
                        <ul>
                            <li className="services_para">Engagement-driven posts and campaigns</li>
                            <li className="services_para">Polls, quizzes, challenges and giveaways</li>
                            <li className="services_para">Influencer collaborations and story takeovers</li>
                        </ul>
                        <ul>
                            <li className="services_para">Analytics to identify peak times and best formats</li>
                            <li className="services_para">Strategic CTA placement for follower growth</li>
                        </ul>
                    </div>
                    <div className="services_para">With our proactive management, your audience becomes your loyal tribe.</div>
                </div>
            </div>

            <div className="flex s_containerPadding">
                <div className="s_content">
                    <h2 className="gradient_sub_headings">8. Analytics, Reporting & Strategy Optimization</h2>
                    <div className="services_para">Your growth is tracked, measured and constantly improved.</div>
                    <div className="services_lists">
                        <ul>
                            <li className="services_para">Monthly reports on reach, engagement, clicks and conversions</li>
                            <li className="services_para">Ad performance breakdown</li>
                            <li className="services_para">Hashtag and content format analysis</li>
                        </ul>
                        <ul>
                            <li className="services_para">Real-time feedback loop for campaign optimization</li>
                            <li className="services_para">Ongoing consultation with our SMM experts</li>
                        </ul>
                    </div>
                    <div className="services_para">This makes sure your social media management in Banashankari evolves with your audience and platform trends.</div>
                </div>
                <div className="s_image">
                    <img src={assets.smm1} alt="affordable social media managament Basavanagudi Bangalore" />
                </div>
            </div>


            <div className="flex s_containerPadding column_reverse">
            <div className="s_image">
                    <img src={assets.smm8} alt="Social media campaign" />
                </div>
                <div className="s_content">
                    <h2 className="gradient_sub_headings">More Than Just Posting - We Build Brands</h2>
                    <div className="services_para">At Invention Minds, our social media management services are designed for those who want more than just online presence. We create performance-based ecosystems built for digital presence, follower growth and long-term branding.</div>
                    <div className="services_para"><b>Our full-service offerings include:</b></div>
                    <div className="services_lists">
                        <ul>
                            <li className="services_para">Social media strategy, copy and visual design</li>
                            <li className="services_para">Complete page handling and audience management</li>
                            <li className="services_para">Growth-focused SMM strategy and ad execution</li>
                        </ul>
                        <ul>
                            <li className="services_para">Expertise across Meta platforms: Facebook & Instagram</li>
                            <li className="services_para">Affordable plans that deliver strong digital growth month-on-month</li>
                        </ul>
                    </div>
                    <div className="services_para">Whether you're a startup looking for visibility or a growing brand seeking social media experts, we help you grow with purpose and power.</div>
                </div>
            </div>

            <div className="flex s_containerPadding">
                <div className="s_content">
                    <h2 className="gradient_sub_headings">Industries We Serve:</h2>
                    <div className="services_para">We provide Social Media Management in Banashankari to a wide variety of businesses across Bangalore, including:</div>
                    <div className="services_lists">
                        <ul>
                            <li className="services_para">Educational institutes, coaching centers and e-learning</li>
                            <li className="services_para">Hospitals, clinics and wellness centers</li>
                            <li className="services_para">Restaurants, cafes and food businesses</li>
                        </ul>
                        <ul>
                            <li className="services_para">Realtors, interior designers and service providers</li>
                            <li className="services_para">Local stores and retail brands</li>
                            <li className="services_para">Tech and IT service companies</li>
                        </ul>
                    </div>
                    <div className="services_para">From social media experts near Jayanagar for Facebook and Instagram to affordable social media marketing agency in Sakakki, our team works across industries and locations.</div>
                </div>
                <div className="s_image">
                    <img src={assets.smm2} alt="professional social media marketing near me" />
                </div>
            </div>

            <div className="flex s_containerPadding column_reverse">
            <div className="s_image">
                    <img src={assets.SmImg_1} alt="affordable social media marketing agency in Sakakki" />
                </div>
                <div className="s_content">
                    <h2 className="gradient_sub_headings">Our Strengths</h2>
                    <div className="services_lists">
                        <ul>
                            <li className="services_para">Social media managers for businesses in Basavanagudi and beyond</li>
                            <li className="services_para">Highly-skilled SMM experts with deep platform knowledge</li>
                            <li className="services_para">In-depth analytics reporting for every post and campaign</li>
                        </ul>
                        <ul>
                            <li className="services_para">100% original content tailored for your audience</li>
                            <li className="services_para">Ability to scale content and ads together</li>
                            <li className="services_para">Use of best practices for responsive design, platform compliance and social ads optimization</li>
                        </ul>
                    </div>
                    <div className="services_para">When you work with Invention Minds, you're working with the best social media marketing and management company in Banashankari - and it shows.</div>
                </div>
            </div>

            <div className="flex s_containerPadding">
                <div className="s_content">
                    <h2 className="gradient_sub_headings">Let’s Grow Your Digital Brand the Smart Way</h2>
                    <div className="services_para">Looking for expert Social Media Management in Banashankari that builds awareness, engagement and ROI?</div>
                    <div className="services_para">Invention Minds delivers exactly that. We’re your go-to social media marketing agency, helping you manage Facebook and Instagram with:</div>
                    <div className="services_lists">
                        <ul>
                            <li className="services_para">Strategic planning and creative content</li>
                            <li className="services_para">Paid ad performance and campaign tracking</li>
                            <li className="services_para">Regular content calendars and page handling</li>
                        </ul>
                        <ul>
                            <li className="services_para">Smart SMM strategy that aligns with your goals</li>
                            <li className="services_para">Smart SMM strategy that aligns with your goals</li>
                        </ul>
                    </div>
                    <div className="services_para">Talk to our team today and get started with a custom plan for your social media success.</div>
                </div>
                <div className="s_image">
                    <img src={assets.smm10} alt="social media managers for businesses in Basavanagudi Bangalore" />
                </div>
            </div>

            <div className="s_containerPadding">
				<h2 style={{marginTop : "30px", marginBottom : "50px"}}  className="gradient_headings web_con_2_heading">FAQ’s - Choosing a Website Development Company</h2>

				{
					faqs.map((value, index) =>
						<div>
							<div className='gradient_sub_headings'><b>Q{index + 1}. {value.ques}</b></div>
							<div className="services_para" dangerouslySetInnerHTML={{ __html: value.ans }} />
						</div>
					)
				}

			</div>

        </div>
    );
};

export default SocialMedia;

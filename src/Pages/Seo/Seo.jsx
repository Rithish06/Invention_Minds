import React from 'react'
import './Seo.css'
import ServicesBannerDesign from '../../Components/ServicesBannerDesign/ServicesBannerDesign'
import { assets } from '../../assets/assets'
import { Helmet } from 'react-helmet'

const Seo = () => {


    const faqs = [
        {
            ques : "Why should one choose Invention Minds for SEO services in Banashankari?",
            ans : `Invention Minds is a trusted agency offering result-driven SEO services in Banashankari. We provide complete support across on-page SEO, off-page SEO, and technical SEO - helping businesses improve visibility, drive qualified traffic, and grow sustainably. Our team of SEO experts in Bangalore ensures every campaign is tailored to meet your goals.`
        },
        {
            ques : "Do you offer affordable SEO packages for small businesses?",
            ans : `Yes. We offer affordable SEO services in Banashankari Bangalore with flexible pricing plans. Whether you're a startup, local business or mid-size company, our professional SEO services are designed to fit your budget without compromising on quality. You’ll get performance insights, ranking improvements, and transparent reporting.`
        },
        {
            ques : "What is included in your SEO audit and optimization service?",
            ans : `Our SEO audit and optimization services for business websites include technical analysis, keyword gaps, performance checks, mobile responsiveness, backlink profile review, indexing and crawling diagnostics and a complete action plan. This helps identify areas that need improvement to boost your website’s rankings and visibility.`
        },
        {
            ques : "Can you help my website rank #1 on Google?",
            ans : `Our team of SEO experts in Bangalore to rank your website #1 on Google uses proven methods such as keyword targeting, high-authority link building, technical enhancements, and structured content strategies. While results take time, we consistently deliver long-term, top-page rankings for our clients.`
        },
        {
            ques : "Do you provide technical SEO services for improving site performance?",
            ans : `Yes. Our technical SEO services for website performance improvement include fixing crawl errors, optimizing load speed, setting up sitemaps, enhancing mobile usability, and improving core web vitals. This ensures your site is search-engine friendly and offers a seamless user experience.`
        },
        {
            ques : "What types of businesses do you serve with SEO?",
            ans : `We work with a wide range of industries, offering SEO for local businesses, ecommerce, SaaS platforms, educational institutions, healthcare providers, service-based firms, and more. Whether you need SEO for a school, hospital, real estate site or IT company, our team adapts the strategy to your business type and goals`
        },
        {
            ques : "Do you offer complete website optimization?",
            ans : `Yes. Invention Minds is known as a full-service SEO agency in Bangalore for complete website optimization. We handle everything from technical foundations to keyword-rich content creation and authority-building. Our holistic approach helps improve rankings, traffic and conversion rates.`
        },
    ]

    return (
        <div className='servicesPage'>
            {/* meta title and description */}
            <Helmet>
                <title>Professional SEO Services | Boost Your Website Rankings with Invention Minds</title>
                <meta name='description' content="Get top-notch SEO services from Invention Minds. Improve your website's visibility, drive traffic, and grow your business with expert SEO strategies." />
                <meta name='keywords' content="Professional SEO services, Search engine optimization, Website ranking improvement, Increase organic traffic, SEO experts near me, On-page and off-page SEO, Local SEO services, Best SEO agency, Affordable SEO packages, Digital marketing and SEO, SEO strategies for business growth, Keyword research and optimization, Google ranking services, E-commerce SEO services, Improve website visibility" />
            </Helmet>
            <ServicesBannerDesign
                staza1Color="#fff"
                staza2Color="#F99B2B"
                staza3Color="#fff"
                stanza1="Boost Visibility with Expert "
                stanza2="SEO Solutions "
                stanza3="for Any Business"
                decription="Expert SEO Services in Bengaluru – Invention Minds"
                smallTitle="SEO For Any Business"
            />

            <div className="Seo_Container_2">
                <h1 className="gradient_headings services_heading text-center">Best SEO Services in Banashankari to Boost Google Rankings and Business Visibility</h1>

                <div className="SeoContentContainer">
                    <div className="SeoContent">
                        <div className="services_para">At Invention Minds, we deliver comprehensive, scalable, and ethical SEO services in Banashankari to help your business grow organically. With a proven track record of improving rankings, increasing traffic and driving leads, we are trusted by startups, local businesses, hospitals, institutions and large enterprises across Bangalore.</div>
                        <div className="services_para">Our team of SEO experts in Bangalore doesn’t believe in shortcuts - we build sustainable growth through custom strategies, technical precision and content that ranks</div>
                    </div>
                    <div className="SeoImage">
                        <img src={assets.SeoImage} alt="Best SEO services in Bangalore | Invention Minds" />
                    </div>
                </div>

                <div className="SeoContentContainer container_margin column_reverse">
                    <div className="SeoImage">
                        <img src={assets.seoImage1} alt="" />
                    </div>
                    <div className="SeoContent">
                        <h2 className='gradient_sub_headings'>Why Invention Minds Is the Best SEO Company for Your Business</h2>
                        <div className="services_para">Invention Minds is often regarded as the best SEO company in Basavanagudi and beyond - because we do more than just optimize. We analyze, build, execute, and continuously improve your digital presence.</div>
                        <div className="services_para">Whether you're a service provider, an online store, or a multi-location brand, we provide SEO solutions that adapt to your business model. As a seasoned SEO agency in Bangalore for complete website optimization, we handle everything from site audits to authority-building.</div>
                        <div className="services_para">We’re also known as the expert SEO service provider in Banashankari Bangalore - focused on results, not vanity metrics.</div>
                    </div>
                </div>

                <div className="SeoContentContainer container_margin">
                    <div className="SeoContent">
                        <h2 className='gradient_sub_headings'>Our Full Range of SEO Services</h2>
                        <div className="services_para">We follow a 360° approach to SEO, blending on-page SEO, off-page SEO, and technical SEO with a content-first mindset and transparent reporting.</div>
                        <h2 className="gradient_sub_headings"><b>On-Page SEO Services</b></h2>
                        <div className="SeoLists">
                            <ul>
                                <li className="services_para">Strategic keyword research and content alignment</li>
                                <li className="services_para">Meta titles, descriptions, headers, and alt tag optimization</li>
                                <li className="services_para">SEO-friendly URLs and internal linking</li>
                            </ul>
                            <ul>
                                <li className="services_para">UX and Core Web Vitals improvements</li>
                                <li className="services_para">Mobile-first formatting for content pages</li>
                                <li className="services_para">Structured data markup for rich results</li>
                            </ul>
                        </div>
                        <div className="services_para container_margin">On-page SEO helps your content become more discoverable, relevant, and crawlable. It’s the foundation of everything we do.</div>
                    </div>
                    <div className="SeoImage">
                        <img src={assets.seoImage2} alt="" />
                    </div>
                </div>

                <div className="SeoContentContainer container_margin column_reverse">
                    <div className="SeoImage">
                        <img src={assets.seoImage3} alt="" />
                    </div>
                    <div className="SeoContent">
                        <h2 className='gradient_sub_headings'>Off-Page SEO Services</h2>
                        <div className="SeoLists">
                            <ul>
                                <li className="services_para">Authority-driven backlink building</li>
                                <li className="services_para">High-quality guest posting and outreach</li>
                                <li className="services_para">Citation and directory submissions</li>
                            </ul>
                            <ul>
                                <li className="services_para">Review management and social signals</li>
                                <li className="services_para">Competitor backlink gap analysis</li>
                            </ul>
                        </div>
                        <div className="services_para">We’re recognized as the best SEO agency near Sakakki offering on-page and off-page optimization - with a focus on building clean, credible and context-rich links.</div>
                    </div>
                </div>

                <div className="SeoContentContainer container_margin ">
                    <div className="SeoContent">
                        <h2 className='gradient_sub_headings'>Technical SEO Services</h2>
                        <div className="services_para">Our technical SEO services for website performance improvement cover everything behind the scenes to ensure your website loads faster, ranks better and is easier for search engines to crawl.</div>
                        <div className="SeoLists">
                            <ul>
                                <li className="services_para">XML sitemap and robots.txt configuration</li>
                                <li className="services_para">Server and speed optimization (CDN, caching, compression)</li>
                                <li className="services_para">Crawl error resolution</li>
                            </ul>
                            <ul>
                                <li className="services_para">HTTPS, SSL and site security enhancement</li>
                                <li className="services_para">URL structure and breadcrumb optimization</li>
                                <li className="services_para">JavaScript rendering fixes</li>
                            </ul>
                        </div>
                        <div className="services_para">If you’ve been struggling with indexing or drops in ranking, this is where we help most.</div>
                    </div>
                    <div className="SeoImage">
                        <img src={assets.seoImage4} alt="" />
                    </div>
                </div>

                <div className="SeoContentContainer container_margin column_reverse">
                    <div className="SeoImage">
                        <img src={assets.seoImage5} alt="" />
                    </div>
                    <div className="SeoContent">
                        <h2 className='gradient_sub_headings'>Affordable SEO Services in Banashankari Bangalore</h2>
                        <div className="services_para">We provide affordable SEO services in Banashankari Bangalore without compromising on quality. Our pricing models are flexible — ideal for startups, growing brands, and large platforms.</div>
                        <div className="services_para"><b>We offer:</b></div>
                        <div className="SeoLists">
                            <ul>
                                <li className="services_para">Local SEO campaigns for area-focused businesses</li>
                                <li className="services_para">National SEO for product and service visibility across India</li>
                                <li className="services_para">Enterprise SEO for websites with 100+ pages</li>
                            </ul>
                            <ul>
                                <li className="services_para">Custom SEO for niche industries and SaaS platforms</li>
                                <li className="services_para">Add-ons: content writing, blog SEO and multilingual SEO</li>
                            </ul>
                        </div>
                        <div className="services_para">If your goal is to increase website traffic with professional SEO packages, we’ll build you a strategy that balances performance and budget.</div>
                    </div>
                </div>

                <div className="SeoContentContainer container_margin">
                    <div className="SeoContent">
                        <h2 className='gradient_sub_headings'>Industry-Focused SEO Solutions</h2>
                        <div className="services_para">Invention Minds delivers specialized SEO strategies for over 15 different industries. Our vertical-specific approach ensures every business gets what it needs.</div>
                        <div className="services_para"><b>We offer:</b></div>
                        <div className="SeoLists">
                            <ul>
                                <li className="services_para"><b>SEO for local businesses</b> targeting service-based keywords</li>
                                <li className="services_para"><b>SEO for hospitals and schools</b> focused on regional awareness</li>
                                <li className="services_para"><b>SEO for eCommerce websites</b> with product indexing and schema</li>
                                <li className="services_para"><b>SEO for educational platforms</b> with course-based search strategy</li>
                            </ul>
                            <ul>
                                <li className="services_para"><b>SEO for real estate</b> and property aggregation</li>
                                <li className="services_para"><b>SEO for financial services, law firms, and consultants</b></li>
                                <li className="services_para"><b>SEO for B2B, IT companies, SaaS products and startups</b></li>
                            </ul>
                        </div>
                        <div className="services_para">If your industry isn’t listed here - don’t worry. We tailor strategies for any website that needs visibility.</div>
                    </div>
                    <div className="SeoImage">
                        <img src={assets.seoImage6} alt="" />
                    </div>
                </div>

                <div className="SeoContentContainer container_margin column_reverse">
                    <div className="SeoImage">
                        <img src={assets.seoImage7} alt="" />
                    </div>
                    <div className="SeoContent">
                        <h2 className='gradient_sub_headings'>SEO Audit and Optimization Services for Business Websites</h2>
                        <div className="services_para">Our SEO journey always begins with a full SEO audit and optimization service. This audit helps us uncover everything that might be holding your website back - from broken links and speed issues to keyword gaps and technical blockers.</div>
                        <div className="services_para"><b>The audit includes:</b></div>
                        <div className="SeoLists">
                            <ul>
                                <li className="services_para">SEO health score</li>
                                <li className="services_para">Page speed insights and Core Web Vitals</li>
                                <li className="services_para">Backlink profile and toxic link checks</li>
                            </ul>
                            <ul>
                                <li className="services_para">Keyword opportunities vs competition</li>
                                <li className="services_para">Site architecture, crawl depth and indexability</li>
                                <li className="services_para">Content duplication and readability</li>
                            </ul>
                        </div>
                        <div className="services_para">This gives us a clear picture of what to fix, what to build and how to win.</div>
                    </div>
                </div>

                <div className="SeoContentContainer container_margin">
                    <div className="SeoContent">
                        <h2 className='gradient_sub_headings'>SEO Experts in Bangalore to Rank Your Website #1 on Google</h2>
                        <div className="services_para">Want to be on the first page of Google? We’ll take you there.</div>
                        <div className="services_para">Our team includes certified SEO experts in Bangalore to rank your website #1 on Google using strategies that align with algorithm updates, user intent and search behavior.</div>
                        <div className="services_para"><b>Our SEO team works on:</b></div>
                        <div className="SeoLists">
                            <ul>
                                <li className="services_para">Keyword and topic cluster planning</li>
                                <li className="services_para">Competitor strategy deconstruction</li>
                                <li className="services_para">Content design and SEO-friendly layouting</li>
                            </ul>
                            <ul>
                                <li className="services_para">Regular performance tracking and traffic analysis</li>
                                <li className="services_para">Continuous A/B testing for content and CTA blocks</li>
                                <li className="services_para">Building authority through backlinks, mentions and credibility signals</li>
                            </ul>
                        </div>
                        <div className="services_para">Unlike agencies that focus only on rankings, we focus on what those rankings bring - leads, sales and impact.</div>
                    </div>
                    <div className="SeoImage">
                        <img src={assets.seoImage8} alt="" />
                    </div>
                </div>

                <div className="SeoContentContainer container_margin column_reverse">
                    <div className="SeoImage">
                        <img src={assets.seoImage9} alt="" />
                    </div>
                    <div className="SeoContent">
                        <h2 className='gradient_sub_headings'>Why We’re the Best SEO Service Provider in Bangalore</h2>
                        <div className="services_para">Here’s what makes Invention Minds different:</div>
                        <div className="SeoLists">
                            <ul>
                                <li className="services_para">Transparent communication</li>
                                <li className="services_para">Dedicated account manager for each client</li>
                                <li className="services_para">Real-time analytics dashboards and monthly reports</li>
                            </ul>
                            <ul>
                                <li className="services_para">Alignment between your goals and our execution</li>
                                <li className="services_para">Proven results across local and national SEO</li>
                                <li className="services_para">Agile processes - we adapt as Google evolves</li>
                            </ul>
                        </div>
                        <div className="services_para">Whether you need SEO for websites, blogs, eCommerce platforms - we deliver long-term success through the right blend of strategy and technology.</div>
                    </div>
                </div>

            </div>

            <div className="Seo_Container_2">
                    <h2 className="gradient_headings web_con_2_heading">FAQ’s - Choosing a Website Development Company</h2>

                    {
                        faqs.map((value, index) =>
                            <div className=''>
                                <div className='gradient_sub_headings'><b>Q{index + 1}. {value.ques}</b></div>
                                <div className="services_para" dangerouslySetInnerHTML={{ __html: value.ans }} />
                            </div>
                        )
                    }
            </div>
        </div>
    )
}

export default Seo

import React from 'react'
import BannerComponent from '../../Utility/BannerComponent'

function PrivacyPolicy() {
    return (
        <>
            <BannerComponent
                imageUrl={require('../../Assets/images/about-us-bg-section-1.png')}
                heading={'Privacy Policy'}
            />

            <div className='Cookie-bg'>
                <div className='Cookie'>
                    <div>
                        <p className='light_highlighted_head' style={{ marginTop: '20px',textTransform:'uppercase' }}>Best Ai Business Manage Software</p>
                    </div>
                    <div className=''>
                        <h1 className='text-center aibased-heading py-4'>Privacy Policy</h1>
                    </div>
                    <div className='Cookie-lower'>
                        <dl style={{ margin: '15px' }}>
                            <dt>Introduction :</dt>
                            <dd>Thank you for choosing our AI Chatbot service to enhance your company's operations. This Privacy Policy outlines how we handle the information collected by our AI-based software, emphasizing our commitment to safeguarding your privacy.</dd>
                            <dt>1 - Information Collected :</dt>
                            <dd><span>(a) User Input :</span> The AI Chatbot may collect data voluntarily provided by users, such as names, contact details, and other relevant information necessary for effective communication.</dd>
                            <dd><span>(b) Chat Interactions :</span> Information generated through user interactions, including messages, queries, and responses, is collected to optimize the functionality and performance of the AI Chatbot.</dd>
                            <dd><span>(c) Technical Information :</span> We collect technical details such as device type, IP address, browser type, and operating system to improve user experience and address technical issues.</dd>
                            <dt>2 - Use of Information :</dt>
                            <dd><span>(a) Service Enhancement :</span> Collected data is utilized to improve the efficiency of the AI Chatbot, providing quick and concise assistance to users.</dd>
                            <dd><span>(b) Customization :</span> The software can be tailored for each company, serving as a digital entity or AI employee, reducing the reliance on online assistance and call centers.</dd>
                            <dd><span>(c) Employee Support :</span> The software can be customized to perform tasks, relieving employees of certain work responsibilities.</dd>
                            <dt>3 - Examples of Use :</dt>
                            <dd><span>(a) Industry-Based :</span> The AI Chatbot can assist in recruitment processes by matching CVs and job descriptions with a recruiter-friendly UI, streamlining candidate vetting.</dd>
                            <dd><span>(b) Feature-Based :</span> It can serve as a user-facing customer service bot, offering contextual assistance based on user needs.</dd>
                            <dd><span>(c) Application-Based :</span> The software can be integrated into various applications, facilitating general chatbot interactions and team learning.</dd>
                            <dt>4 - Solution-Based :</dt>
                            <dd><span>(a) Productivity Enhancement :</span> The AI Chatbot facilitates multiple application management, contributing to increased productivity across different business functions.</dd>
                            <dt>5 - Data Security :</dt>
                            <dd><span>(a) Security Measures :</span> We employ robust security measures to protect collected information from unauthorized access, disclosure, alteration, and destruction.</dd>
                            <dt>6 - User Choices :</dt>
                            <dd><span>(a) Opt-Out :</span> Users have the option to opt-out of specific data collection and communication features.</dd>
                            <dt>7 - Changes to the Privacy Policy :</dt>
                            <dd><span>(a) Policy Updates :</span> We reserve the right to update this Privacy Policy. Changes will be communicated through our website.</dd>
                            <dt>8 - Contact Information :</dt>
                            <dd><span>(a) Queries :</span> For any questions, concerns, or requests related to privacy, please contact us at [insert contact information].</dd>
                            <dd>By utilizing our AI Chatbot service, you agree to the terms outlined in this Privacy Policy.</dd>
                        </dl>
                    </div>
                </div>
            </div>



        </>
    )
}

export default PrivacyPolicy
import React from 'react'
import BannerComponent from '../../Utility/BannerComponent'

function TermsConditions() {
    return (
        <>
            <BannerComponent
                imageUrl={require('../../Assets/images/about-us-bg-section-1.png')}
                heading={'Terms and Conditions'}
            />
            <div className='t-c-bg'>
                <div className='t-c'>
                    <div>
                        <p className='light_highlighted_head' style={{ marginTop: '20px',textTransform:'uppercase' }}>Best Ai Business Manage Software</p>
                    </div>
                    <div className=''>
                        <h1 className='text-center aibased-heading py-4'>Terms & Conditions Vision</h1>
                    </div>
                    <div className='t-c-lower'>
                        <dl style={{ margin: '15px' }}>
                            <dt>Introduction :</dt>
                            <dd>This Cookie Policy outlines how AI Conversational uses cookies and similar technologies when you use our AI-based software services. By continuing to use our services, you consent to the use of cookies as described in this policy.</dd>
                            <dt>What are Cookies?</dt>
                            <dd>This Cookie Policy outlines how AI Conversational uses cookies and similar technologies when you use our AI-based software services. By continuing to use our services, you consent to the use of cookies as described in this policy.</dd>
                            <dt>1 - How We Use Cookies :</dt>
                            <dd><span>(a) Essential Cookies : </span>Essential cookies are necessary for the basic functionality of our AI-based software. They enable you to navigate the software and use its features.</dd>
                            <dd><span>(b) Performance Cookies : </span>Performance cookies help us improve the performance and usability of our software. They collect information about how users interact with the software, such as which pages are visited most often.</dd>
                            <dd><span>(c) Functionality Cookies : </span>Functionality cookies allow our software to remember choices you make, such as language preferences, and provide enhanced features.</dd>
                            <dd><span>(d) Targeting or Advertising Cookies : </span>We do not use targeting or advertising cookies in our AI-based software. We prioritize user privacy and do not engage in targeted advertising.</dd>
                            <dt>2 - Types of Cookies We Use :</dt>
                            <dd><span>(a) Session Cookies : </span>Session cookies are temporary and are deleted when you close your browser. They are essential for the proper functioning of the software. </dd>
                            <dd><span>(b) Performance Cookies : </span>Persistent cookies remain on your device for a set period. They help us recognize you when you return to our software and enhance your user experience.</dd>
                            <dt>3 - Third-Party Cookies :</dt>
                            <dd><span>(a) Session Cookies : </span>Session cookies are temporary and are deleted when you close your browser. They are essential for the proper functioning of the software. </dd>
                            <dd><span>(b) Performance Cookies : </span>Persistent cookies remain on your device for a set period. They help us recognize you when you return to our software and enhance your user experience.</dd>
                            <dt>4 - Cookie Management :</dt>
                            <dd><span>(a) Browser Settings : </span>You can control and manage cookies through your browser settings. Most browsers allow you to refuse or accept cookies and delete them.</dd>
                            <dd><span>(b) Opting Out : </span>You can opt out of specific cookies by adjusting your preferences in our software. However, disabling certain cookies may impact the functionality and performance of the software.</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TermsConditions
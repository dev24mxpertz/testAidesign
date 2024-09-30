import React from 'react'
import BannerComponent from '../../Utility/BannerComponent'

function CookiePolicy() {
    return (
        <>
            <BannerComponent
                imageUrl={require('../../Assets/images/about-us-bg-section-1.png')}
                heading={'Cookie Policy'}
            />

            <div className='Cookie-bg'>
                <div className='Cookie'>
                    <div>
                        <p className='light_highlighted_head' style={{ marginTop: '20px' }}>Best Ai Business Manage Software</p>
                    </div>
                    <div className=''>
                        <h1 className='text-center aibased-heading py-4'>Cookie Policy</h1>
                    </div>
                    <div className='Cookie-lower'>
                        <dl style={{ margin: '15px' }}>
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
                            <dt>5 - Changes to the Cookie Policy :</dt>
                            <dd><span>(a) Updates : </span>We may update this Cookie Policy to reflect changes in our practices or for legal reasons. We encourage you to review this policy regularly for any updates.</dd>
                            <dt>6 - Contact Information :</dt>
                            <dd>(a) If you have any questions or concerns regarding our Cookie Policy, please contact us at [insert contact information].</dd>
                            <dd>By using our AI-based software services, you consent to the use of cookies as outlined in this policy.</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CookiePolicy
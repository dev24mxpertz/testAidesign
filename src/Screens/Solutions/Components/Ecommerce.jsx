import React from 'react'

function Ecommerce() {
    return (
        <div>
            <div className='ecommerce'>
                {/* <div className='ecommerce-heading'>
                    <h1>Ecommerce</h1>
                </div> */}
                <div className='ecommerce-container'>
                    <div>
                        <img width={525}  src={require('../../../Assets/images/ecommerce.png')} alt="" />
                    </div>
                    <div className='ecommerce-details'>
                        <h1 className='text-justify'><span className='text-uppercase'>Ecommerce:</span> Turn your customer support into sales</h1>
                        <p className='text-justify'>Enhance your team's efficiency by enabling faster request resolutions, uncovering cross-sell and upsell opportunities, and building genuine connections with your customers.</p>
                        <p className='text-justify'><b className='text-uppercase'>Orders:</b> Provide real-time updates on order status and delivery tracking, assist customers with damaged or missing items, and prioritise special order requests.</p>
                        <p className='text-justify'><b className='text-uppercase'>Payments:</b> Handle refund requests, navigate failed payments, and share invoices with customers, all while ensuring their personal data remains safe and secure.</p>
                        <p className='text-justify'><b className='text-uppercase'>Account Details:</b> Assist customers with login issues and support them in updating account details such as passwords, phone numbers, or email addresses.</p>
                        <p className='text-justify'><b className='text-uppercase'>FAQs:</b> Instantly address repetitive questions on return policies, discounts, product details, and more. Collect information upfront before escalating complex queries to an agent.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecommerce

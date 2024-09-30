import React from 'react'

function Travel() {
    return (
        <div>
            <div className='ecommerce'>
                {/* <div className='ecommerce-heading'>
                    <h1>Travel</h1>
                </div> */}
                <div className='ecommerce-container'>
                    <div>
                        <img width={525} src={require('../../../Assets/images/travel.png')} alt="" />
                    </div>
                    <div className='ecommerce-details'>
                        <h1  className='text-justify'><span className='text-uppercase'>Travel:</span> Your passport to better CX  </h1>
                        <p className='text-justify'>Provide your customers with instant, personalised, 24/7 support in 109 languages using AI-powered automation solutions designed specifically for travel companies.</p>
                        <p className='text-justify'><b className='text-uppercase'>Booking:</b> Enable your customers to add a bag, upgrade a room, check flight status, or change ticket dates effortlessly.</p>
                        <p className='text-justify'><b className='text-uppercase'>Payment:</b> Handle payments directly within conversations and offer opportunities for travelers to pay for add-ons and upgrades seamlessly.</p>
                        <p className='text-justify'><b className='text-uppercase'>Account Details:</b> Resolve login issues and let customers update personal information such as passwords, phone numbers, or email addresses without needing agent assistance.</p>
                        <p className='text-justify'><b className='text-uppercase'>In-Destination Support:</b> Lost baggage? Check-in issues? Can't find the tour guide? No worries. Deliver immediate, multilingual, 24/7 support and escalate complex queries to agents when needed.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Travel

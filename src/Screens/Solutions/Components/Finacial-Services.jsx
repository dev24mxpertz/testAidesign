import React from 'react'

function FinacialServices() {
    return (
        <div>
            <div className='ecommerce'>
                {/* <div className='ecommerce-heading'>
                    <h1>Financial Services</h1>
                </div> */}
                <div className='ecommerce-container container-row-reverse'>
                    <div className='ecommerce-details'>
                        <h1 className='text-justify'><span className='text-uppercase'>Financial Services:</span>Time is money. Save both.</h1>
                        <p className='text-justify'>Harness the power of AI-driven support automation to streamline processes, cut costs, and deliver superior, faster customer experiences that boost your bottom line.</p>
                        <p className='text-justify'><b className='text-uppercase'>Transactions:</b> Provide instant updates on money transfer statuses, assist with adding or adjusting direct debits, and support customers with failed payments.</p>
                        <p className='text-justify'><b className='text-uppercase'>Security:</b> Authenticate users, report lost or stolen cards, and offer immediate assistance for claims of fraudulent activity.</p>
                        <p className='text-justify'><b className='text-uppercase'>Account:</b> Address login issues and enable customers to update personal details or upgrade their accounts without needing agent assistance.</p>
                        <p className='text-justify'><b className='text-uppercase'>Services:</b> Guide customers through card activation and unblocking, help them sign up for service updates, or assist in requesting account statements.</p>
                    </div>
                    <div>
                        <img width={525} src={require('../../../Assets/images/financial.png')} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinacialServices

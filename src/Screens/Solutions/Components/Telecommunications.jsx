import React from 'react'

function Telecommunications() {
    return (
        <div>
            <div className='ecommerce'>
                {/* <div className='ecommerce-heading'>
                    <h1>Telecommunication</h1>
                </div> */}
                <div className='ecommerce-container container-row-reverse'>                    
                    <div className='ecommerce-details'>
                        <h1 className='text-justify'><span className='text-uppercase'>Telecommunication: </span>Connect Globally and Seamless Connectivity</h1>
                        <p className='text-justify'>Deliver fast and efficient support for repetitive and high-volume queries, freeing up your agents to handle complex tasks and provide high-value support.</p>
                        <p className='text-justify'><b className='text-uppercase'>Automation for High Volumes:</b> Manage high volumes across channels with increased speed and efficiency.</p>
                        <p className='text-justify'><b className='text-uppercase'>Contract:</b> Handle new phone deliveries and resolve network issues seamlessly.</p>
                        <p className='text-justify'><b className='text-uppercase'>Account:</b> Assist with required documents and updating account details effortlessly.</p>
                    </div>
                    <div>
                        <img width={525} src={require('../../../Assets/images/telecommunication.png')} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Telecommunications

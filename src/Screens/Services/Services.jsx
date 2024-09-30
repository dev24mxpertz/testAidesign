import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import BannerComponent from '../../Utility/BannerComponent';
import ServiceFeatures from './Components/ServiceFeatures';

function Services() {
    return (
        <>
            <div>
                {/* <BannerComponent
                    imageUrl={require('../../Assets/images/ServiceBG.png')}
                    heading={'Consulting'}
                /> */}

                <ServiceFeatures />
                {/* <WhyUs/> */}
            </div>
        </>
    )
}

export default Services
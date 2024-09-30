import React from 'react'
import BannerComponent from '../../Utility/BannerComponent'
import WhyUs from '../Services/Components/WhyUs'
import Whychooseai from '../Services/Components/Whychooseai'

function WhyChooseUs() {
    return (
        <>
            <BannerComponent
                imageUrl={require('../../Assets/images/WhyUs1.png')}
                heading={'Why Choose Us'}
            />
            <Whychooseai />
            <WhyUs/>
        </>
    )
}

export default WhyChooseUs
import React from 'react'
import BannerComponent from '../../Utility/BannerComponent'
import Ecommerce from './Components/Ecommerce'
import "../../Styles/Solution.css"
import FinacialServices from './Components/Finacial-Services'
import Travel from './Components/Travel'
import Telecommunications from './Components/Telecommunications'
import Healthcare from './Components/Healthcare'

function Solutions() {
    return (
        <div className='ecommerce-bg'>
            <div className='bachground-purple'>
                <BannerComponent
                    imageUrl={require('../../Assets/images/about-us-bg-section-1.png')}
                    heading={'Solution'}
                />
            </div>
            <Ecommerce />
            <FinacialServices />
            <Travel />
            <Telecommunications />
            <Healthcare />
        </div>
    )
}

export default Solutions

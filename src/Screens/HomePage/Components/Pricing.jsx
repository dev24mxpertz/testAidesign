import React from "react";
function Pricing() {
   
    return (
        <>

            <div className='Pricing_wrapper'>
                <div className="col-12 text-center">
                    <p className='light_highlighted_head'>Best Ai Business Manage Software</p>
                    <h1 className='col-12 my-4 aibased-heading'>Affordable Pricing</h1>
                    <p className='col-12 col-xxl-5 col-xl-6 col-lg-7 col-md-9 col-md-10 description text-center  m-0'>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt labore dolore magna aliquyam erat sed diam voluptua.</p>
                </div>
                <div className="col-12">
                   

                        <div className='active1_Price_Card Pricing_Cards text-center'>
                            <div className='pt-4'>
                                <img className='img-fluid' src={require('../../../Assets/images/p_element-2.png')} alt="" />
                            </div>
                            <h1>Basic</h1>
                            <div className='price_info'>
                                <p>Upto <b>5</b> users</p>
                                <p className='pt-2'>Max <b>100</b> visit/mo</p>
                            </div>
                            <div className='priceTag pt-4'>
                                <p><sup><span>$</span></sup>9<sub><span>/mo</span></sub></p>
                                <button className=''>Select Standard</button>
                            </div>
                        </div>
                        <div className=' Pricing_Cards active2_Price_Card text-center'>
                            <div className='pt-4'>
                                <img className='img-fluid' src={require('../../../Assets/images/p_element_1.png')} alt="" />
                            </div>
                            <h1>Premium</h1>
                            <div className='price_info'>
                                <p><b>Upto 15 users</b></p>
                                <p className='pt-2'>Max <b>500</b> visit/mo</p>
                            </div>
                            <div className='priceTag pt-4'>
                                <p><sup><span>$</span></sup>10<sub><span>/mo</span></sub></p>
                                <button className=''>Select Standard</button>
                            </div>
                        </div>
                        <div className='active3_Price_Card Pricing_Cards text-center'>
                            <div className='pt-4'>
                                <img className='img-fluid' src={require('../../../Assets/images/p_element-3.png')} alt="" />
                            </div>
                            <h1>Ultimate</h1>
                            <div className='price_info'>
                                <p><b>Unlimited</b> users</p>
                                <p className='pt-2'><b>Unlimited</b> visit/mo</p>
                            </div>
                            <div className='priceTag pt-4'>
                                <p><sup><span>$</span></sup>11<sub><span>/mo</span></sub></p>
                                <button className=''>Select Standard</button>
                            </div>
                        </div>
                 
                </div>

            </div>
            
        </>
    )
}

export default Pricing
import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

function        WhyUs() {
    return (
        <>
            <div className='whyUs_wrapper'>
                <div className="col-12 text-center">
                    <h1 style={{ fontSize: '54px', fontWeight: '700' }} className='col-12 aibased-headin text-uppercase' >Why Choose Us?</h1>
                </div>
                <div className="usapart">
                    <div className="m-5">
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                height:250,
                            }}
                        >
                            <Meta className='text-justify' title="Tailored Solutions" description="We provide customized AI automation solutions that are specifically designed to fit your unique business needs, ensuring maximum effectiveness and efficiency." />
                        </Card>
                    </div>
                    <div className="m-5">
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                height:250,
                            }}
                        >
                            <Meta className='text-justify' title="Expertise" description="With a proven track record and deep expertise in AI and automation technologies, we bring industry-leading knowledge to help you achieve your goals." />
                        </Card>
                    </div>
                    <div className="m-5">
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                height:250,
                            }}
                        >
                            <Meta className='text-justify' title="Comprehensive Support" description="Our dedicated customer success and professional services teams are here to assist you every step of the way, from implementation to optimization, ensuring you get the most out of our solutions." />
                        </Card>
                    </div>

                    <div className="m-5">
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                height:250,
                            }}
                        >
                            <Meta className='text-justify' title="Innovative Technology" description="We utilize cutting-edge AI tools and strategies to keep you ahead of the curve. Our continuous investment in innovation ensures you benefit from the latest advancements in technology." />
                        </Card>
                    </div>
                    <div className="m-5">
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                height:250,
                            }}
                        >
                            <Meta className='text-justify' title="Seamless Integration" description="Our solutions are designed for easy integration with your existing systems and workflows, minimizing disruption and ensuring a smooth transition to AI automation." />
                        </Card>
                    </div>
                    <div className="m-5">
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                height:250,
                            }}
                        >
                            <Meta className='text-justify' title="Multilingual Capabilities" description="Support in multiple languages allows you to reach a global audience and provide excellent service to customers around the world." />
                        </Card>
                    </div>
                    <div className="m-5">
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                height:250,
                            }}
                        >
                            <Meta className='text-justify' title="Commitment to Success" description="We are dedicated to helping you achieve and exceed your business goals. Our team works closely with you to understand your objectives and deliver solutions that drive success." />
                        </Card>
                    </div>
                    <div className="m-5">
                        <Card
                            hoverable
                            style={{
                                width: 250,
                                height:250,
                            }}
                        >
                            <Meta className='text-justify' title="Long-Term Partnership" description="Support in multiple languages allows you to reach a global audience and provide excellent service to customers around the world." />
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyUs
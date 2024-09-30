import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

function Whychooseai() {
    return (
        <>
            <div className='whyUs_wrapper'>
                <div className="col-12 text-center">
                    <h1 style={{ fontSize: '54px', fontWeight: '700' }} className='col-12 aibased-headin text-uppercase' >Why Choose Ai Automation?</h1>
                </div>
                <div className="usapart">
                    <div className="m-5">
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                height: 250,
                            }}
                        >
                            <Meta className='text-justify' title="Enhanced Efficiency" description="Streamline processes to save time and resources, allowing your team to focus on more strategic tasks. Automation handles routine inquiries quickly and accurately, reducing wait times and increasing productivity." />
                        </Card>
                    </div>
                    <div className="m-5">
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                height: 250,
                            }}
                        >
                            <Meta className='text-justify' title="24/7 Availability" description="Provide continuous support and assistance around the clock. AI-powered bots are always on, ensuring you get the help whenever you need it, without any downtime." />
                        </Card>
                    </div>
                    <div className="m-5">
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                height: 250,
                            }}
                        >
                            <Meta className='text-justify' title="Cost Reduction" description="Lower operational costs by automating repetitive tasks that would otherwise require extensive human resources. This allows you to allocate your budget more effectively towards growth and innovation." />
                        </Card>
                    </div>
                    <div className="m-5">
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                height: 250,
                            }}
                        >
                            <Meta className='text-justify' title="Improved Accuracy" description="Minimize errors and ensure consistent performance. AI automation reduces the risk of human error, delivering precise and reliable responses every time." />
                        </Card>
                    </div>
                    <div className="m-5">
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                height: 250,
                            }}
                        >
                            <Meta className='text-justify' title="Scalability" description="Easily handle increasing volumes of customer queries without compromising on service quality. AI solutions can scale effortlessly to meet growing demand, adapting to your business needs." />
                        </Card>
                    </div>
                    <div className="m-5">
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                height: 250,
                            }}
                        >
                            <Meta className='text-justify' title="Better Customer Experience" description="Deliver faster and more personalized service, enhancing customer satisfaction and loyalty. Automated systems can quickly access customer data to provide tailored responses." />
                        </Card>
                    </div>
                    <div className="m-5">
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                height: 250,
                            }}
                        >
                            <Meta className='text-justify' title="Empowered Workforce" description="Allow your agents to focus on complex and high-value tasks by offloading routine inquiries to AI. This not only boosts workforce morale but also improves overall service quality." />
                        </Card>
                    </div>
                    <div className="m-5">
                        <Card
                            hoverable
                            style={{
                                width: 250,
                                height: 250,
                            }}
                        >
                            <Meta className='text-justify' title="Data-Driven Insights" description="Gain valuable insights from automated interactions to inform business decisions. AI can analyze and identify trends, preferences, and areas for improvement." />
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whychooseai

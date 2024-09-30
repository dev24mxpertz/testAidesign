import React from "react";
import sideImg from "../../Assets/images/topImg.png";
import WhyChooseUs from "./WhyChooseUs";
import sideImg2 from "../../Assets/images/sideImg2.png";


function aboutus() {
  return (
    <>
      {/* <div className="bg-black mt-9">
        <h1>ABOUT US</h1>
      </div> */}

      <div className="bg-white">
        <div className="main_bg_color">
          <div className="bachground-purple">
            <div className="aboutTopContainer aboutUsDiffContainrt ">
              <div>
                <h1 className=" text-black AboutHeading">ABOUT US</h1>
                <p className="  text-black aboutPara">
                  Welcome to Altus, where innovation meets excellence. We are a
                  dynamic team of professionals dedicated to transforming how
                  businesses operate through cutting-edge technology and
                  unparalleled service. Our mission is to empower organisations
                  with the tools they need to achieve their goals, streamline
                  operations, and gain a sustainable competitive advantage. At
                  Altus, we believe in the power of innovation, our AI-powered
                  solutions are designed to automate tasks, enhance
                  productivity, improve efficiency by leveraging AI and enable
                  your team to focus on what truly matters. With a commitment to
                  excellence, we provide top-tier solutions that are customised
                  to meet the unique needs of each client.
                  <br />
                  <br />
                  We pride ourselves on our customer-centric approach. Our
                  dedicated support team is always ready to assist, ensuring
                  that you get the most out of our products and services. We
                  work closely with our clients to understand their challenges
                  and provide solutions that are both effective and efficient.
                </p>
              </div>
              <div className="sideImg">
                <img src={sideImg} />
              </div>
            </div>
          </div>
        </div>
        {/*================ OUR VISION========================= */}
        <div className="aboutourvision_container bg-white">
          <div className="main_bg_color">
            <div className="bachground-purple">
              <div className="aboutTopContainer ">
                <div>
                  <h1 className=" text-black AboutHeading">OUR VISION</h1>
                  <p className=" text-black aboutPara">
                    Altus' vision is to revolutionise businesses operations and
                    add value with Artificial Intelligence. We aim to empower
                    organisations with AI solutions that enhance efficiency,
                    customer experiences, employee satisfaction and drive
                    sustainable growth. We are committed to leading AI
                    innovation, providing tools and strategies that help
                    businesses thrive in an ever-evolving digital landscape.
                  </p>
                  <img
                    className="sideImg2_image_style"
                    src={sideImg2}
                    alt="sideImg2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <WhyChooseUs />
      </div>
    </>
  );
}

export default aboutus;

//  <div className='bg-white'>
//   <div className='bachground-purple'>
//   <BannerComponent
//       imageUrl={require('../../Assets/images/about-us-bg-section-1.png')}
//       heading={'About Us'}
//     />
//   </div>
//   <div className='about-us-s2'>
//     <div className='about-us-s2-container'>
//       {/* <div className='about-us-s2-container-left '>
//         <img src={require('../../Assets/images/Globe.png')} alt='' />
//       </div> */}
//       <div className='about-us-s2-container-right  '>
//         <div className='align-items-start d-flex flex-column'>
//           <p className='about-us-paragraph-s2 pt-2 pb-2'>Welcome to Altus, where innovation meets excellence. We are a dynamic team of professionals dedicated to transforming the way businesses operate through cutting-edge technology and unparalleled service. Our mission is to empower organisations with the tools they need to achieve their goals, streamline operations, and gain a sustained competitive advantage.
//             At Altus, we believe in the power of innovation. Our suite of AI-powered solutions is designed to automate routine tasks, enhance productivity, and enable your team to focus on what truly matters. With a commitment to excellence, we provide top-tier products and services that are tailored to meet the unique needs of each client.
//             <br/><br/>We pride ourselves on our customer-centric approach. Our dedicated support team is always ready to assist, ensuring that you get the most out of our products and services. We work closely with our clients to understand their challenges and provide solutions that are both effective and efficient.
//             Join us at Altus and discover how we can help your business reach new heights.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div>
//     <Ourvision />
//   </div>
//   <div>

//   </div>
// </div>

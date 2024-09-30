import { Avatar, Rate } from 'antd';
import React from "react";
import Slider from "react-slick";

function Customer() {
  const settings = {
    class: "center",
    dots: false,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out"
  };
  return (
    <>
      <div className='customer'>
        <div>
          <p className='dark_highlighted_head my-4'>Best Ai Business Manage Software</p>
          <h1 className='col-12 aibased-heading'>Trusted by Customers</h1>
          <p className='col-12 col-xxl-5 col-lg-9 col-md-11 description text-center m-0 text-black my-4'>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt labore dolore magna aliquyam erat sed diam voluptua.</p>
          <div>
          </div>
        </div>
        <div className="center">
          <div className="slider-container testimonial-container">
            <Slider {...settings}>
              <div>
                <div className='testimonial-card center'>
                  <div className='testimonial-content'>
                    <Avatar size={80} icon={<img src={require("../../../Assets/images/client-image.png")} alt=''></img>} />
                    <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt labore dolore magna aliquyam erat sed diam voluptua.</p>
                    <h1>John Parker</h1>
                    <h4>Founder/CEO</h4>
                    <Rate disabled defaultValue={5} />
                  </div>
                </div>
              </div>
              <div>
                <div className='testimonial-card center'>
                  <div className='testimonial-content'>
                    <Avatar size={80} icon={<img src={require("../../../Assets/images/spearker_1-300x300.jpg")} alt=''></img>} />
                    <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt labore dolore magna aliquyam erat sed diam voluptua.</p>
                    <h1>Tony Stark</h1>
                    <h4>Finance</h4>
                    <Rate disabled defaultValue={5} />
                  </div>
                </div>
              </div>
              <div>
                <div className='testimonial-card center'>
                  <div className='testimonial-content'>
                    <Avatar size={80} icon={<img src={require("../../../Assets/images/testimonialjpg.webp")} alt=''></img>} />
                    <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt labore dolore magna aliquyam erat sed diam voluptua.</p>
                    <h1>Steave Rozer</h1>
                    <h4>Complince</h4>
                    <Rate disabled defaultValue={5} />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="testimonial-background"></div>
        </div>
      </div>
    </>
  )
}

export default Customer
import React, { useEffect, useRef } from "react";
import newlogo from "../../Assets/newlogo.png";
import herocomp3img from "../../Assets/images/herocomp3img.png";
import lastboximage1 from "../../Assets/lastboximage1.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { duration } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

const HeroComponent = () => {
  // Custom Spell Animation Slide
  const SpellAnimationRefs = useRef([]);
  SpellAnimationRefs.current = [];

  const SpellAnimationRefsaddToRefs = (el) => {
    if (el && !SpellAnimationRefs.current.includes(el)) {
      SpellAnimationRefs.current.push(el);
    }
  };


  useEffect(() => {
    SpellAnimationRefs.current.forEach((slide) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Apply the same animation to all child elements of each slide
      Array.from(slide.children).forEach((child) => {
        tl.fromTo(
          child,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4 }
        );
      });
    });
  }, []);

  //old usseffect

    // const slideRefs = useRef([]);
    // slideRefs.current = [];

    // const addToRefs = (el) => {
    //   if (el && !slideRefs.current.includes(el)) {
    //     slideRefs.current.push(el);
    //   }
    // };

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: SpellAnimationRefs.current[0],
  //       start: "top 75%",
  //       toggleActions: "play none none reverse",
  //     },
  //   });

  //   const firstLineChildren =
  //     SpellAnimationRefs.current[0].querySelector(".margintopclass").children;
  //   const secondLineChildren =
  //     SpellAnimationRefs.current[0].querySelector(".margintopclass2").children;

  //   // Animate the first line
  //   Array.from(firstLineChildren).forEach((child) => {
  //     tl.fromTo(
  //       child,
  //       { y: -20, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 0.4 }
  //     );
  //   });

  //   // Animate the second line after the first line finishes
  //   Array.from(secondLineChildren).forEach((child) => {
  //     tl.fromTo(
  //       child,
  //       { y: -20, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 0.4 },
  //       "-=0.2" // Overlap with a slight delay for smoother transition
  //     );
  //   });

  //   // -----------------------------------------------------------------------------------

  //   slideRefs.current.forEach((slide, index) => {
  //     const [leftPara, centerPara, rightPara, lastPara, verylastPara] =
  //       slide.children;

  //     const t2 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: slide,
  //         start: "top 75%",
  //         toggleActions: "play none none reverse",
  //       },
  //     });

  //     t2.fromTo(
  //       leftPara,
  //       { y: -20, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 0.4 }
  //     )
  //       .fromTo(
  //         centerPara,
  //         { opacity: 0 },
  //         { opacity: 1, duration: 0.8 },
  //         "-=0.5"
  //       )
  //       .fromTo(
  //         rightPara,
  //         { y: 20, opacity: 0 },
  //         { y: 0, opacity: 1, duration: 1.2 },
  //         "-=0.5"
  //       )
  //       .fromTo(
  //         lastPara,
  //         { y: 20, opacity: 0 },
  //         { y: 0, opacity: 1, duration: 1.4 }
  //       )
  //       .fromTo(
  //         verylastPara,
  //         { y: 20, opacity: 0 },
  //         { y: 0, opacity: 1, duration: 1.8 }
  //       );
  //   });

  // }, []);

  // useEffect(() => {
  //   const textElement = textRef.current;

  //   // Create GSAP timeline for looping animation
  //   const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

  //   // Define the animation steps
  //   tl.fromTo(
  //     textElement,
  //     { y: 40, opacity: 0, filter: "blur(5px)", stagger:0.1 }, // Initial state
  //     {
  //       y: 0,
  //       opacity: 1,
  //       filter: "blur(0px)",
  //       duration: 1,
  //       ease: "power3.out",

  //     } // Animation to normal
  //   ).to(
  //     textElement,
  //     {
  //       y: -40,
  //       opacity: 0,
  //       filter: "blur(10px)",
  //       duration: 1,
  //       ease: "power3.in",
  //     } // Animation to disappear
  //   );
  // }, []);

  useGSAP(() => {
    var tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    tl.from(".textItem", {
      y: 50,
      duration: 0.2,
      opacity: 0,

      stagger: 0.3,
    });
    tl.from(".textItem2", {
      y: 50,
      duration: 0.2,
      opacity: 0,

      stagger: 0.3,
    });
    tl.to(".textItem", {
      y: -50,
      duration: 0.1,
      opacity: 0,

      stagger: 0.3,
    });
    tl.to(".textItem2", {
      y: -50,
      duration: 0.1,
      opacity: 0,

      stagger: 0.3,
    });
  });

  const logoRef = useRef();

  const BtnRef = useRef();

  useGSAP(() => {
    gsap.from(logoRef.current, {
      rotate: 360,
      scale: 0.2,

      duration: 1,
    });

    gsap.from(BtnRef.current, {
      y: 50,
      duration: 2,
      opacity: 0,
    });
  });

  // component animation

  const componentOneRef = useRef(null);
  const componentTwoRef = useRef(null);

  useGSAP(() => {
    gsap.from(".HeroComponent_width2", {
      scrollTrigger: {
        trigger: ".HeroComponent_width",
        stop: "top top",

        pin: true,
        pinSpacing: false,
      },
    });

    gsap.from(".HeroComponent_component2_paradiv", {
      scale: 0.2,

      duration: 1,
      scrollTrigger: {
        trigger: ".HeroComponent_component2_paradiv",
        scale: 0.2,
        duration: 1,
      },
    });
  });

  const componentThreeRef = useRef(null);

    useGSAP(() => {
      gsap.from(".HeroComponent_component3", {
        scrollTrigger: {
          trigger: ".HeroComponent_component2_box_main",
          stop: "top top",

          pin: true,
          pinSpacing: false,
        },
      });

    });



  return (
    <div className="HeroComponent_main">
      <div className="HeroComponent_width" ref={componentOneRef}>
        {/* <div className="HeroComponent_component1">
          <div className="margintopclass" ref={SpellAnimationRefsaddToRefs}>
            <span className="HeroComponent_h1">HIRE</span>
            <span className="HeroComponent_h1">CUSTOM</span>
            <span className="orange_color HeroComponent_h1">
              AI WORKFORCE
            </span>{" "}
            <br/>
            <span className="HeroComponent_h1">FOR</span>
            <span className="HeroComponent_h1">YOUR</span>
            <span className="HeroComponent_h1">BUSINESS.</span>
          </div>
          <button className="HeroComponent_button">Ready to connect?</button>
          <img src={newlogo} alt="AILogo" className="HeroComponent_img" />
        </div> */}

        {/* old code */}
        {/* <div
          className="HeroComponent_component1"
          ref={(el) => {
            SpellAnimationRefsaddToRefs(el);
            addToRefs(el);
          }}
        >
         
          <div className="margintopclass">
            <span className="HeroComponent_h1">HIRE</span>
            <span className="HeroComponent_h1">CUSTOM</span>
            <span className="orange_color HeroComponent_h1">AI</span>
            <span className="orange_color HeroComponent_h1">WORKFORCE</span>
          </div>

        
          <div className="margintopclass2">
            <span className="HeroComponent_h1">FOR</span>
            <span className="HeroComponent_h1">YOUR</span>
            <span className="HeroComponent_h1">BUSINESS.</span>
          </div>

          <button className="HeroComponent_button">Ready to connect?</button>
          <img src={newlogo} alt="AILogo" className="HeroComponent_img" />
        </div> */}

        <div className="HeroComponent_component1">
          {/* First line of text */}
          <div className="">
            <div className="margintopclass">
              <span className="HeroComponent_h1 textItem">HIRE</span>
              <span className="HeroComponent_h1 textItem">CUSTOM</span>
              <span className="orange_color HeroComponent_h1 textItem">AI</span>
              <span className="orange_color HeroComponent_h1 textItem">
                WORKFORCE
              </span>
            </div>

            {/* Second line of text */}
            <div className="margintopclass2">
              <span className="HeroComponent_h1 textItem2">FOR</span>
              <span className="HeroComponent_h1 textItem2">YOUR</span>
              <span className="HeroComponent_h1 textItem2">BUSINESS.</span>
            </div>
          </div>

          <button className="HeroComponent_button" ref={BtnRef}>
            Ready to connect?
          </button>

          <img
            src={newlogo}
            alt="AILogo"
            className="HeroComponent_img"
            ref={logoRef}
          />
        </div>
      </div>

      <div
        className="HeroComponent_width2"
        // style={{ height: "1500px" }}
        ref={componentTwoRef}
      >
        {/* <div style={{height:"1500px"}}></div> */}
        <div className="padding_20">
          <div
            className="HeroComponent_component2"
            // style={{ height: "900px" }}
            ref={(el) => {
              SpellAnimationRefsaddToRefs(el);
            }}
          >
            <div className="HeroComponent_component2_paradiv">
              <p>
                Altus provides advanced AI-based solutions tailored to enhance
                both front-end and back-end operations. Our technology empowers
                businesses by reducing workload and boosting productivity
              </p>
            </div>
            <h3 className="HeroComponent_component2_h3 orange_color">
              OUR SERVICES
            </h3>
            <h2 className="HeroComponent_component2_h2">
              EMPOWERING YOUR BUSINESS WITH AI-DRIVEN
              <br />
              EXCELLENCE
            </h2>
            <div className="HeroComponent_component2_box_main">
              <div className="HeroComponent_component2_box1">
                <h3 className="orange_color HeroComponent_component2_box_h3">
                  <i class="bi bi-chevron-double-right"></i>
                  AI FRONTEND SUPPORT
                </h3>
                <p className="HeroComponent_component2_box_p">
                  Automate 80% of support tasks with AI, enhancing customer
                  service across all channels.
                </p>
              </div>
              <div className="HeroComponent_component2_box2">
                <h3 className="orange_color HeroComponent_component2_box_h3">
                  <i class="bi bi-chevron-double-right"></i>AI BACK-END SUPPORT
                </h3>
                <p className="HeroComponent_component2_box_p">
                  Tailored AI solutions to boost your business efficiency and
                  productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={componentThreeRef} className="HeroComponent_component3">
        <div className="padding_20_20" ref={SpellAnimationRefsaddToRefs}>
          <h2 className="HeroComponent_component3_h2">
            CUSTOM <span className="orange_color">AI SOLUTIONS </span>TO
            STREAMLINE BACK-END BUSINESS OPERATIONS
          </h2>
          <p className="HeroComponent_component3_p">
            Our tailored AI solutions optimize back-end processes through
            consultation, development, and ongoing support. Achieve seamless
            integration and long-term operational efficiency
          </p>
          <div className="HeroComponent_component3_box_div">
            <div className="HeroComponent_component3_box_img_div">
              <img src={herocomp3img} alt="heroimgage" />
            </div>
            <div className="HeroComponent_component3_box_content">
              <h3 className="HeroComponent_component3_box_content_h3">
                AI-Driven Customer Support: Transforming Frontend Engagement
              </h3>
              <p className="HeroComponent_component3_box_content_p">
                Automate over 90% of digital customer support with AI tools.
                Deliver efficient, 24/7 service while reducing workload and
                enhancing user experience.
              </p>
              <button className="HeroComponent_component3_box_content_button">
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="HeroComponent_component3_box_div">
            <div className="HeroComponent_component3_box_content">
              <h3 className="HeroComponent_component3_box_content_h3">
                AI-Driven Customer Support: Transforming Frontend Engagement
              </h3>
              <p className="HeroComponent_component3_box_content_p">
                Automate over 90% of digital customer support with AI tools.
                Deliver efficient, 24/7 service while reducing workload and
                enhancing user experience.
              </p>
              <button className="HeroComponent_component3_box_content_button">
                LEARN MORE
              </button>
            </div>
            <div className="HeroComponent_component3_box_img_div">
              <img src={herocomp3img} alt="heroimgage" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="HeroComponent_component4"
        ref={SpellAnimationRefsaddToRefs}
      >
        <div className="HeroComponent_component4_content_div">
          <h1 className="HeroComponent_component4_h1">
            Elevate Efficiency and Growth with{" "}
            <span className="orange_color">Intelligent Solutions</span>
          </h1>
          <p className="HeroComponent_component4_p">
            Streamline operations, reduce costs, and boost productivity with
            Altus solutions. Automate processes to manage growth, foster
            innovation, and maintain high quality, ensuring long-term success
            and a more engaged workforce.
          </p>
        </div>
        <div className="HeroComponent_component4_image_div">
          <img src={lastboximage1} alt="lastboximage1" />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;

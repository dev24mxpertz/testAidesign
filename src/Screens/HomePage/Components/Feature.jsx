import React from "react";

function Feature({ openChat }) {
  return (
    <>
      <div className="Feature-wrapper">
        <div className="col-12 text-center">
          <div className="col-12 d-flex justify-content-center">
            <h1 className="text-center company-personal-ai py-4 text-uppercase">
              Company’s Personal AI{" "}
            </h1>
          </div>

          <div className="col-12 d-flex justify-content-center  my-auto">
            <p className="col-12 col-xxl-8 col-xl-9 col-lg-10 col-md-11 col-md-10 description text-justify  m-0">
              Welcome to Altus, where we offer a suite of innovative AI-based
              services designed to transform the way businesses operate. Our
              cutting-edge technology is tailored to meet the unique needs of
              companies, regardless of their size, providing a digital entity or
              AI employee that efficiently reduces the need for human
              assistance.
            </p>
          </div>
        </div>
        <div className="features_list_container ">
          <div className="mt-5">
            <div>
              <div className="feature-box">
                <div className="features_list_contain">
                  <p className="features_list_head text-uppercase">
                    Efficient Customer Support
                  </p>
                  <p className="features_list_descr my-2">
                    Enhance customer interactions by providing quick and concise
                    assistance. Improve customer service efficiency, ensuring a
                    seamless experience for your clients.
                  </p>
                </div>
              </div>
              <div className="feature-box">
                <div className="features_list_contain">
                  <p className="features_list_head text-uppercase">
                    Scale To New Heights
                  </p>
                  <p className="features_list_descr my-2">
                    Our dedicated Customer Success team and efficient onboarding
                    process ensure you quickly reach your automation goals. But
                    we go beyond that – we are committed to your ongoing
                    success, fostering a lasting partnership with your company.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="feature-box">
                <div className="features_list_contain">
                  <p className="features_list_head text-uppercase">
                    Customisation for Every Company
                  </p>
                  <p className="features_list_descr my-2">
                    Tailor our AI-based software for the unique requirements of
                    your business. Enjoy a personalised and effective digital
                    experience that aligns with your company's goals.
                  </p>
                </div>
              </div>
              <div className="feature-box">
                <div className="features_list_contain">
                  <p className="features_list_head text-uppercase">
                    Employee Customisation
                  </p>
                  <p className="features_list_descr my-2">
                    Customise the software to serve as an additional employee,
                    alleviating workloads and increasing overall efficiency.
                    Delegate specific tasks to the AI employee, allowing your
                    team to focus on more strategic responsibilities.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="feature-box">
                <div className="features_list_contain">
                  <p className="features_list_head text-uppercase">
                    Boost Your Success
                  </p>
                  <p className="features_list_descr my-2">
                    Begin automating within minutes with Pinnacle, and leverage
                    our intuitive, no-code Dialogue builder to address more
                    complex scenarios. Our Customer success and professional
                    services teams are here to assist in optimising your bot,
                    designing and creating custom integrations, and offering
                    strategic support for your expansion into new regions and
                    markets.
                  </p>
                </div>
              </div>
              <div className="feature-box">
                <div className="features_list_contain">
                  <p className="features_list_head text-uppercase">
                    Maximise Result With Overhead
                  </p>
                  <p className="features_list_descr my-2">
                    AI agents go beyond automating your support; they enhance
                    customer experience, increase loyalty, and generate direct
                    revenue. By automating 80% of use cases end-to-end, you free
                    up your team to handle more complex queries, resulting in a
                    solution that offers substantial returns.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div style={{ maxWidth: "100%" }} className="feature-box">
                <div className="features_list_contain">
                  <p className="features_list_head text-uppercase">
                    Altus In Action
                  </p>
                  <p
                    style={{ maxWidth: "1080px" }}
                    className="features_list_descr my-2"
                  >
                    Customise the software to serve as an additional employee,
                    alleviating workloads and increasing overall efficiency.
                    Delegate specific tasks to the AI employee, allowing your
                    team to focus on more strategic responsibilities.
                  </p>
                  <button
                    onClick={openChat}
                    className="slider-btn-learnmore text-decoration-none fs-6"
                  >
                    Trail
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;

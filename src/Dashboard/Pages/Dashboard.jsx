import React from "react";
import ChartInfo from "../Components/ChartInfo";
import ProgressBar from "../Components/Charts/ProgressBar";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function NumberCard({
  title,
  number,
  percentage,
  indecator,
  subscriptioncount,
}) {
  return (
    <div className="number-card col-11 col-lg-2 col-md-5">
      <div className=" bg-transparent">
        <h2 className="">{title}</h2>
        <h5 className="">{number}</h5>
        <div className="col-12 d-flex justify-content-start align-items-center">
          <img className="d-block img-fluid" src={indecator} alt="" />
          <p className="px-2">{percentage}</p>
        </div>
      </div>
    </div>
  );
}

const Dashboard = () => {
  const [subscriptioncount, setSubscriptionCount] = useState(0);

  // useEffect(() => {
  //     const fetchsubscription = async () => {
  //         try {
  //             const response = await axios.get("http://localhost:3000/getsubscriptions");
  //             setSubscriptionCount(response.data.length);
  //         } catch (error) {
  //             console.error("unable to fetch subscriptions");
  //         }
  //     }

  //     fetchsubscription(); // Call the fetchsubscription function here

  // }, []);

  const numbers = [
    {
      title: "New Subscribers",
      number: subscriptioncount,
      percentage: "+4454%",
      indecator: require("../../Assets/images/element13.png"),
    },
    {
      title: "New Subscribers",
      number: subscriptioncount,
      percentage: "+44.54%",
      indecator: require("../../Assets/images/element13.png"),
    },
    {
      title: "New Subscribers",
      number: subscriptioncount,
      percentage: "+44.54%",
      indecator: require("../../Assets/images/element13.png"),
    },
    {
      title: "New Subscribers",
      number: subscriptioncount,
      percentage: "+44.54%",
      indecator: require("../../Assets/images/element13.png"),
    },
  ];

  return (
    <>
      <div className="dash_head_wrapper col-12 col-xxl-11 col-xl-11 col-lg-12 mx-auto my-3 px-2">
        <div className="col-12">
          {numbers.map((number, index) => (
            <NumberCard
              key={index}
              {...number}
              subscriptioncount={subscriptioncount}
            />
          ))}
        </div>
      </div>

      <div className="chart-section-wrapper col-12 col-xxl-11 col-xl-11 col-lg-12 mx-auto my-5 px-2">
        <ChartInfo />

        <ProgressBar />
      </div>

      <div className="col-12 col-xxl-11 col-xl-11 col-lg-12 mx-auto my-5 px-2">
        {/* <PopularEpisodes /> */}
      </div>
    </>
  );
};

export default Dashboard;

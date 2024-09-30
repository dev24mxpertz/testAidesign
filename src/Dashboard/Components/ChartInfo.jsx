import React from "react";
import LineChart from "./Charts/LineChart";
import PopularEpisodes from "./Charts/ListOfPodcast";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function ChartInfo() {
  const [subscriptioncount, setsubscriptioncount] = useState(0);

  //    useEffect(() => {
  //   const fetchsubscription = async ()=>{

  //     try {
  //         const response = await axios.get("http://localhost:3000/getsubscriptions");
  //        setsubscriptioncount(response.data.length)
  //     } catch (error) {
  //         console.error("failed to fetch subscriptions")
  //     }
  //   }
  //   fetchsubscription();

  //    }, [])

  return (
    <>
      <div className="col-12 col-xxl-9 col-lg-7 pe-md-5">
        <div className="number-card col-11 col-lg-3 col-md-5 my-4 p-0">
          <div className=" bg-transparent">
            <h2 className="">Audience</h2>
            <h5 className="my-2">{subscriptioncount}</h5>
            <div className="col-12 d-flex justify-content-start align-items-center">
              <img
                className="d-block img-fluid"
                src={require("../../Assets/images/element13.png")}
                alt=""
              />
              <p className="px-2">
                +44.54%<span className="text-whit"> For Last 7 days</span>
              </p>
            </div>
          </div>
        </div>
        <div className="my-5 " style={{ height: "200px" }}>
          <LineChart />
        </div>
        <div>
          <PopularEpisodes />
        </div>
      </div>
    </>
  );
}
export default ChartInfo;

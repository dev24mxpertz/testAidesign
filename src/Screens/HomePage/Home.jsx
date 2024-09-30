import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import AiBased from "./Components/AiBased";
import Creater from "./Components/Creater";
import Feature from "./Components/Feature";
import GetInTouch from "./Components/GetInTouch";
import ManageSoftware from "./Components/ManageSoftware";
import NewsLetter from "./Components/NewsLetter";
import Slider from "./Components/Slider";
import FloatingButton from "./Components/FloatingChatButton";
import HeaderHome from "./Components/HeaderHome";
import AdvantageSlide from "./Components/AdvantageSlide";
import "../../Styles/HeroPage.css";
import HeroComponent from "../../Dashboard/Pages/HeroComponent";

function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => {
    setIsChatOpen(true);
  };
  return (
    <>
      <div>
        {/* <HeaderHome /> */}
        {/* <AdvantageSlide /> */}
        {/* -------------------------------------- */}
        <HeroComponent />
      </div>
      {/* <FloatingButton isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} /> */}
    </>
  );
}

export default Home;

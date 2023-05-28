import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import AboutStaff from "./scenes/About/AboutStaff";
import AboutMission from "./scenes/About/AboutMission";
import AboutHistory from "./scenes/About/AboutHistory";
import Carousel from "./scenes/Carousel";
import History from "./scenes/History";
import Mission from "./scenes/Mission";
import Staff from "./scenes/Staff";

import { motion } from "framer-motion";
import LineGradient from "./hooks/LineGradient";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Footer from "./scenes/Footer";



function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const slides = [
     "assets/photos/slide2.jpg",
     "assets/photos/slide3.jpg",
     "assets/photos/slide4.jpg",
     "assets/photos/slide5.jpg",
     "assets/photos/slide6.jpg",
     "assets/photos/slide7.jpg",
     "assets/photos/slide8.jpg",
  ]

  return (
    <div className="app bg-deep-blue">
      <Navbar 
        selectedPage={selectedPage} setSelectedPage={setSelectedPage}
      />
      <Landing setSelectedPage={setSelectedPage} />
      <div className="text-5xl font-playfair z-10 text-center pt-5">
        About Us
      </div>
      <div className="w-5/6 mx-auto h-[65%] xs:mt-2">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("about")}
        >
          <AboutStaff />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-[90%] mx-auto h-[60%] xs:mt-2">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("about")}
        >
          <AboutHistory />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto h-[65%] xs:mt-2">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("about")}
        >
          <AboutMission />
        </motion.div>
      </div>

      <LineGradient />
      <div className="py-10 w-[70%]  mx-auto" >
        <Carousel>
          {[
            ...slides.map((s) =>
            <img src={s}/>)
          ]}
        </Carousel>
      </div>

      <LineGradient />
      <div  className="w-[90%] mx-auto xs:mt-2">
        <History 
          selectedPage={selectedPage} setSelectedPage={setSelectedPage}
        />
      </div>


      <LineGradient />    
      <div className="">
      <Mission 
          selectedPage={selectedPage} setSelectedPage={setSelectedPage}
        />
      </div>

      <LineGradient />    
      <div className="">
      <Staff 
          selectedPage={selectedPage} setSelectedPage={setSelectedPage}
        />
      </div>

      <LineGradient />
      <div  className="my-10 pb-12">
        <Footer 
          selectedPage={selectedPage} setSelectedPage={setSelectedPage}
        />
      </div>
    </div>
  );
}

export default App;

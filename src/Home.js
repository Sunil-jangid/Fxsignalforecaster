import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import Middle from "./Middle";
import ParticlesBackground from "./componets/ParticlesBackground";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <ParticlesBackground />
      <Navbar />
      <div className="Middlecontent">
        <Middle />
        <div className="Testimonial">
        <Testimonial />
        <div className="cardss" style={{backgroundColor:"white"}}>
        
          <div className="row">
            <div className="col-lg-8 col-sm-12" style={{ paddingLeft: "7%", paddingTop: "3%" }}>
              <p>Ready to get started?</p>
              <p>Want our  service Subscribe now</p>
            </div>
            <div className="col-lg-4" style={{paddingLeft:"8%" ,paddingRight: "7%",paddingTop:"5%",paddingBottom:"5%"}}>
             <a  href="https://api.whatsapp.com/send?phone=8296767533" 
                target="_blank"><button className="btn btn-outline-primary">GET STARTED</button></a> 
            </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

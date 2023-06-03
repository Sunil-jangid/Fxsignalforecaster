import React from "react";
import "./footer.css"
function Footer() {
    return (
        <div className="over" style={{ position: "relative" }}>
            <div className="footer row">
                <div className="col-lg-3 col-sm-6 mar" style={{paddingTop:"12%"}}>
                    <p>ForexSignals</p>
                    <p>Feel Free to contact and get information about Us</p>
                </div>
                <div className="col-lg-3 col-sm-6 mar"  style={{paddingTop:"12%"}}>
                    <p>Subscribe to get important updates</p>
                   <a href="https://api.whatsapp.com/send?phone=8296767533" ta
                target="_blank"> <button className="btn btn-outline-primary">GET STARTED</button></a>
                </div>
                <div className="col-lg-3 col-sm-6 mar" style={{paddingTop:"12%"}}>
                    <p>Follow Us</p>
                 <a href="https://instagram.com/fxsignalforecaster?igshid=MzRlODBiNWFlZA=="   target="_blank">  <img src="https://cdn-icons-png.flaticon.com/128/747/747562.png" /></a> 
                 <a href="https://www.facebook.com/profile.php?id=100093315330659"   target="_blank"> <img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" /></a>
                </div>
                <div className="col-lg-3 col-sm-6 mar"  style={{paddingTop:"12%"}}>
                    <p>Contact Us</p>
                    <p>+918296767533</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;
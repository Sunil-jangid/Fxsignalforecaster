import React from "react";
import "./Middle.css";
import bitcoin1 from "./bitcoin1.png";
import information from "./information.png";
import picture from "./picture.jpg";

function Middle() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div className="row my-4 rowji" id="home">
        <div className="col-lg-7">
          <h1>Unlock Your Trading Potential with Highly Accurate Forex Signals</h1>
          <p>
            At Fxsignalforecaster.com, we understand the challenges that traders face in the dynamic and ever-changing
            forex market. That's why we have created a comprehensive platform that equips traders with the tools and
            expertise they need to succeed.
          </p>
          <a   href="https://api.whatsapp.com/send?phone=8296767533" 
                target="_blank"><button className="btn btn-outline-warning">GET STARTED</button></a>
        </div>
        <div className="col-sm" style={{ textAlign: "center" }}>
          <img className="bitcoin rounded img-fluid" src={bitcoin1} alt="Bitcoin" />
        </div>
      </div>
      <div className="row my-4 rowji" id="about">
        <div className="col-lg-4" style={{ textAlign: "center" }}>
          <img className="about img-fluid" src={picture} alt="About" />
        </div>
        <div className="col-lg" >
          <h1>
            About <img src={information} alt="Information" />
          </h1>
          <p>
            We understand that Forex trading can be a challenging and often intimidating experience – which is why we
            believe in providing you with the tools and support you need to succeed, without asking you to pay until you
            start seeing results. With our free trial, you can experience our programs firsthand and see the results for
            yourself before committing to a subscription.
          </p>
        </div>
      </div>
      <div className="row my-4 rowji">
        <div className="col-lg" id="services" style={{ textAlign: "center" }}>
          <h1>Services</h1>
          <h3 className="per" style={{ marginTop: "5%" }}>
            Premium Signals <img src="https://cdn-icons-png.flaticon.com/128/10474/10474069.png" alt="Premium Signals" />
          </h3>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-lg">
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">PROGRAM</th>
                  <th scope="col">DESCRIPTION</th>
                  <th scope="col">FEES</th>
                  <th scope="col">INVESTMENT REQUIRED</th>
                  <th scope="col">FREE TRIAL OFFER</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PREMIUM SIGNALS  FOR 1 MONTH</td>
                  <td>RECEIVE 3-4 SIGNALS DAILY WITH AN ACCURACY MORE THAN 90%</td>
                  <td>$99 PER MONTH</td>
                  <td>$155</td>
                  <td>3 DAY FREE TRIAL WITH A MINIMUM INVESTMENT OF $35.</td>
                </tr>
                <tr>
                  <td>PERMIUM SIGNAL FOR 3 MONTH</td>
                  <td>RECEIVE 3-4 SIGNALS DAILY WITH AN ACCURACY MORE THAN 90%</td>
                  <td>$249 FOR 3 MONTH</td>
                  <td>$155</td>
                  <td>4 DAY FREE TRIAL WITH A MINIMUM INVESTMENT OF $35.</td>
                </tr>
                <tr>
                  <td>PERMIUM SIGNAL FOR 6 MONTH</td>
                  <td>RECEIVE 4-5 SIGNALS DAILY WITH AN ACCURACY MORE THAN 90%</td>
                  <td>$499 FOR 6 MONTH</td>
                  <td>$155</td>
                  <td>5 DAY FREE TRIAL WITH A MINIMUM INVESTMENT OF $35.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="pricing-info">
            AT FX signal forecaster, we believe in transparency when it comes to our pricing and fees. Our Premium
            Signals are available for a monthly subscription fee of $99, with a minimum investment of $155. With our
            free 3-day trial, you can try our Premium Signals with a minimum investment of just $35.
          </p>
        </div>
      </div>
    </div>
  );
  
}

export default Middle;

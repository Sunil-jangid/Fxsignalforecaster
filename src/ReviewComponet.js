import React from "react";  
function ReviewComponent(props) {
  return (
    <div className="col-md-4" style={{textAlign : "center",marginBottom:"6%",marginTop:"5%"}}>
        <img key={props.key} src={props.src} style={{height:"430px",width:"250px"}}></img>
    </div>
  );
}
export default ReviewComponent;

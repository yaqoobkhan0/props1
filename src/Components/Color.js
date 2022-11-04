import React from "react";

function Color(props) {
  return (
    <div className="main">
      <div className="cards" style={{ backgroundColor: props.code }}>
        <div className="title">
          <h6>{props.title}</h6>
          <p>{props.color}</p>
        </div>
      </div>

     
    </div>
  );
  }

export default Color;
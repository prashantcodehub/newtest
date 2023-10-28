import React from "react";
import "./CardOrList.css";
const Cardorlist = () => {
  let cardStyleobj = {
    a: "52",
  };
  console.log("before function " + cardStyleobj.a);

  const buttonStyle = (CL) => {
    // let viewTypeButton_card = document.getElementsByClassName("card-button");
    // let A = document.getElementsByClassName("card-button");
    // A.style.borderColor = "green";
    cardStyleobj = {
      a: "66",
    };

    console.log("in the function " + cardStyleobj.a);
  };

  console.log("after function is writen" + cardStyleobj.a);
  return (
    <div className="Cardorlist-contaner">
      <div>
        <button
          className="card-button"
          // style={cardStyleobj}
          onClick={() => {
            buttonStyle("card-button");
          }}
        >
          Card
        </button>
        <span className="cardButtonBottemBoerder"></span>
      </div>
      <div>
        <button
          className="list-button"
          onClick={() => {
            buttonStyle("list-button");
          }}
        >
          {" "}
          List{" "}
        </button>
        <span className="listButtonBottemBoerder"></span>
      </div>
    </div>
  );
};

export default Cardorlist;

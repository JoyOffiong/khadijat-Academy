import React from "react";
import GreenTick from "../../Assets/mdi_tick-circle.png";

function AcctCreated() {
  return (
    <div className="w-3/4 mx-auto text-center mt-10 ">
      <div className="w-2/4 mx-auto text-center">

        <div className="text-center w-1/4 mx-auto">
            
          <img src={GreenTick} alt="" />
        </div>

        <div className="text-center">
          <h3 className="text-2xl pb-5 w-4/5 mx-auto mt-5">
            You have Succcessfully Created an{" "}
            <span className="text-blue">Account</span>{" "}
          </h3>
          <p>Hurray you have just created an account wiith Khadijat Academy</p>
        </div>

        <button className="button">
          Proceed to checkout
        </button>

      </div>
    </div>
  );
}

export default AcctCreated;

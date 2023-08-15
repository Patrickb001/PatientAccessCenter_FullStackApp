import React from "react";
import loading from "../../assets/loading.svg";

import "./Loading.css";

const Loading = () => (
  <div className="spinner d-flex justify-content-around ">
    <img src={loading} alt="Loading" />
  </div>
);

export default Loading;

import React from "react";

import { LoginButton } from "../index";

import "./Login.css";
import Image from "../../assets/cdc-sSVSWMa035g-unsplash.jpg";

function Login() {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className=" h1 mb-5">Welcome to Patient Docs</div>
            <div className="col-9 display-6 font-size-sm">
              Effortlessly manage patient data with Patient Docs. Our platform
              ensures secure access to medical histories, treatment plans, and
              more, all in one place. Streamline workflows, enhance patient
              care, and save valuable time
            </div>
            <div className="col-10 mt-3 display-6 font-size-sm">
              Join us in revolutionizing patient info management. Whether you're
              a solo practioner or bustling a hospital, Patient Docs caters to
              your needs.
            </div>
            <div className="col-11 mt-3 display-6 font-size-sm">
              Choose smarter healthcare. Sign up today or contact support for
              details.
            </div>
            <div className="mt-3">
              <LoginButton size="lg" />
            </div>
          </div>
        </div>
        <div className="col">
          <img
            className="clip-path"
            src={Image}
            style={{ width: "450px", height: "450px", borderRadius: "5px" }}
            alt="cdc-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LoginButton = ({ size }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      onClick={() => loginWithRedirect()}
      id="qsLoginBtn"
      variant="primary"
      className="btn-margin"
      size={size ? size : "sm"}
    >
      Log In
    </Button>
  );
};

export default LoginButton;

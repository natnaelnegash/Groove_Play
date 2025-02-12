import React from "react";
import { Link } from "react-router";
import { loginEndpoint } from "../../../spotify";
import Button from "../../components/Button";

const Login = () => {
  return (
    <div className="login">
      <a href={loginEndpoint}>Login</a>
    </div>
  );
};

export default Login;

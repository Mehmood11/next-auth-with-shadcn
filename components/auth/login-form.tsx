import React from "react";
import { CardWrapper } from "./card-wrapper";

const LoginForm = () => {
  return (
    <div>
      <CardWrapper
        headerLabel="Welcome back"
        backButtonLabel="Dont have an account?"
        backButtonRef="/auth/register"
        showSocial
      >
        Login Form
      </CardWrapper>
    </div>
  );
};

export default LoginForm;

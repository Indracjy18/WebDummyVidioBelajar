import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import InputForm from "./Elements/Input/Index";
import Button from "./Elements/Button";
import FormLogin from "./Fragments/Form/FormLogin";
import AuthLayouts from "./Layouts/AuthLayouts";
import LoginPage from "../Pages/login";
import RegisterPage from "../Pages/register";

const App = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <RegisterPage />
    </div>
  );
};

export default App;

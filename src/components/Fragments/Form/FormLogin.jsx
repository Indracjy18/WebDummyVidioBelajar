import React, { useState, useRef } from "react";
import InputForm from "../../Elements/Input/Index";
import Button from "../../Elements/Button";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import ErrorPage from "../../../Pages/Error";

const FormLogin = () => {
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      <InputForm
        type="email"
        placeholder="Masukkan email anda..."
        name="email"
        value={inputs.email || ""}
        labelAttr={{ htmlFor: "gacor" }}
        onChange={handleChange}
        minLength={4}
      >
        Email <span className="text-red-600">* </span>
      </InputForm>

      <InputForm
        type={isPasswordVisible ? "text" : "password"}
        placeholder="**************"
        name="password"
        value={inputs.password || ""}
        onChange={handleChange}
        toggleVisibility={togglePasswordVisibility}
        isPasswordVisible={isPasswordVisible}
      >
        Kata Sandi
        <span className="text-red-600 font-dm-sans font-medium text-base leading-5">
          *
        </span>
      </InputForm>
      <span className="text-end">
        <Link to="/error">Lupa Password?</Link>
      </span>

      <Button classname="bg-primary-500" type="submit">
        <Link to="/beranda">Masuk</Link>
      </Button>
      <Button
        type="button"
        classname="bg-primary-200 font-dm-sans font-bold text-primary-500"
      >
        <Link to="/register">Daftar</Link>
      </Button>
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500 font-dm-sans text-normal leading-5">
          atau
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <Button classname="text-black font-bold flex items-center justify-center">
        <img
          src="./img/google-icon.png"
          className="w-5 h-5 mr-2"
          alt="Google"
        />
        <span className="text-black">Masuk Dengan Google</span>
      </Button>
    </form>
  );
};

export default FormLogin;

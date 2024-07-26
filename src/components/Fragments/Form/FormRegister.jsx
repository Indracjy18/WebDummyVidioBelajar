import React, { useState } from "react";
import InputForm from "../../Elements/Input/Index";
import Button from "../../Elements/Button";

const FormRegister = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    phoneNumber: "",
  });

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
        type="text"
        placeholder="Masukkan nama lengkap anda..."
        name="name"
        value={inputs.name}
        labelAttr={{ htmlFor: "name" }}
        onChange={handleChange}
      >
        Nama Lengkap <span className="text-red-600">* </span>
      </InputForm>

      <InputForm
        type="text"
        placeholder="Masukkan email anda..."
        name="email"
        value={inputs.email}
        labelAttr={{ htmlFor: "email" }}
        onChange={handleChange}
        minLength={4}
      >
        Email <span className="text-red-600">* </span>
      </InputForm>
      <div className="flex flex-col gap-2">
        <label htmlFor="gender" className="font-medium">
          Jenis Kelamin <span className="text-red-600">*</span>
        </label>
        <select
          name="gender"
          value={inputs.gender}
          onChange={handleChange}
          className="border rounded px-2 py-1"
        >
          <option value="">Pilih Jenis Kelamin</option>
          <option value="male">Pria</option>
          <option value="female">Wanita</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="font-medium">
          Nomor HP <span className="text-red-600">*</span>
        </label>
        <div className="flex gap-2 items-center">
          <div className="flex items-center border rounded px-2 py-1">
            <img src="./img/idn.png" alt="Indonesia" className="w-6 h-4 mr-2" />
            <span>+62</span>
          </div>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Masukkan nomor HP..."
            value={inputs.phoneNumber}
            onChange={handleChange}
            className="border rounded px-2 py-1 flex-grow"
          />
        </div>
      </div>
      <InputForm
        type={isPasswordVisible ? "text" : "password"}
        placeholder="**************"
        name="password"
        value={inputs.password}
        onChange={handleChange}
        toggleVisibility={togglePasswordVisibility}
        isPasswordVisible={isPasswordVisible}
      >
        Kata Sandi
        <span className="text-red-600 font-dm-sans font-medium text-base leading-5">
          *
        </span>
      </InputForm>
      <InputForm
        type={isPasswordVisible ? "text" : "password"}
        placeholder="**************"
        name="password"
        value={inputs.password}
        onChange={handleChange}
        toggleVisibility={togglePasswordVisibility}
        isPasswordVisible={isPasswordVisible}
      >
        Konfirmasi Kata Sandi
        <span className="text-red-600 font-dm-sans font-medium text-base leading-5">
          *
        </span>
      </InputForm>

      <Button classname="bg-primary-500" type="submit">
        Daftar
      </Button>
      <Button
        type="button"
        classname="bg-primary-200 font-dm-sans font-bold text-primary-500"
      >
        Masuk
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

export default FormRegister;

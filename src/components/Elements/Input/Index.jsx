import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const {
    children,
    toggleVisibility,
    isPasswordVisible,
    labelAttr,
    ...properties
  } = props;

  return (
    <div className="relative">
      <Label {...labelAttr} className="block text-gray-700 mb-2">
        {children}
      </Label>
      <div className="relative">
        <Input
          {...properties}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
        />
        {props.name === "password" && (
          <span
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={toggleVisibility}
          >
            {isPasswordVisible ? (
              <AiOutlineEyeInvisible className="w-5 h-5 text-gray-700" />
            ) : (
              <AiOutlineEye className="w-5 h-5 text-gray-700" />
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputForm;

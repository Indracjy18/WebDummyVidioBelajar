import React from "react";
import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <img src="./img/lol.png" className=" h-72" />
    </div>
  );
};

export default ErrorPage;

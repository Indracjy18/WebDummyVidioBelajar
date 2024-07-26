import React from "react";
import FormLogin from "../Fragments/Form/FormLogin";

const AuthLayouts = (props) => {
  const { children, title, text } = props;
  return (
    <>
      <div className="flex flex-col justify-center min-h-screen">
        <nav className="bg-white w-full border shadow-md px-3 md:px-6 lg:px-24 py-1 flex items-center">
          <div className="p-4 relativ top-3 left-5">
            <img src="/img/image.png" alt="Logo" className="h-auto w-1/2" />
          </div>
        </nav>
        <div className="flex-grow flex justify-center items-center px-4">
          <div className="bg-white flex flex-col w-full max-w-lg p-8 rounded-4 border gap-8">
            <section className="flex flex-col gap-2">
              <h1 className="font-bold text-2xl text-center text-slate-900">
                {title}
              </h1>
              <p className="text-slate-400 text-center">{text}</p>
              {children}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayouts;

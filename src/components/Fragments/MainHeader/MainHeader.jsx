import React from "react";
import Button from "../../Elements/Button";

const MainHeader = (props) => {
  const { children } = props;
  return (
    <main className="mx-32 mt-16 gap-6 h-auto ">
      <section className="bg-hero-pattern border text-center rounded-lg">
        <div className="px-36 pt-16">{children}</div>
      </section>
    </main>
  );
};

export default MainHeader;

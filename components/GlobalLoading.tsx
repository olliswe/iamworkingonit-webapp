import React from "react";
import Typical from "react-typical";

const GlobalLoading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center text-7xl font-logo">
      <div className="w-56">
        <Typical
          steps={["ON IT...", 1000, "", 500]}
          loop={Infinity}
          wrapper="h1"
        />
      </div>
    </div>
  );
};

export default GlobalLoading;

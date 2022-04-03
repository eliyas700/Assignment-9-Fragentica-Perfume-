import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="grid grid-cols-[3fr,1fr]">
        <div className="mt-4">
          <h1 className="text-center ">
            <span className="text-5xl font-serif font-bold ">
              {" "}
              Feel Extraordinary
            </span>
            <p className="text-4xl font-bold font-serif">with</p>
            <img
              className="mx-auto"
              src="https://fimgs.net/mdimg/dizajneri/o.83.jpg"
              alt=""
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Explore Now
            </button>
          </h1>
        </div>
        <div>
          <img src="https://fimgs.net/mdimg/perfume/375x500.69011.jpg" alt="" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HomePage;

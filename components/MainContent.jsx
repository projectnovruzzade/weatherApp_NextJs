import React from "react";

const MainContent = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.cod == "404" ? (
        <h1 className="text-center text-4xl text-red-600 mt-3 pr-2">Country is not defined !</h1>
      ) : (
        <div className="main-content-wrapper flex flex-col mt-7">
          <div className="country-name-title">
            <i>Country name: </i> <b className="text-2xl">{data?.name}</b>
          </div>
          <div className="country-small-data">
            <i>Country weather is: </i>{" "}
            <b className="text-xl">{data?.weather[0]?.main}</b>

          </div>
          <div className="country-desc-data">
            <i>Country description is: </i>{" "}
            <b className="text-xl">{data?.weather[0]?.description}</b>
          </div>
          <div className="country-current-temp">
            <h1 className="text-3xl font-semibold">
              {Math.floor(parseInt(data?.main?.temp))}°
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default MainContent;

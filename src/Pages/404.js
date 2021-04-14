import React from "react";
import Button from "../Components/Button/Button";

const PageNotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-200 text-center px-3">
      <div className="bg-white md:px-20 py-5 px-10">
        <div className="flex justify-center">
          <svg
            className="w-20 h-20"
            fill="#ED2939"
            stroke="#fff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-7xl lg:text-9xl font-medium">
          404
        </h1>
        <p className="pt-5 pb-6 md:text-2xl font-normal">
          Error occurred! - File not found
        </p>

        <Button type="primary" as="link" to="/">
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;

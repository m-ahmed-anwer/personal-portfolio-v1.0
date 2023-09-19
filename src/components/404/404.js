import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation-Animation/Navigation";

function NotFound() {
  const handleGoBack = () => {
    window.history.back(); // This will go back one step in the browser history
  };

  return (
    <>
      <Navigation />
      <div className="w-full">
        <div className="h-screen">
          <div className="w-4/4 flex items-center justify-center my-20 ">
            <div className="rounded-lg shadow-xl bg-gray-900 text-white md:w-3/4 mx-4  ">
              <div className="border-b border-gray-800 px-8 py-3">
                <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
                <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
                <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
              </div>
              <div className="px-8 py-6 ">
                <p>
                  <em className="text-blue-400">const</em>{" "}
                  <span className="text-green-400">error-404</span>{" "}
                  <span className="text-pink-500">=</span>{" "}
                  <em className="text-blue-400">function</em>() {"{"}
                </p>
                <p>
                  &nbsp;&nbsp;<span className="text-pink-500">return</span>{" "}
                  {"{"}
                </p>

                <p className="my-2">
                  &nbsp;&nbsp;&nbsp;&nbsp;home:{" "}
                  <span className="text-yellow-300 text-lg">
                    '
                    <Link
                      to="/"
                      className="text-yellow-300 text-lg hover:underline focus:border-none"
                    >
                      https://ahmed-anwer.netlify.app
                    </Link>
                    '
                  </span>
                  ,
                </p>
                <p className="my-2">
                  &nbsp;&nbsp;&nbsp;&nbsp;oneStepBack:{" "}
                  <span className="text-yellow-300 text-lg">
                    '
                    <span
                      onClick={handleGoBack}
                      className="cursor-pointer text-yellow-300 text-lg hover:underline focus:border-none"
                    >
                      goback
                    </span>
                    '
                  </span>
                  ,
                </p>

                <p>&nbsp;&nbsp;{"}"}</p>
                <p>{"}"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;

import React from "react";
import image1 from "../../image/Picture1.png";
import image2 from "../../image/Picture2.png";
import image3 from "../../image/Picture3.png";
import image4 from "../../image/Picture4.png";

import Navigation from "../../components/Navigation-Animation/Navigation";

function Blogs() {
  return (
    <>
      <Navigation />
      <div className="w-full">
        <div className="">
          <div className="w-4/4  flex items-center justify-center my-20 ">
            <div className="rounded-lg shadow-xl bg-gray-900 text-white md:w-3/4 mx-4 ">
              <div className="border-b border-gray-800 px-8 py-3">
                <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
                <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
                <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
              </div>
              <div className="px-8 py-6 ">
                <p>
                  <em className="text-blue-400">const</em>{" "}
                  <span className="text-green-400">myBlogs</span>{" "}
                  <span className="text-pink-500">=</span>{" "}
                  <em className="text-blue-400">function</em>() {"{"}
                </p>
                <p>
                  &nbsp;&nbsp;<span className="text-pink-500">return</span>{" "}
                  {"{"}
                </p>
                <div className="my-2">
                  &nbsp;&nbsp;&nbsp;&nbsp;food-festival:{" ["}
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}</p>
                  <p className="flex">
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gallery:
                    <span className="group ">
                      <img
                        src={image1}
                        height={250}
                        width={250}
                        className="rounded-lg m-4 flex justify-center"
                        alt="profile1"
                      />
                      <img
                        src={image2}
                        height={250}
                        width={250}
                        className="rounded-lg m-4 flex justify-center"
                        alt="profile2"
                      />
                      <img
                        src={image3}
                        height={250}
                        width={250}
                        className="rounded-lg m-4  flex justify-center"
                        alt="profile3"
                      />
                      <img
                        src={image4}
                        height={250}
                        width={250}
                        className="rounded-lg m-4 flex justify-center"
                        alt="profile4"
                      />
                    </span>
                    {","}
                  </p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"},"}</p>
                </div>

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

export default Blogs;

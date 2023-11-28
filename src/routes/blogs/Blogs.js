import React from "react";
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
                  &nbsp;&nbsp;&nbsp;&nbsp;technologies:{" ["}
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}</p>
                  <p>
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;languages:
                    {" ["}
                    <span className="text-yellow-300 ">
                      {"'JavaScript', 'Java', 'PHP', 'CSS/SCSS', 'SQL', 'HTML'"}
                    </span>
                    {"],"}
                  </p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"},"}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}</p>
                  <p>
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;libraries/frameworks:
                    {" ["}
                    <span className="text-yellow-300 ">
                      {
                        "'React.js', 'node.js', 'express.js', 'React-Native', 'Tailwind', 'Bootstrap', 'jQuery'"
                      }
                    </span>
                    {"],"}
                  </p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"},"}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}</p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;other:
                    {" ["}
                    <span className="text-yellow-300 ">
                      {
                        "'Git', 'Figma', 'Firebase', 'Docker', 'Android Studio', 'Azure Data Studio'"
                      }
                    </span>
                    {"],"}
                  </p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"},"}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"]"}</p>
                </div>
                <div className="my-2">
                  &nbsp;&nbsp;&nbsp;&nbsp;services:{" ["}
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}</p>
                  <p>
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;web-development:
                    <span className="text-yellow-300 ">
                      {
                        " 'Build highly responsive web applications using the most advanced and cutting-edge technologies.'"
                      }
                    </span>
                  </p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"},"}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}</p>
                  <p>
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;app-development:
                    <span className="text-yellow-300 ">
                      {
                        " 'Develop well designed, user-friendly and interactive mobile apps for both IOS and Android.'"
                      }
                    </span>
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

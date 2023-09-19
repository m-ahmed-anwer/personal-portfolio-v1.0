import React, { useState } from "react";
import image from "../../image/mypic.png";
import { Link } from "react-router-dom";

function AboutMe() {
  const [showImage, setShowImage] = useState(false);
  const imageShowing = () => {
    setShowImage(!showImage);
  };
  return (
    <div className="w-full">
      <div className="">
        <div className="w-4/4  flex items-center justify-center my-20 ">
          <div className="rounded-lg shadow-xl bg-gray-900 text-white md:w-3/4 mx-4 dark:text-black ">
            <div className="border-b border-gray-800 px-8 py-3">
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
            </div>
            <div className="px-8 py-6 ">
              <p>
                <em className="text-blue-400">const</em>{" "}
                <span className="text-green-400">aboutMe</span>{" "}
                <span className="text-pink-500">=</span>{" "}
                <em className="text-blue-400">function</em>() {"{"}
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-pink-500">return</span> {"{"}
              </p>
              <div className={`${!showImage && "hidden"} `}>
                <p className="my-2 flex">
                  &nbsp;&nbsp;&nbsp;&nbsp;image: &nbsp; &nbsp;
                  <span className="group ">
                    <img
                      src={image}
                      className="cursor-pointer rounded-lg  group relative flex justify-center"
                      alt="myProfile"
                      onClick={imageShowing}
                    />
                    <span className="cursor-pointer  ms-4 -translate-y-1/2 rounded bg-gray-500 px-2 py-1.5 text-md font-medium text-white opacity-0  group-hover:opacity-100">
                      click me
                    </span>
                  </span>
                </p>
              </div>
              <div className={`${showImage && "hidden"}`}>
                <p className="my-2">
                  &nbsp;&nbsp;&nbsp;&nbsp;name:{" "}
                  <span className="text-yellow-300 text-lg ">
                    'Ahmed Anwer'
                  </span>
                  ,
                </p>

                <p className="my-2">
                  &nbsp;&nbsp;&nbsp;&nbsp;position:{" "}
                  <span className="text-yellow-300 text-lg">
                    'fullstack-developer'
                  </span>
                  ,
                </p>
                <p className="my-2">
                  &nbsp;&nbsp;&nbsp;&nbsp;bio:{" "}
                  <span className="text-yellow-300 text-lg">
                    'I am a passionate fullstack developer with a love for
                    creating web applications that solve real-world problems. I
                    have experience in both front-end and back-end technologies,
                    and I enjoy collaborating with others to bring projects to
                    life.'
                  </span>
                  ,
                </p>
                <p className="my-2">
                  &nbsp;&nbsp;&nbsp;&nbsp;image:{" "}
                  <span className="text-yellow-300 text-lg">
                    '
                    <span className="group">
                      <span
                        onClick={imageShowing}
                        className=" cursor-pointer text-yellow-300 text-lg hover:underline focus:border-none"
                      >
                        ahmed.jpg
                      </span>
                      '<span className="text-white">,</span>
                      <span className="cursor-pointer ms-4 -translate-y-1/2 rounded bg-gray-500 px-2 py-1.5 text-md font-medium text-white opacity-0  group-hover:opacity-100">
                        click here
                      </span>
                    </span>
                  </span>
                </p>
                <p className="my-2">
                  &nbsp;&nbsp;&nbsp;&nbsp;email:{" "}
                  <span className="text-yellow-300 text-lg">
                    '
                    <Link
                      to="mailto:ahmedanwer0094@gmail.com"
                      target="_blank"
                      className="text-yellow-300 text-lg hover:underline focus:border-none"
                    >
                      ahmedanwer0094@gmail.com
                    </Link>
                    '
                  </span>
                  ,
                </p>
                <p className="my-2">
                  &nbsp;&nbsp;&nbsp;&nbsp;phone:{" "}
                  <span className="text-yellow-300 text-lg">
                    '
                    <Link
                      to="tel:+94768242884"
                      target="_blank"
                      className="text-yellow-300 text-lg hover:underline focus:border-none"
                    >
                      +94768242884
                    </Link>
                    '
                  </span>
                  ,
                </p>
                <p className="my-2">
                  &nbsp;&nbsp;&nbsp;&nbsp;linkedin:{" "}
                  <span className="text-yellow-300 text-lg">
                    '
                    <Link
                      to="https://www.linkedin.com/in/ahmed-anwer-/"
                      target="_blank"
                      className="text-yellow-300 text-lg hover:underline focus:border-none"
                    >
                      https://www.linkedin.com/in/ahmed-anwer-/
                    </Link>
                    '
                  </span>
                  ,
                </p>
                <p className="my-2">
                  &nbsp;&nbsp;&nbsp;&nbsp;github:{" "}
                  <span className="text-yellow-300 text-lg">
                    '
                    <Link
                      to="https://github.com/m-ahmed-anwer"
                      target="_blank"
                      className="text-yellow-300 text-lg hover:underline focus:border-none"
                    >
                      https://github.com/m-ahmed-anwer
                    </Link>
                    '
                  </span>
                  ,
                </p>
                <p className="my-2">
                  &nbsp;&nbsp;&nbsp;&nbsp;cv:{" "}
                  <span className="text-yellow-300 text-lg">
                    '
                    <Link
                      to="https://drive.google.com/file/d/1Dmn-xDORrMVfymuhhEW16jpkY_et8ZkT/view"
                      target="_blank"
                      className="text-yellow-300 text-lg hover:underline focus:border-none"
                    >
                      https://drive.google.com/file/d/1Dmn-xDORrMVfymuhhEW16jpkY_et8ZkT/view
                    </Link>
                    '
                  </span>
                  ,
                </p>
                <p className="my-2">
                  &nbsp;&nbsp;&nbsp;&nbsp;website:{" "}
                  <span className="text-yellow-300 text-lg">
                    '
                    <Link
                      to="https://ahmed-anwer.netlify.app/"
                      className="text-yellow-300 text-lg hover:underline focus:border-none"
                    >
                      https://ahmed-anwer.netlify.app
                    </Link>
                    '
                  </span>
                  ,
                </p>
              </div>
              <p>&nbsp;&nbsp;{"}"}</p>
              <p>{"}"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

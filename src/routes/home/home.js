import React from "react";
import image from "../../image/mypic.png";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation-Animation/Navigation";

//assadasdasd
function AboutMe() {
  return (
    <>
      <Navigation />
      <div className="w-full">
        <div className=""></div>
        <div className="w-4/4  flex items-center justify-center my-20 ">
          <div className="rounded-lg shadow-xl bg-gray-900 text-white md:w-3/4 mx-4 ">
            <div className="border-b border-gray-800 px-8 py-3">
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500 "></div>
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
            </div>
            <div className="px-8 py-3 ">
              <p className="mb-3 text-[#6a9956] max-sm:hidden">
                //use sidebar to navigate pages
              </p>
              <p className="mb-3 text-[#6a9956] sm:hidden">
                //click the top right bar to get the nav bar
              </p>

              <p>
                <em className="text-blue-400">const</em>{" "}
                <span className="text-green-400">aboutMe</span>{" "}
                <span className="text-pink-500">=</span>{" "}
                <em className="text-blue-400">function</em>() {"{"}
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-pink-500">return</span> {"{"}
              </p>

              <p className="my-2">
                &nbsp;&nbsp;&nbsp;&nbsp;name:{" "}
                <span className="text-yellow-300  ">'Ahmed Anwer'</span>,
              </p>

              <p className="my-2">
                &nbsp;&nbsp;&nbsp;&nbsp;position:{" "}
                <span className="text-yellow-300 ">'software-engineer'</span>,
              </p>
              <p className="my-2">
                &nbsp;&nbsp;&nbsp;&nbsp;bio:{" "}
                <span className="text-yellow-300 ">
                  'Enthusiastic computer science and software engineering
                  graduate with a solid foundation in both theoretical
                  principles and practical implementations. Skilled in numerous
                  programming languages and committed to providing valuable
                  insights and solutions to real-world software challenges.
                  Excited to apply academic knowledge and hands-on experience in
                  a professional environment.'
                </span>
                ,
              </p>

              <p className="my-2 flex">
                &nbsp;&nbsp;&nbsp;&nbsp;image: &nbsp; &nbsp;
                <span className="group ">
                  <img
                    src={image}
                    height={250}
                    width={250}
                    className="rounded-lg  flex justify-center"
                    alt="myProfile"
                  />
                </span>
                ,
              </p>

              <p className="my-2">
                &nbsp;&nbsp;&nbsp;&nbsp;email:{" "}
                <span className="text-yellow-300 ">
                  '
                  <Link
                    to="mailto:ahmedanwer0094@gmail.com"
                    target="_blank"
                    className="text-yellow-300  hover:underline focus:border-none"
                  >
                    ahmedanwer0094@gmail.com
                  </Link>
                  '
                </span>
                ,
              </p>
              <p className="my-2">
                &nbsp;&nbsp;&nbsp;&nbsp;phone:{" "}
                <span className="text-yellow-300 ">
                  '
                  <Link
                    to="tel:+94768242884"
                    target="_blank"
                    className="text-yellow-300  hover:underline focus:border-none"
                  >
                    +94768242884
                  </Link>
                  '
                </span>
                ,
              </p>
              <p className="my-2">
                &nbsp;&nbsp;&nbsp;&nbsp;linkedin:{" "}
                <span className="text-yellow-300 ">
                  '
                  <Link
                    to="https://www.linkedin.com/in/ahmed-anwer-/"
                    target="_blank"
                    className="text-yellow-300  hover:underline focus:border-none"
                  >
                    https://www.linkedin.com/in/ahmed-anwer-/
                  </Link>
                  '
                </span>
                ,
              </p>
              <p className="my-2">
                &nbsp;&nbsp;&nbsp;&nbsp;github:{" "}
                <span className="text-yellow-300 ">
                  '
                  <Link
                    to="https://github.com/m-ahmed-anwer"
                    target="_blank"
                    className="text-yellow-300  hover:underline focus:border-none"
                  >
                    https://github.com/m-ahmed-anwer
                  </Link>
                  '
                </span>
                ,
              </p>
              <p className="my-2">
                &nbsp;&nbsp;&nbsp;&nbsp;cv:{" "}
                <span className="text-yellow-300 ">
                  '
                  <Link
                    to="https://drive.google.com/file/d/1zoIPn69p9OaAn1JkK2Av4XSOUyvN8z6s/view?usp=sharing"
                    className="text-yellow-300  hover:underline focus:border-none"
                  >
                    https://drive.google.com/ahmed.pdf
                  </Link>
                  '
                </span>
                ,
              </p>
              <p className="my-2">
                &nbsp;&nbsp;&nbsp;&nbsp;website:{" "}
                <span className="text-yellow-300 ">
                  '
                  <Link
                    to="https://ahmed-anwer.netlify.app/"
                    className="text-yellow-300  hover:underline focus:border-none"
                  >
                    https://ahmed-anwer.netlify.app
                  </Link>
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
    </>
  );
}

export default AboutMe;

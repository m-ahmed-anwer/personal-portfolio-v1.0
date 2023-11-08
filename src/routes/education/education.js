import React from "react";
import Navigation from "../../components/Navigation-Animation/Navigation";

function Education() {
  const education = [
    {
      institution: "Hizbullah Central College",
      degree: "Secondary Education",
      year: "2010-2019",
      location: "Kurunegala, Sri Lanka",
      honors: "O/L *A's - Maths, ICT, English",
    },
    {
      institution: "SLIIT Academy",
      degree: "Foundation Certification in Information Technology",
      year: "2021",
      location: "Colombo, Sri Lanka",
      honors: "Passed in Grade A",
    },
    {
      institution: "University of Bedforshire",
      degree: "BSc(Hons) in Computer Science and Software Engineering",
      year: "2022-2025",
      location: "Colombo, Sri Lanka",
      honors: "Deans List Recognized and Maintained above 3.6 gpa",
    },
  ];
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
                  <span className="text-green-400">myEducation</span>{" "}
                  <span className="text-pink-500">=</span>{" "}
                  <em className="text-blue-400">function</em>() {"{"}
                </p>
                <p>
                  &nbsp;&nbsp;<span className="text-pink-500">return</span>{" "}
                  {"{"}
                </p>
                <div className="my-2">
                  &nbsp;&nbsp;&nbsp;&nbsp;education:{" ["}
                  {education.map((index) => {
                    return (
                      <>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}</p>
                        <p>
                          &nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;institution:
                          <span className="text-yellow-300 ">
                            {`'${index.institution}'`}
                          </span>
                        </p>
                        <p>
                          &nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;degree:
                          <span className="text-yellow-300 ">
                            {`'${index.degree}'`}
                          </span>
                        </p>
                        <p>
                          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;year:
                          <span className="text-yellow-300 ">
                            {`'${index.year}'`}
                          </span>
                        </p>
                        <p>
                          &nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;location:
                          <span className="text-yellow-300 ">
                            {`'${index.location}'`}
                          </span>
                        </p>
                        <p>
                          &nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;honors:
                          <span className="text-yellow-300 ">
                            {`'${index.honors}'`}
                          </span>
                        </p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"},"}</p>
                      </>
                    );
                  })}
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"]"}</p>
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

export default Education;

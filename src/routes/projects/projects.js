import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation-Animation/Navigation";

function Projects() {
  const project = [
    {
      id: 1,
      name: "DotCall: A Mobile Application Enhancing Communication",
      description:
        "Developed a Web application that showcasing and publishing pre-owned cars 🏁",
      technologiesUsed: `
        'IOS Swift',
        'Android Java',
        'NodeJS',
        'Firebase Authentication',
        'Django',
        'MongoDB',
      `,

      demoLink: "",
      githubRepository: [
        "https://github.com/m-ahmed-anwer/DotCall-IOS",
        "https://github.com/m-ahmed-anwer/DotCall-Android",
        "https://github.com/m-ahmed-anwer/DotCall-Backend",
        "https://github.com/m-ahmed-anwer/DotCall-Summarizer",
      ],
      dateOfCompletion: "Aug 2024",
    },
    {
      id: 2,
      name: "Lanka Hardware Hub",
      description:
        "Developed a Web application that showcasing and publishing pre-owned cars 🏁",
      technologiesUsed: `
        'React Native',
        'React.js',
        'NodeJS',
        'MongoDB',
      `,

      demoLink: "",
      githubRepository: ["https://github.com/orgs/SPPM-GP-15/repositories"],
      dateOfCompletion: "Aug 2024",
    },
    {
      id: 3,
      name: "Tomato Mystery Challenge",
      description:
        "Developed a Web application that showcasing and publishing pre-owned cars 🏁",
      technologiesUsed: `
        'React Native',
        'javaScript',
        'NodeJS',
        'MongoDB',
      `,

      demoLink: "",
      githubRepository: [
        "https://github.com/m-ahmed-anwer/tomato-challenge",
        "https://github.com/m-ahmed-anwer/tomato-challenge-backend",
      ],
      dateOfCompletion: "Feb 2023",
    },
    {
      id: 4,
      name: "Car Service Management System",
      description:
        "Crafted a comprehensive full-stack web application using ReactJS and NodeJS, enabling users to schedule car services seamlessly.",
      technologiesUsed: `
        'React.js',
        'Springboot',
        'MYSQL',
        'Tailwind',
        'Node.js',
        'Axios',
      `,

      demoLink: "https://autoprocare.netlify.app/",
      githubRepository: ["https://github.com/m-ahmed-anwer/car-service"],
      dateOfCompletion: "Nov 2023",
    },
    {
      id: 5,
      name: "Job Nest - Online Job Posting Website",
      description:
        "Developed a full-stack React web application that can job seeker find a job and a company can post their career vacancies to the website.",
      technologiesUsed: `
        'React.js',
        'Firebase',
        'JavaScript',
        'Tailwind',
        'Netlify',
      `,

      demoLink: "https://job-nest.netlify.app/",
      githubRepository: ["https://github.com/m-ahmed-anwer/Job-Nest"],
      dateOfCompletion: "Sep 2023",
    },
    {
      id: 6,
      name: "Online Banking Mobile Application",
      description:
        "Developed an Android mobile application that can a user to send, receive money in between friends and loved ones. ",
      technologiesUsed: `"Android Stduio", "Firebase", "SendGrid", "Java"`,

      demoLink: "",
      githubRepository: ["https://github.com/m-ahmed-anwer/bank-app"],
      dateOfCompletion: "Jun 2023",
    },
    {
      id: 7,
      name: "Car Posting Website",
      description:
        "Developed a Web application that showcasing and publishing pre-owned cars 🏁",
      technologiesUsed: `
        'React.js',
        'javaScript',
        'Firebase',
        'Bootstrap',
        'SendGrid',
      `,

      demoLink: "https://car-post.netlify.app",
      githubRepository: ["https://github.com/m-ahmed-anwer/Car-Post"],
      dateOfCompletion: "Feb 2023",
    },
    {
      id: 8,
      name: "Arts Showcasing Native Mobile Application",
      description:
        "Developed an Mobile application in React native forshowcasing the Art works of a person by inserting all their details",
      technologiesUsed: `'React Native', 'javaScript', 'Firebase'`,

      demoLink: "",
      githubRepository: ["https://github.com/m-ahmed-anwer/Art-Gallery"],
      dateOfCompletion: "Jan 2023",
    },
    ,
    {
      id: 9,
      name: "Movie Management Web Application",
      description:
        "Developed a Online Movie Management Web application with using with CRUD operations to handle movies",
      technologiesUsed: `'Node.js', 'Express.js', 'EJS', 'MySQL', 'Bootstrap'`,

      demoLink: "",
      githubRepository: ["https://github.com/m-ahmed-anwer/movie-management"],
      dateOfCompletion: "Oct 2022",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="w-full">
        <div className="">
          <div className="w-4/4 flex items-center justify-center my-20 ">
            <div className="rounded-lg shadow-xl bg-gray-900 text-white md:w-3/4 mx-4 ">
              <div className="border-b border-gray-800 px-8 py-3">
                <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
                <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
                <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
              </div>
              <div className="px-8 py-6 ">
                <p>
                  <em className="text-blue-400">const</em>{" "}
                  <span className="text-green-400">myProjects</span>{" "}
                  <span className="text-pink-500">=</span>{" "}
                  <em className="text-blue-400">function</em>() {"{"}
                </p>
                <p>
                  &nbsp;&nbsp;<span className="text-pink-500">return</span>{" "}
                  {"{"}
                </p>
                <div className="my-2">
                  &nbsp;&nbsp;&nbsp;&nbsp;project:{" ["}
                  {project.map((index) => {
                    return (
                      <span key={index.id}>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}</p>
                        <p>
                          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:
                          <span className="text-yellow-300">
                            {`'${index.name}'`}
                          </span>
                          ,
                        </p>
                        <p>
                          &nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description:
                          <span className="text-yellow-300">
                            {`'${index.description}'`}
                          </span>
                          ,
                        </p>

                        <p>
                          &nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;technologiesUsed:
                          {" ["}
                          <span className="text-yellow-300">
                            {`${index.technologiesUsed}`}
                          </span>
                          {"],"}
                        </p>
                        {index.demoLink && (
                          <p>
                            &nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;demoLink:
                            <Link to={index.demoLink} target="_blank">
                              <span className="cursor-pointer  hover:underline focus:border-none text-yellow-300">
                                {`'${index.demoLink}'`}
                              </span>
                            </Link>
                            ,
                          </p>
                        )}

                        <p>
                          &nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;githubRepository:
                          {index.githubRepository.length > 0 ? (
                            index.githubRepository.map((repo, i) => (
                              <React.Fragment key={i}>
                                <Link to={repo} target="_blank">
                                  <span className="hover:underline focus:border-none cursor-pointer text-yellow-300">
                                    {`'${repo}'`}
                                  </span>
                                </Link>
                                {i < index.githubRepository.length - 1 && ", "}
                              </React.Fragment>
                            ))
                          ) : (
                            <span>No repositories available</span>
                          )}
                        </p>

                        <p>
                          &nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dateOfCompletion:
                          <span className="text-yellow-300">
                            {`'${index.dateOfCompletion}'`}
                          </span>
                          ,
                        </p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"},"}</p>
                      </span>
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

export default Projects;

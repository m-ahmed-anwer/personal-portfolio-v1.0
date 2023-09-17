import React, { useContext, useState } from "react";
import {
  HomeIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import { NavbarContext } from "../../context/navbar.context";

function Navbar() {
  const navigation = [
    {
      title: "Home",
      icon: <HomeIcon className="h-5 w-5 opacity-75" />,
    },
    {
      title: "Skills",
      icon: <CodeBracketIcon className="h-5 w-5 opacity-75" />,
    },
    {
      title: "Education",
      icon: <AcademicCapIcon className="h-5 w-5 opacity-75" />,
    },
    {
      title: "Projects",
      icon: <Square3Stack3DIcon className="h-5 w-5 opacity-75" />,
    },
  ];

  const { setData } = useContext(NavbarContext);

  const [hide, setHide] = useState(false);
  const hiding = () => setHide(!hide);

  return (
    <div
      className={`sticky top-0  flex h-full w-0 flex-col justify-between border-0 border-[#2e3c51]   bg-[#151b27] sm:w-20 ${
        hide && "w-20"
      } sm:border `}
    >
      <div>
        <div className="inline-flex my-3 h-16 w-16 items-center justify-center">
          <span
            className="grid h-11 w-11 place-content-center rounded-lg bg-[#2e3c51] text-md text-gray-600 cursor-pointer"
            onClick={hiding}
          >
            <img
              alt="profile"
              src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/14/yvA5SpUH-IMG-Worlds-1200x800.jpg"
              className=""
            />
          </span>
        </div>

        <div
          className={`max-sm:${!hide && "hidden"} border-t border-[#2e3c51]`}
        >
          <div className="px-2">
            <ul className="space-y-1 pt-4 ">
              {navigation.map((index) => {
                return (
                  <li key={index.title}>
                    <div
                      className="cursor-pointer mt-5 group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-300 hover:text-gray-900"
                      onClick={() => {
                        setData(index.title);
                      }}
                    >
                      {index.icon}
                      <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-md font-medium text-white opacity-0 group-hover:opacity-100">
                        {index.title}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

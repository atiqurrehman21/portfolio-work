import React from "react";
import logo from  "./images/hostinglogo.png"
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="flex justify-between items-center gap-8 relative ">
          <img src={logo}/>
          <p className=" font-semibold text-base leading-normal">Our Services </p>
          <span  className=" absolute w-16  right-0 mr-5 bottom-4 h-[2px] bg-[#B00000] border-solid rounded-xl"></span>
        </div>
      </div>
      <div>
        <ul className=" flex gap-6">
          <li className=" font-semibold text-base leading-normal">About </li>
          <li className=" font-semibold text-base leading-normal">Blog&News</li>
          <li className=" font-semibold text-base leading-normal">Contact </li>
        </ul>
      </div>
      <div>
        <div className="flex gap-4 items-center">
          <p className=" font-semibold text-base leading-normal">Account</p> 
          <div className="w-[1px] h-5 bg-[#DAD8D8]"/>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2_356)">
                <path
                  d="M18.3333 14.0999V16.5999C18.3343 16.832 18.2867 17.0617 18.1937 17.2744C18.1008 17.487 17.9644 17.6779 17.7934 17.8348C17.6224 17.9917 17.4205 18.1112 17.2006 18.1855C16.9808 18.2599 16.7478 18.2875 16.5167 18.2666C13.9523 17.988 11.4892 17.1117 9.32498 15.7083C7.31151 14.4288 5.60443 12.7217 4.32499 10.7083C2.91663 8.53426 2.04019 6.05908 1.76665 3.48325C1.74583 3.25281 1.77321 3.02055 1.84707 2.80127C1.92092 2.58199 2.03963 2.38049 2.19562 2.2096C2.35162 2.03871 2.54149 1.90218 2.75314 1.80869C2.9648 1.7152 3.1936 1.6668 3.42499 1.66658H5.92499C6.32941 1.6626 6.72148 1.80582 7.02812 2.06953C7.33476 2.33324 7.53505 2.69946 7.59165 3.09992C7.69717 3.89997 7.89286 4.68552 8.17499 5.44158C8.2871 5.73985 8.31137 6.06401 8.24491 6.37565C8.17844 6.68729 8.02404 6.97334 7.79998 7.19992L6.74165 8.25825C7.92795 10.3445 9.65536 12.072 11.7417 13.2583L12.8 12.1999C13.0266 11.9759 13.3126 11.8215 13.6243 11.755C13.9359 11.6885 14.26 11.7128 14.5583 11.8249C15.3144 12.107 16.0999 12.3027 16.9 12.4083C17.3048 12.4654 17.6745 12.6693 17.9388 12.9812C18.203 13.2931 18.3435 13.6912 18.3333 14.0999Z"
                  stroke="#B00000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_356">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
           <p className=" font-semibold text-base leading-normal"> +2349067322844
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

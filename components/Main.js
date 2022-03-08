import { useEffect } from "react";
import Image from "next/image";

const main = ({ time, handler }) => {
  console.log(time);
  return (
    <div className="lg:w-64 h-full bg-secondary-300 rounded-2xl mb-6 lg:mb-0">
      <div className="flex flex-wrap gap-6 items-center lg:block w-full bg-primary-blue p-8 sm:space-y-10 rounded-2xl">
        <div className="w-20 h-20 rounded-full border-4 border-white">
          <Image src="/image-jeremy.png" alt="Profile" height={80} width={80} />
        </div>
        <div>
          <p className="text-sm text-gray-400">Report for</p>
          <h2 className="text-4xl font-light tracking-wide mb-4 lg:mb-10">
            Jeremy Robson
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-around lg:block text-gray-400 p-8 text-lg lg:space-y-4">
        <div
          onClick={handler("day")}
          className="hover:cursor-pointer hover:text-gray-100"
        >
          <p className={time === "day" ? "text-gray-100" : ""}>Daily</p>
        </div>
        <div
          onClick={handler("week")}
          className="hover:cursor-pointer hover:text-gray-100"
        >
          <p className={time === "week" ? "text-gray-100" : ""}>Weekly</p>
        </div>
        <div
          onClick={handler("month")}
          className="hover:cursor-pointer hover:text-gray-100"
        >
          <p className={time === "month" ? "text-gray-100" : ""}>Monthly</p>
        </div>
      </div>
    </div>
  );
};

export default main;

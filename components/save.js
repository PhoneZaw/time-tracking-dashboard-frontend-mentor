import { useState } from "react";
import Card from "../components/Card";
import Main from "./../components/Main";
import data from "./../data.json";

export default function Home() {
  const [time, setTime] = useState("day");

  const handler = (time) => () => {
    setTime(time);
  };
  return (
    <div className="p-6 md:p-10 min-h-screen w-full font-rubik bg-secondary-400 text-gray-100 lg:flex items-center justify-center gap-6">
      <div>
        <Main time={time} handler={handler} />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {data
          ? data.map((item, index) => (
              <Card key={index} {...item} time={time} />
            ))
          : null}
      </div>
    </div>
  );
}

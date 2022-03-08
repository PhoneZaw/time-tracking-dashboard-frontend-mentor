import Head from "next/head";
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
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <title>Frontend Mentor | Time tracking dashboard</title>
      </Head>
      <div className="p-6 md:p-10 lg:p-0 min-h-screen font-rubik bg-secondary-400 text-gray-100 flex flex-col lg:flex-row lg:items-center justify-center gap-6 relative">
        <div>
          <Main time={time} handler={handler} />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {data
            ? data.map((item, index) => (
                <Card key={index} {...item} time={time} />
              ))
            : null}
        </div>
        <div className="absolute bottom-1 right-1 text-sm">
          Challenge by{" "}
          <a
            className="underline"
            href="https://www.frontendmentor.io?ref=challenge"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a className="underline" href="https://github.com/boss-is-me">
            Phone Zaw
          </a>
          .
        </div>
      </div>
    </>
  );
}

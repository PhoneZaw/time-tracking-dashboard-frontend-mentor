import Image from "next/image";

const Card = ({ title, slug, timeframes, time }) => {
  return (
    <div className={`${slug} rounded-2xl lg:w-60 shadow-lg`}>
      {/* ^ ${slug} is used for background color */}
      <div className="h-14 overflow-hidden relative">
        <div className="w-fit absolute -top-2 right-6">
          <Image
            src={`/icon-${slug}.svg`}
            alt={`icon-${slug}`}
            height={80}
            width={80}
          />
        </div>
      </div>
      <div className="rounded-2xl bg-secondary-300 p-7 -mb-px hover:cursor-pointer hover:bg-secondary-200">
        <div className="flex justify-between items-center">
          <p className="text-lg">{title}</p>
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex justify-between items-center md:block flex-wrap mt-6 mr-6">
          <p className="text-5xl tracking-wider font-light md:mb-2 ">
            {timeframes[time].current}hrs
          </p>
          <div className="text-sm text-gray-400">
            <span className="capitalize">Last {time} - </span>
            {timeframes[time].previous}hrs<span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

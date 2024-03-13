"use client";
import { useState } from "react";
import Image from "next/image";
import menor from "../../public/menor.png";

const AcordeonBuy = (props) => {
  const [item, setItem] = useState(props.data);

  const handleTogleActive = () => {
    const newActive = item.active === 1 ? 0 : 1;
    setItem({ ...item, active: newActive });
  };

  return (
    <section>
      <div
        className={`m-auto flex  mb-5 border-2 border-gray-900 rounded-md w-2/3 duration-700 group max-lg:w-10/12  max-md:w-full ${
          item.active === 1 ? "is-active " : ""
        }`}
      >
        <div
          className="p-2 text-2xl text-black/80 duration-700 cursor-pointer "
          onClick={handleTogleActive}
        >
          <div className=" flex justify-between p-2 gap-2 ">
            <div className="flex items-center ">
              <p className="w-full text-lg font-bold text-black/80 duration-700  group-[.is-active]:font-semibold max-md:text-base">
                {item.question}
              </p>
            </div>
            <Image
              className="-rotate-90  duration-700 group-[.is-active]:rotate-90 w-auto h-[30px] max-md:h-[20px]"
              src={menor}
              width={0}
              height={0}
              alt="menos"
            />
            {/* <p className="rotate-90  duration-700 group-[.is-active]:-rotate-90">
              {">"}
            </p> */}
          </div>
          <div className="mt-2 overflow-hidden  text-black/70 text-xl max-h-0  duration-700 group-[.is-active]:max-h-[150px] max-md:text-base">
            {item.answer}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcordeonBuy;

"use client";
import { audiowide, sarpanch } from "@/utils/fonts/fontlist";
import { gsap } from "gsap";
import { useEffect, useState } from "react";

const CommonCard = ({
  imageSrc,
  title,
  subtitle,
  currentBid,
  endingIn,
  index,
}) => {
  const [enter, setEnter] = useState(false);

  const [delayedEnter, setDelayedEnter] = useState(false);

  // const handleMouseEnter = () => {

  //   // setDelayedEnter(true);
  // };

  // const handleMouseLeave = () => {
  //   // setDelayedEnter(false);
  // };

  // const handleMouseEnter = () => {
  //   const timeout = setTimeout(() => {
  //     setDelayedEnter(true);
  //   }, 50);

  //   // Store the timeout ID in state
  //   setDelayedEnter(timeout);
  // };

  // const handleMouseLeave = () => {
  //   // Clear the timeout on mouse leave
  //   clearTimeout(delayedEnter);

  //   const timeout = setTimeout(() => {
  //     setDelayedEnter(false);
  //   }, 300);

  //   // Store the timeout ID in state
  //   setDelayedEnter(timeout);
  // };

  let debounceTimeout;

  const handleMouseEnter = (e) => {
    // const id = e?.target?.id;
    // document.getElementById(id)?.classList.add("moveCard");

    const timeout = setTimeout(() => {
      setDelayedEnter(true);
    }, 50);
    // return () => {
    clearTimeout(timeout);
    // };
    setDelayedEnter(timeout);
  };

  const handleMouseLeave = (e) => {
    setDelayedEnter(false);

    // console.log(e.target.id);
    // clearTimeout(debounceTimeout);
    // debounceTimeout = setTimeout(() => {
    // const id = e?.target?.id;
    // document.getElementById(id)?.classList?.remove("moveCard");
    // }, 200);
    // const id = e?.target?.id;
    // document.getElementById(id)?.classList?.remove("moveCard");

    const timeout = setTimeout(() => {
      setDelayedEnter(false);
    }, 2000);
    // return () => {
    clearTimeout(timeout);
    // };

    setDelayedEnter(timeout);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setEnter(true);
    }, index * 300);
    return () => {
      clearTimeout(timeout);
      setEnter(false);
    };
  }, [index]);

  // gsap.set(".moveCard", {
  //   transformStyle: "preserve-3d",
  //   transformPerspective: 1000
  // });

  return (
    <div
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
      id={index}
      className={` 
      ${enter ? "card-rotate enter" : "card-rotate"} ${
        delayedEnter ? "moveCard" : " "
      } 
      3xl:max-w-[370px] 2xl:max-w-[345px]  xl:max-w-[284px] lg:max-w-[300px] md:max-w-[350px] sm:max-w-[285px] mm:max-w-[205px] max-w-[345px] w-full h-fit cursor-pointer  sm:p-6 p-3 bg-white flex flex-col bg-opacity-10 card `}
    >
      <div className="relative max-w-[335px] max-h-[322px] w-full h-full  ">
        <img
          src={imageSrc}
          alt={title}
          height={0}
          width={0}
          layout="fill"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div
        className={`${audiowide.className} flex justify-between items-center pt-9 sm:text-base text-sm w-[97%] uppercase font-medium`}
      >
        <span className="">{title}</span>
        <span>{subtitle}</span>
      </div>
      <div
        className={`${sarpanch.className} flex justify-between items-center pt-5 text-[#757575] sm:text-sm text-xs w-[97%]  `}
      >
        <span>Current Bid</span>
        <span>Ending in</span>
      </div>
      <div
        className={`${sarpanch.className} flex justify-between items-center pt-1 mb-2 text-base w-[97%]`}
      >
        <span>{currentBid}</span>
        <span>{endingIn}</span>
      </div>
    </div>
  );
};

export default CommonCard;

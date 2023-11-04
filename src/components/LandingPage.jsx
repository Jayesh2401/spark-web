import { bebasNeue, orbitron, sarpanch } from "@/utils/fonts/fontlist";
import { getCurrentTime } from "@/utils/helper/data/datahelper";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSpring, animated, easings } from "@react-spring/web";

function LandingPage() {
  const [time, setTime] = useState(null);
  const [delayedEnter, setDelayedEnter] = useState(false);

  setInterval(() => {
    setTime(getCurrentTime());
  }, 1000);

  const circlesprings = useSpring({
    delay: 200,
    from: { scale: 0, opacity: 0, rotate: 0 },
    to: { scale: 1, opacity: 1, rotate: 360 },

    config: {
      duration: 2000,
      easing: easings.easeOutSine,
    },
  });
  const springs = useSpring({
    delay: 200,
    from: { marginLeft: 150, opacity: 0 },
    to: { marginLeft: 0, opacity: 1 },

    config: {
      duration: 2000,
      easing: easings.easeOutSine,
    },
  });

  return (
    <section className="w-full h-full  lg:container mx-auto px-7 lg:py-10 md:py-7 py-3 ">
      <div className="flex justify-between mx-auto w-full lg:flex-row flex-col lg:gap-0 sm:gap-10">
        <div
          // onMouseEnter={() => handleMouseEnter()}
          // onMouseLeave={() => handleMouseLeave()}
          className={`${orbitron.className} font-bold xl:w-[57%] lg:w-[52%]  lg:pt-14 md:pt-5 leading-normal`}
        >
          <div className="2xl:text-[80px] xl:text-[60px] lg:text-5xl md:text-5xl sm:text-3xl text-2xl uppercase leading-[1.2]">
            discover the world of NFT with{" "}
            <animated.span
              className={`
              ${
                delayedEnter
                  ? "wave"
                  : "bg-gradient-to-r from-[#9173D1] to-[#EC6EAD] "
              } 
              bg-clip-text text-transparent  `}
              data-text="SPARTAK"
              style={springs}
            >
              {/* ${
                 delayedEnter
                   ? "bg-white"
                   : "bg-gradient-to-r from-[#9173D1] to-[#EC6EAD] wave"
               }  */}
              SPARTAK
            </animated.span>{" "}
            token
          </div>
          {/* <div className="dd">
            <div className="cc">Spark</div>

            <svg width="0">
              <filter id="filter">
                <feTurbulence
                  id="turbulence"
                  type="fractalNoise"
                  baseFrequency=".03"
                  numOctaves="20"
                />
                <feDisplacementMap in="SourceGraphic" scale="30" />
              </filter>
            </svg>
          </div> */}

          <div
            className={`${sarpanch.className} font-normal md:pt-[40px] pt-5 sm:w-[92%] w-full sm:text-base text-sm `}
          >
            Do you want to be trendy and have something that no one else has?
            Then you need our NFT pictures. They are real art, created for you.
            You can be sure that no one can copy or steal your picture. You can
            earn money on your collection, selling or exchanging your NFT
            pictures on the market. But hurry up, because our collection is
            limited and quickly sold out. Don't miss your chance, buy our NFT
            pictures right now!
          </div>
          <div className="flex mm:flex-row flex-col gap-[18px] text-3xl font-medium md:pt-16 pt-10">
            <div className="drop-shadow-[0px_0px_8px_rgba(145,115,209,1)]">
              <button
                className={`bg-[#9173D1] hover:bg-white duration-300 mm:px-[83px] w-full  bg-clip-padding relative text-[#22184C] p-3 text-lg font-medium ${bebasNeue.className} buttonBefore `}
              >
                MORE
              </button>
            </div>
            <div className="hover:drop-shadow-[0px_0px_8px_rgba(145,115,209,1)]">
              <button
                className={`text-white border-2 border-white hover:text-black duration-300 hover:bg-[#9173d1] hover:border-none  mm:px-[83px] w-full bg-clip-padding relative  mm:py-3 h-[55px] text-lg font-medium ${bebasNeue.className} buttonBefore`}
              >
                <span className="absolute mm:h-10 w-2 mm:rotate-[132deg] m:rotate-[114deg] rotate-[119deg]  border-r-2 mm:left-[3px] mm:bottom-[-8px] m:left-[10px] left-[4px] h-14 m:bottom-[-15px] bottom-[-15px]"></span>
                <span className="absolute mm:h-10 h-12 w-2 mm:rotate-[-48deg] m:rotate-[-68deg] rotate-[-64deg]  border-r-2 mm:right-[3px] m:right-[16px] right-[16px] mm:top-[-8px] m:top-[-14px] top-[-16px] "></span>
                buy
                {/* <span className="absolute m:h-10 h-14 w-2 m:rotate-[-48deg]   border-r-2 m:right-[3px] right-[16px] m:top-[-16px] top-[-18px]"></span> */}
              </button>
            </div>
          </div>
        </div>
        <animated.div style={circlesprings} className="xl:w-[43%] lg:w-[48%] xl:pl-[130px] relative min-h-[730px] lg:block hidden">
          <div className="max-w-[504px] max-h-[664px] blur-[300px] h-full w-full bgColor  absolute left-[-10vh]"></div>

          <div className="rounded-[21.411px] border-[3px] downup  z-[1] border-[#60557e] border-opacity-25 top-0 2xl:right-[18%] xl:right-[22%] lg:right-[8%]  absolute skew-x-[-10deg] hover:!skew-x-[10deg] cursor-pointer border-1 bg-gradient-to-br from-[rgba(255, 255, 255, 0.00)] to-[rgba(255, 255, 255, 0.15)] drop-shadow-[0px_4.2px_52.4px_rgba(0, 7, 72, 0.12)] h-[300px] w-[400px] backdrop-blur-md bg-white/10 p-2"></div>

          <div className="rounded-[21.411px] border-[3px] updown z-[2] border-[#60557e] border-opacity-25 top-[64px] 3xl:ml-[82px] 2xl:ml-[50px] xl:ml-[-75px] lg:ml-[85px]  absolute skew-x-[-10deg] border-1 bg-gradient-to-br from-[rgba(255, 255, 255, 0.00)] to-[rgba(255, 255, 255, 0.15)] drop-shadow-[0px_4.2px_52.4px_rgba(0, 7, 72, 0.12)] h-[630px] xl:w-[400px] lg:w-[350px] backdrop-blur-md bg-white/10 p-2"></div>

          <div className="absolute max-w-[305px] w-full max-h-[500px] h-full   top-0 left-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 575 858"
              fill="none"
            >
              <g filter="url(#filter0_f_20_1177)">
                <path
                  d="M198.383 393.427C274.629 313.194 282.344 313.938 276.671 324.339L413.67 131.353C399.909 199.658 373.647 339.454 378.683 352.197C384.978 368.127 375.941 384.371 362.817 395.105C349.692 405.839 325.917 416.431 302.7 444.694C279.483 472.957 363.057 541.611 333.628 650.835C304.199 760.058 120.626 647.988 191.891 579.585C248.902 524.863 233.938 534.517 219.329 546.184C180.578 528.695 122.138 473.659 198.383 393.427Z"
                  fill="#6BABFF"
                  fillOpacity="0.28"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_20_1177"
                  x="0.617081"
                  y="-29.2274"
                  width="573.633"
                  height="886.349"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="80.2901"
                    result="effect1_foregroundBlur_20_1177"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          <animated.div
            style={circlesprings}
            className="absolute top-5 z-[3]  xl:right-4 lg:right-[-1rem]  xl:max-w-[540px] xl:max-h-[546px] lg:max-w-[500px] max-h-[550px]  w-full h-full rounded-xl"
          >
            <Image
              src="/landing.png"
              alt="spark"
              width={0}
              height={0}
              layout="fill"
              style={{ width: "100%", height: "100%" }}
            />
          </animated.div>

          <div className="rounded-[16.411px] border-[3px] downup z-[4] border-[#60557e] border-opacity-25 py-1 top-[10px] right-0 absolute skew-x-[-10deg] border-1 bg-gradient-to-br from-[rgba(255, 255, 255, 0.05)] to-[rgba(255, 255, 255, 0.05)] drop-shadow-[0px_4.2px_52.4px_rgba(0, 7, 72, 0.05)] h-[70px] w-[200px] backdrop-blur-sm bg-white/10 flex items-center justify-center flex-col">
            <span className="font-clash font-bold text-[26px]  leading-[1.2]">
              BID NOW!
            </span>
            <span className="font-clash font-normal text-base leading-normal ">
              Latest Collection
            </span>
          </div>

          <div className="rounded-[21.411px] flex items-center z-[4] border-[3px] downup border-[#60557e] border-opacity-25 xl:bottom-[280px] lg:bottom-[270px] right-0 absolute skew-x-[-10deg] border-1 bg-gradient-to-br from-[rgba(255, 255, 255, 0.00)] to-[rgba(255, 255, 255, 0.15)] drop-shadow-[0px_4.2px_52.4px_rgba(0, 7, 72, 0.12)] h-[100px] w-[340px] backdrop-blur-md bg-white/10 px-5 py-4">
            <div className="max-w-[89px] w-full max-h-[67px] h-full relative">
              <Image
                src="/Frame.png"
                alt="frame"
                width={0}
                height={0}
                layout="fill"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-clash font-semibold text-[29px] leading-[1.2]">
                HAPE #6959
              </span>
              <span className="font-clash text-black text-sm ">
                HAPES PRIME
              </span>
            </div>
          </div>

          <div className="rounded-[16.411px]  border-[3px] z-[4] updown border-[#60557e] border-opacity-25 py-1 bottom-[130px] 2xl:left-[50px] xl:left-[-50px] lg:left-[-25px] absolute skew-x-[-10deg] border-1 bg-gradient-to-br from-[rgba(255, 255, 255, 0.05)] to-[rgba(255, 255, 255, 0.05)] drop-shadow-[0px_4.2px_52.4px_rgba(0, 7, 72, 0.05)] h-[105px] w-[300px] backdrop-blur-sm bg-white/10 flex items-center justify-center flex-col p-5">
            <div className="flex justify-between w-full font-clash">
              <span className=" font-semibold leading-[1.2] text-[26px]">
                5.758
              </span>
              <span className=" font-semibold leading-[1.2] text-xl">
                $5758.31
              </span>
            </div>
            <div className="flex justify-between w-full">
              <span className=" font-semibold leading-[1.2] text-[26px]">
                ETH
              </span>
              <span className="text-[#24FF00] text-sm ">+12.45%</span>
            </div>
          </div>

          <div className="rounded-[16.411px]  py-1 bottom-[80px] z-[5] right-12 absolute w-[233px] h-[184px]  pink"></div>

          <div className="rounded-[16.411px] border-[3px] downup z-[5] border-[#60557e] py-1 bottom-4 3xl:left-[125px] 2xl:left-24 xl:left-[-20px] absolute skew-x-[-10deg] border-1 bg-gradient-to-br from-[rgba(255, 255, 255, 0.05)] to-[rgba(255, 255, 255, 0.05)] drop-shadow-[0px_4.2px_52.4px_rgba(0, 7, 72, 0.05)] h-[89px] w-[135px] backdrop-blur-sm bg-white/10 flex items-start justify-center flex-col p-5">
            <span className="text-[21px] font-clash font-semibold leading-[1.4]">
              Auction
            </span>
            <span className="text-[15px] font-clash font-medium">End In</span>
          </div>

          <div className="rounded-[16.411px] font-clash border-[3px] z-[5] updown  border-[#60557e] border-opacity-25  py-1 bottom-[-10px] xl:right-[70px] lg:right-[10px] absolute skew-x-[-10deg] border-1 bg-gradient-to-br from-[rgba(255, 255, 255, 0.05)] to-[rgba(255, 255, 255, 0.05)] drop-shadow-[0px_4.2px_52.4px_rgba(0, 7, 72, 0.05)] h-[106px] w-[300px] backdrop-blur-sm bg-white/10 flex justify-between items-center  p-5">
            <div className="text-center">
              <span className="text-4xl font-clash font-semibold">
                {time?.hours}
              </span>
              <p>Hours</p>
            </div>
            <div className="text-2xl">:</div>
            <div className="text-center">
              <span className="text-4xl font-semibold">{time?.minutes}</span>
              <p>Minutes</p>
            </div>
            <div className="text-2xl">:</div>
            <div className="text-center">
              <span className="text-4xl font-semibold">{time?.seconds}</span>
              <p>seconds</p>
            </div>
          </div>
        </animated.div>
        <div className="lg:hidden block max-w-[600px] max-h-[700px] w-full h-full">
          <img
            src="/Group3.png"
            alt="landing"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}

export default LandingPage;

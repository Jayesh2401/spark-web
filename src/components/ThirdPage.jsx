import { bebasNeue, orbitron, sarpanch } from "@/utils/fonts/fontlist";
import CommonCard from "@/utils/helper/cards/Commoncard";
import { second_tabs, thirdsection } from "@/utils/helper/data/datahelper";
import { useEffect, useState } from "react";

function ThirdPage() {
  // const [shouldRenderCards, setShouldRenderCards] = useState(thirdsection);

  // let debounceTimeout;

  // const check = () => {
  //   clearTimeout(debounceTimeout);
  //   debounceTimeout = setTimeout(() => {
  //     setShouldRenderCards([]);
  //   }, 1000);
  // };

  // useEffect(() => {
  //   setShouldRenderCards(thirdsection);
  // }, [shouldRenderCards]);

  const [shouldRenderCards, setShouldRenderCards] = useState(thirdsection);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const check = () => {
    clearTimeout(debounceTimeout);
    setShouldRenderCards([]);
    const timeout = setTimeout(() => {
      setShouldRenderCards(thirdsection);
    }, 100);
    setDebounceTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [debounceTimeout]);

  return (
    <section className="2xl:mt-[100px]  lg:mb-[180px] mb-9 relative  container mx-auto third_container">
      <h1
        className={`text-center xl:text-[100px] lg:text-[80px] sm:text-6xl text-4xl   uppercase leading-[1.2] bg-gradient-to-r from-[#9173D1] to-[#EC6EAD] bg-clip-text text-transparent ${bebasNeue.className} `}
      >
        TOP COLLECTIONS
      </h1>

      <div
        className={`mx-auto flex gap-10 w-full overflow-x-auto gg py-5 text-2xl relative z-[1] lg:justify-center ${sarpanch.className}`}
      >
        {second_tabs.map((e, i) => {
          return (
            <a
              href={`#${e.name}`}
              key={i}
              onClick={() => window.location.reload()}
              className="hover:border-b-2 hover:border-white border-b-2 min-w-fit border-transparent px-2"
            >
              {e.name}
            </a>
          );
        })}
      </div>

      <div className="mt-5 xl:mb-[300px] md:mb-[130px] sm:mb-24 mb-16">
        <div className="flex flex-wrap h-auto gap-9 sm:gap-y-[60px] gap-y-[30px] w-fit">
          {shouldRenderCards.map((e, i) => {
            return (
              <CommonCard
                key={i}
                imageSrc={e.image}
                title={e.title}
                subtitle={e.subtitle}
                currentBid={e.currentBid}
                endingIn={e.endingIn}
                index={i + 3}
              />
            );
          })}
        </div>
      </div>
      <h3
        className={` xl:text-[43px] md:text-[36px] sm:text-[30px] mm:text-[34px] m:text-[26px] text-[22px] font-bold mx-auto flex justify-center uppercase ${orbitron.className}`}
      >
        Everything works in 3 steps
      </h3>

      <div className="flex lg:my-28 sm:my-14 my-8 justify-center lg:flex-row flex-col items-center">
        <div className="xl:max-w-[338px] lg:max-w-[250px]  sm:max-w-[220px] max-w-[150px] w-full threestep  xl:max-h-[337px] lg:max-h-[250px]  sm:max-h-[220px] max-h-[150px] h-full  flex flex-col sm:gap-10 gap-5 items-center sm:pt-[42px] pt-4 sm:pb-9 pb-3  bg-opacity-10 bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="188"
            height="188"
            viewBox="0 0 188 188"
            fill="none"
            className="xl:w-full lg:w-2/4 w-full "
          >
            <path
              d="M125.334 70.5C125.334 112.252 62.6673 112.252 62.6673 70.5H78.334C78.334 91.415 109.667 91.415 109.667 70.5M156.667 141V164.5H31.334V141C31.334 120.085 73.0857 109.667 94.0007 109.667C114.916 109.667 156.667 120.085 156.667 141ZM141.784 141C141.784 135.987 117.266 124.55 94.0007 124.55C70.7357 124.55 46.2173 135.987 46.2173 141V149.617H141.784M97.9173 15.6667C100.111 15.6667 101.834 17.39 101.834 19.5834V43.0834H109.667V23.5C115.211 26.0656 119.856 30.2382 122.999 35.4763C126.141 40.7144 127.637 46.7762 127.292 52.875C127.292 52.875 132.776 53.9717 133.167 62.6667H54.834C54.834 53.9717 60.709 52.875 60.709 52.875C60.3639 46.7762 61.8599 40.7144 65.0028 35.4763C68.1456 30.2382 72.7903 26.0656 78.334 23.5V43.0834H86.1673V19.5834C86.1673 17.39 87.8907 15.6667 90.084 15.6667"
              fill="white"
            />
          </svg>
          <p
            className={`lg:text-2xl sm:text-xl text-base font-bold uppercase  ${orbitron.className}`}
          >
            Work
          </p>
        </div>

        <div className="flex lg:mx-10 lg:my-0 sm:my-5 my-2 lg:flex-row flex-col">
          <span className="bg-white bg-opacity-10 h-3 w-3 rounded-full lg:mr-6 sm:mb-6 mb-4"></span>
          <span className="bg-white bg-opacity-10 h-3 w-3 rounded-full lg:mr-6 sm:mb-6 mb-4"></span>
          <span className="bg-white bg-opacity-10 h-3 w-3 rounded-full"></span>
        </div>

        <div className="xl:max-w-[338px] lg:max-w-[250px]  sm:max-w-[220px] max-w-[150px] w-full threestep  xl:max-h-[337px] lg:max-h-[250px]  sm:max-h-[220px] max-h-[150px] h-full  flex flex-col sm:gap-10 gap-5 items-center sm:pt-[42px] pt-4 sm:pb-9 pb-3  bg-opacity-10 bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="188"
            height="188"
            viewBox="0 0 188 188"
            fill="none"
            className="xl:w-full lg:w-2/4 w-full "
          >
            <g clipPath="url(#clip0_26_240)">
              <path
                d="M34.8975 15.8625C36.0007 14.5728 37.3701 13.5373 38.9117 12.8274C40.4533 12.1174 42.1303 11.7499 43.8275 11.75H144.173C145.87 11.7499 147.547 12.1174 149.088 12.8274C150.63 13.5373 151.999 14.5728 153.102 15.8625L183.758 51.6295C186.495 54.8235 188 58.8911 188 63.0975V66.0938C188.001 71.9097 186.184 77.5806 182.804 82.3137C179.425 87.0468 174.65 90.6057 169.149 92.493C163.648 94.3802 157.694 94.5015 152.121 92.8399C146.547 91.1783 141.632 87.8168 138.062 83.2253C135.456 86.583 132.115 89.2997 128.296 91.1673C124.478 93.0349 120.282 94.0039 116.031 94C111.78 94.0048 107.584 93.0362 103.766 91.1685C99.9468 89.3009 96.6062 86.5837 94 83.2253C91.3938 86.5837 88.0532 89.3009 84.2344 91.1685C80.4156 93.0362 76.2198 94.0048 71.9688 94C67.7177 94.0048 63.5219 93.0362 59.7031 91.1685C55.8843 89.3009 52.5437 86.5837 49.9375 83.2253C46.3677 87.8168 41.4526 91.1783 35.8791 92.8399C30.3055 94.5015 24.3521 94.3802 18.8508 92.493C13.3496 90.6057 8.57542 87.0468 5.19564 82.3137C1.81587 77.5806 -0.000641533 71.9097 1.69958e-07 66.0938V63.0975C0.000148139 58.8911 1.50467 54.8235 4.24175 51.6295L34.9092 15.8507L34.8975 15.8625ZM55.8125 66.0938C55.8125 70.3787 57.5147 74.4881 60.5446 77.5179C63.5744 80.5478 67.6838 82.25 71.9688 82.25C76.2537 82.25 80.3631 80.5478 83.3929 77.5179C86.4228 74.4881 88.125 70.3787 88.125 66.0938C88.125 64.5356 88.744 63.0413 89.8457 61.9395C90.9475 60.8377 92.4419 60.2188 94 60.2188C95.5581 60.2188 97.0525 60.8377 98.1543 61.9395C99.256 63.0413 99.875 64.5356 99.875 66.0938C99.875 70.3787 101.577 74.4881 104.607 77.5179C107.637 80.5478 111.746 82.25 116.031 82.25C120.316 82.25 124.426 80.5478 127.455 77.5179C130.485 74.4881 132.188 70.3787 132.188 66.0938C132.188 64.5356 132.806 63.0413 133.908 61.9395C135.01 60.8377 136.504 60.2188 138.062 60.2188C139.621 60.2188 141.115 60.8377 142.217 61.9395C143.319 63.0413 143.938 64.5356 143.938 66.0938C143.938 70.3787 145.64 74.4881 148.67 77.5179C151.699 80.5478 155.809 82.25 160.094 82.25C164.379 82.25 168.488 80.5478 171.518 77.5179C174.548 74.4881 176.25 70.3787 176.25 66.0938V63.0975C176.25 61.6972 175.75 60.343 174.84 59.2788L144.173 23.5H43.8275L13.16 59.2788C12.2499 60.343 11.7499 61.6972 11.75 63.0975V66.0938C11.75 70.3787 13.4522 74.4881 16.4821 77.5179C19.5119 80.5478 23.6213 82.25 27.9062 82.25C32.1912 82.25 36.3006 80.5478 39.3304 77.5179C42.3603 74.4881 44.0625 70.3787 44.0625 66.0938C44.0625 64.5356 44.6815 63.0413 45.7832 61.9395C46.885 60.8377 48.3794 60.2188 49.9375 60.2188C51.4956 60.2188 52.99 60.8377 54.0918 61.9395C55.1935 63.0413 55.8125 64.5356 55.8125 66.0938ZM17.625 99.875C19.1831 99.875 20.6775 100.494 21.7793 101.596C22.881 102.698 23.5 104.192 23.5 105.75V176.25H35.25V117.5C35.25 114.384 36.4879 111.395 38.6915 109.191C40.895 106.988 43.8837 105.75 47 105.75H82.25C85.3663 105.75 88.3549 106.988 90.5585 109.191C92.7621 111.395 94 114.384 94 117.5V176.25H164.5V105.75C164.5 104.192 165.119 102.698 166.221 101.596C167.323 100.494 168.817 99.875 170.375 99.875C171.933 99.875 173.427 100.494 174.529 101.596C175.631 102.698 176.25 104.192 176.25 105.75V176.25H182.125C183.683 176.25 185.177 176.869 186.279 177.971C187.381 179.073 188 180.567 188 182.125C188 183.683 187.381 185.177 186.279 186.279C185.177 187.381 183.683 188 182.125 188H5.875C4.31685 188 2.82252 187.381 1.72075 186.279C0.618972 185.177 1.69958e-07 183.683 1.69958e-07 182.125C1.69958e-07 180.567 0.618972 179.073 1.72075 177.971C2.82252 176.869 4.31685 176.25 5.875 176.25H11.75V105.75C11.75 104.192 12.369 102.698 13.4707 101.596C14.5725 100.494 16.0669 99.875 17.625 99.875ZM47 176.25H82.25V117.5H47V176.25ZM105.75 117.5C105.75 114.384 106.988 111.395 109.191 109.191C111.395 106.988 114.384 105.75 117.5 105.75H141C144.116 105.75 147.105 106.988 149.309 109.191C151.512 111.395 152.75 114.384 152.75 117.5V152.75C152.75 155.866 151.512 158.855 149.309 161.059C147.105 163.262 144.116 164.5 141 164.5H117.5C114.384 164.5 111.395 163.262 109.191 161.059C106.988 158.855 105.75 155.866 105.75 152.75V117.5ZM141 117.5H117.5V152.75H141V117.5Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_26_240">
                <rect width="188" height="188" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p
            className={`lg:text-2xl sm:text-xl text-base font-bold uppercase ${orbitron.className}`}
          >
            sell it
          </p>
        </div>

        <div className="flex lg:mx-10 lg:my-0 sm:my-5 my-2 lg:flex-row flex-col">
          <span className="bg-white bg-opacity-10 h-3 w-3 rounded-full lg:mr-6 sm:mb-6 mb-4"></span>
          <span className="bg-white bg-opacity-10 h-3 w-3 rounded-full lg:mr-6 sm:mb-6 mb-4"></span>
          <span className="bg-white bg-opacity-10 h-3 w-3 rounded-full"></span>
        </div>

        <div className="xl:max-w-[338px] lg:max-w-[250px]  sm:max-w-[220px] max-w-[150px] w-full threestep  xl:max-h-[337px] lg:max-h-[250px]  sm:max-h-[220px] max-h-[150px] h-full  flex flex-col sm:gap-10 gap-5 items-center sm:pt-[42px] pt-4 sm:pb-9 pb-3  bg-opacity-10 bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="188"
            height="188"
            viewBox="0 0 188 188"
            className="xl:w-full lg:w-2/4 w-full "
            fill="none"
          >
            <path
              d="M167.711 89.3783L98.5427 20.21C95.6443 17.3117 91.6494 15.6667 87.4977 15.6667H31.3327C22.716 15.6667 15.666 22.7167 15.666 31.3334V87.4984C15.666 91.65 17.311 95.645 20.2877 98.5434L89.456 167.712C95.566 173.822 105.514 173.822 111.624 167.712L167.789 111.547C173.899 105.437 173.899 95.5667 167.711 89.3783ZM100.501 156.667L31.3327 87.4984V31.3334H87.4977L156.666 100.502L100.501 156.667Z"
              fill="white"
            />
            <path
              d="M50.916 62.6667C57.4054 62.6667 62.666 57.406 62.666 50.9167C62.666 44.4273 57.4054 39.1667 50.916 39.1667C44.4267 39.1667 39.166 44.4273 39.166 50.9167C39.166 57.406 44.4267 62.6667 50.916 62.6667Z"
              fill="white"
            />
          </svg>
          <p
            className={`lg:text-2xl sm:text-xl text-base font-bold uppercase ${orbitron.className}`}
          >
            Sell
          </p>
        </div>
      </div>
    </section>
  );
}

export default ThirdPage;

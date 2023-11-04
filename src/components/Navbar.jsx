import { sarpanch } from "@/utils/fonts/fontlist";
import { nav } from "@/utils/helper/data/datahelper";
import { logo } from "@/utils/helper/logo";
import { useState } from "react";

function Navbar() {
  const [isopen, setIsopen] = useState(false);

  function browserVersion() {}

  return (
    <section className="lg:container w-full md:px-5 px-2 mx-auto ">
      <nav className=" pt-5 ">
        <pre id="output"></pre>
        <div className="flex justify-between items-center  ">
          <div className="w-[110px] cursor-pointer">{logo}</div>

          <div className={`${sarpanch.className} text-xl lg:block hidden `}>
            {nav.map((e, i) => {
              return (
                <a
                  href={`#${e.nav}`}
                  key={i}
                  className="mr-[43px] hover:border-b "
                >
                  {e.nav}
                </a>
              );
            })}
          </div>
          <div className="lg:block hidden">
            <div className="drop-shadow-[0px_0px_8px_rgba(145,115,209,1)]">
              <button
                onClick={() => browserVersion()}
                className={`bg-[#9173D1] hover:bg-white  duration-300  bg-clip-padding relative text-black py-3 px-7 text-lg font-medium ${sarpanch.className} buttonBefore `}
              >
                Connect Wallet
              </button>
            </div>
          </div>

          <div
            className="block lg:hidden cursor-pointer"
            onClick={() => setIsopen(!isopen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
              fill="white"
            >
              <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
            </svg>
          </div>
        </div>
        {isopen && (
          <div className="absolute top-24 flex flex-col bg-[#140E3A]  w-full z-10 text-end px-24">
            {nav.map((e, i) => {
              return (
                <a
                  key={i}
                  href={`#${e.nav}`}
                  className={`p-5 border-b-2 border-opacity-25 font-clash border-white`}
                >
                  {e.nav}
                </a>
              );
            })}
          </div>
        )}
      </nav>
    </section>
  );
}

export default Navbar;

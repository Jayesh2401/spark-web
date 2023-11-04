import { orbitron, sarpanch } from "@/utils/fonts/fontlist";
import { Links, Marketplace, logoHelper } from "@/utils/helper/data/datahelper";
import { logo } from "@/utils/helper/logo";

function Footer() {
  return (
    <section className=" bg-[#140E3A] ">
      <div className="lg:my-32 sm:my-24 mm:my-16 my-10 container mx-auto">
        <h2
          className={` lg:text-5xl text-3xl font-bold text-center ${orbitron.className}`}
        >
          Get More Updates
        </h2>
        <p
          className={` lg:text-xl text-lg font-normal leading-[1.2] text-center sm:my-14 my-8 ${sarpanch.className}`}
        >
          Join our mailing list to stay in the loop with our newest feature
          releases, NFT drops, and tips and tricks.
        </p>
        <div className=" xl:mb-32 md:mb-24 sm:mb-16 mb-5  xl:pb-32 md:pb-24 sm:pb-16 pb-8 border-b-2 border-opacity-20 border-white ">
          <div className="relative justify-center mx-auto flex lg:w-[70%] items-center">
            <input
              type="email"
              className={` ${orbitron.className}  rounded-full w-full lg:pr-48  sm:pr-36 mm:pr-24 pr-[70px] lg:pl-12 pl-8 sm:py-6 py-4 outline-none text-black  placeholder:text-lg text-xl  bg-white `}
              placeholder="Your Email..."
            />
            <span
              className={`lg:text-xl text-lg hidden sm:block absolute z-[1] bg-[#9173D1] right-2 font-bold cursor-pointer rounded-full px-14 py-5  ${orbitron.className}`}
            >
              I'm In
            </span>
            <span
              className={`lg:text-xl mm:text-base text-xs sm:hidden block absolute z-[1] bg-[#9173D1] right-2 font-bold cursor-pointer rounded-full px-1  sm:py-1  ${orbitron.className}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 -960 960 960"
                width="48"
                fill="white"
                className="mm:w-full md:w-[80%] sm:w-full sm:ml-1"
              >
                <path d="m560-242-43-42 168-168H160v-60h525L516-681l43-42 241 241-240 240Z" />
              </svg>
            </span>
          </div>
        </div>
        <div
          className={` lg:text-xl md:text-base text-sm flex md:justify-between justify-start md:flex-row flex-wrap w-full ${sarpanch.className}`}
        >
          <ul className="md:w-auto mm:w-full w-[90%]">
            <li>{logo}</li>
            <li className="capitalize ">
              <span>the leading NFT Marketplace on Ethereum</span>
              <br />
              <span>Home to the next generation of digital creators.</span>
              <br />

              <span>Discover the best NFT collections.</span>
            </li>

            <li>
              <div>
                <ul className="flex mm:gap-10 gap-5 mt-10">
                  {logoHelper.map((e, i) => {
                    return (
                      <li key={i} className="cursor-pointer">
                        {e.svg}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          </ul>
            <ul className="flex flex-col gap-4 md:mr-0 mm:mr-24 mr-16 ">
              <li className="lg:text-3xl md:text-xl text-base mt-8 lg:mb-8 mb-4">
                Marketplace
              </li>
              {Marketplace.map((e, i) => {
                return (
                  <li key={i} className="text-[#E0E0E0] cursor-pointer">
                    {e.place}
                  </li>
                );
              })}
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="lg:text-3xl md:text-xl text-base mt-8 lg:mb-8 mb-4">
                Links
              </li>
              {Links.map((e, i) => {
                return (
                  <li key={i} className="text-[#E0E0E0] cursor-pointer">
                    {e.place}
                  </li>
                );
              })}
            </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;

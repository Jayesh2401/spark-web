import { audiowide, orbitron, sarpanch } from "@/utils/fonts/fontlist";
import CommonCard from "@/utils/helper/cards/Commoncard";
import { secondsection } from "@/utils/helper/data/datahelper";

function Secondpage() {
  return (
    <section className="w-full container mx-auto lg:mt-10 mt-0 relative h-auto mb-5 second_container">
      <div className="flex w-full xl:flex-row flex-col-reverse pb-10 ">
        <div className="xl:w-[55%] w-full flex mm:flex-row flex-col items-center h-auto gap-9">
          {secondsection.map((e, i) => {
            return (
              <CommonCard
                key={i}
                imageSrc={e.image}
                title={e.title}
                subtitle={e.subtitle}
                currentBid={e.currentBid}
                endingIn={e.endingIn}
                index={i+1}
              />
            );
          })}
        </div>
        <div className="xl:w-[45%] xl:mb-0 mb-10 flex flex-col justify-end 2xl:items-stretch xl:items-end">
          <div
            className={`${sarpanch.className} mb-14 2xl:w-full xl:w-[90%] md:text-base text-sm `}
          >
            NFT stands for non-fungible token. It is a unique digital token that
            is recorded on a blockchain and verifies ownership and authenticity.
            It cannot be copied or replaced by other tokens. It contains
            references to digital files, such as art, music, photos or videos,
            which can be linked to real or imaginary assets. It differs from
            cryptocurrencies, which are fungible and can be exchanged for one
            another. Owning an NFT does not mean having rights to the associated
            file or its use, as this depends on the legal status of the NFT and
            the file. NFTs can be created, sold and exchanged on digital
            markets, where they can have high value or none. NFTs are criticized
            for their environmental impact, as some types of blockchain consume
            a lot of energy and create a large carbon footprint. NFTs are also
            criticized for their speculative nature, as their price can
            fluctuate greatly or fall to zero.
          </div>

          <div
            className={`${orbitron.className} bg-white bg-opacity-10 backdrop-blur-xl buttonBefore py-6 xl:px-20 md:px-36 sm:px-20 mm:px-10 px-8`}
          >
            <div className="md:text-4xl text-2xl font-medium flex justify-between">
              <span className="">21k+</span>
              <span>11k+</span>
              <span>3k+</span>
            </div>
            <div className="text-opacity-60 text-white md:text-base text-sm flex justify-between">
              <span className="">Working</span>
              <span className="md:ml-14 mm:ml-5 ml-2">At the aution</span>
              <span className="md:mr-6 mr-2">Arts</span>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:my-[185px] lg:my-[100px] md:my-[40px] mm:my-[20px] my-[10px] 2xl:w-[70%] mx-auto">
        <div className="flex  md:items-center md:justify-between mx-auto lg:flex-row md:w-full sm:w-1/3 mm:w-5/12 w-6/12 flex-col lg:gap-0 sm:gap-10 gap-5 lg:mb-12 mb-10">
          <img src="/metamask.png" alt="wallets" />
          <img src="/trust.png" alt="wallets" />
          <img src="/wallet.png" alt="wallets" />
        </div>
        <div className="flex  md:items-center md:justify-evenly mx-auto lg:flex-row md:w-full sm:w-1/3 mm:w-5/12 w-6/12 flex-col lg:gap-0 sm:gap-10 gap-5 ">
          <img src="/exodus.png" alt="wallets" />
          <img src="/safe.png" alt="wallets" />
        </div>
      </div>
    </section>
  );
}

export default Secondpage;

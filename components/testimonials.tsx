import Image from "next/image";

import HomeSection from "./home-section";
import HomeSectionTitle from "./home-section-title";

const Testimonials = () => {
  return (
    <HomeSection backgroundColor="bg-white">
      <HomeSectionTitle
        titleName="Témoignages"
        titleColor="text-black"
        icon={
          <Image
            src="/assets/asterisque-anis.png"
            alt="Asterisque"
            width={27}
            height={26}
          />
        }
      />
      <div className="md:grid md:grid-cols-2 md:gap-5 mb-10 md:mb-20">
        <div className="hidden md:flex md:justify-end">
          <div className="h-96 w-1/2 bg-gray-400"></div>
        </div>
        <div className="md:w-2/3 md:pt-7">
          <div className="mb-4">
            <Image
              src="/assets/guillemets.png"
              alt="Guillemets"
              width={74}
              height={58}
            />
          </div>
          <p className="italic font-medium text-xl mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam consectetur adipiscing elit, sed do eiusmod tempor
            incididunt
          </p>
          <p className="relative inline-block font-mono text-xl">
            <span
              aria-hidden="true"
              className="absolute inset-0 mt-3 mb-1 bg-alien"
            ></span>
            <span className="relative">Martin ALLIO</span>
          </p>
          <p className="font-extralight">
            Business developer chez crotte de bique land
          </p>
        </div>
      </div>
      <h2 className="text-center text-4xl leading-10 mb-10 md:mb-20">
        <span className="font-light">Alors, on travaille </span>
        <span className="font-bold text-alien bg-darkGray">ensemble ?</span>
      </h2>
    </HomeSection>
  );
};

export default Testimonials;

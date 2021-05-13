import Image from "next/image";

import Container from "./container";

const Testimonials = () => {
  return (
    <section className="pt-7 pb-28">
      <Container>
        <div className="flex items-center -ml-10 pb-7">
          <div className="flex-shrink-0 flex items-center mr-3">
            <Image
              src="/assets/asterisque-anis.png"
              alt="Asterisque"
              width={27}
              height={26}
            />
          </div>
          <h2 className="font-bold text-4xl">Témoignages</h2>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex justify-end">
            <div className="h-96 w-1/2 bg-gray-400"></div>
          </div>
          <div className="w-2/3 pt-7">
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam consectetur adipiscing elit, sed do eiusmod
              tempor incididunt
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
      </Container>
    </section>
  );
};

export default Testimonials;

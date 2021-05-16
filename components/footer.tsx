import Image from "next/image";

import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-darkGray">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between py-6 md:py-3 text-white ">
          <div className="flex flex-col md:flex-row">
            <span className="flex items-center mr-7 mb-4">
              <div className="flex items-center justify-center w-4">
                <Image
                  src="/assets/geoloc.png"
                  alt="Marqueur"
                  width={12}
                  height={17}
                />
              </div>
              <span className="ml-2 uppercase">Rennes</span>
            </span>
            <a
              href="mailto:claire.birgand@outlook.fr"
              className="flex items-center mr-7 mb-4"
            >
              <div className="flex items-center justify-center w-4">
                <Image
                  src="/assets/asterisque-anis-small.png"
                  alt="Asterisque"
                  width={14}
                  height={13}
                />
              </div>
              <span className="ml-2 uppercase">claire.birgand@outlook.fr</span>
            </a>
            <a href="tel:0632000112" className="flex items-center mb-4">
              <div className="flex items-center justify-center w-4">
                <Image
                  src="/assets/asterisque-anis-small.png"
                  alt="Asterisque"
                  width={14}
                  height={13}
                />
              </div>
              <span className="ml-2">06 32 00 01 12</span>
            </a>
          </div>
          <div className="mt-4">© Claire Birgand</div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

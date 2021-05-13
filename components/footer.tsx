import Image from "next/image";

import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-darkGray">
      <Container>
        <div className="py-3 text-white flex justify-between">
          <div className="flex">
            <span className="flex items-center mr-7">
              <Image
                src="/assets/geoloc.png"
                alt="Marqueur"
                width={12}
                height={17}
              />
              <span className="ml-2 uppercase">Rennes</span>
            </span>
            <a
              href="mailto:claire.birgand@outlook.fr"
              className="flex items-center mr-7"
            >
              <Image
                src="/assets/asterisque-anis-small.png"
                alt="Asterisque"
                width={14}
                height={13}
              />
              <span className="ml-2 uppercase">claire.birgand@outlook.fr</span>
            </a>
            <a href="tel:0632000112" className="flex items-center">
              <Image
                src="/assets/asterisque-anis-small.png"
                alt="Asterisque"
                width={14}
                height={13}
              />
              <span className="ml-2">06 32 00 01 12</span>
            </a>
          </div>
          <div>© Claire Birgand</div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

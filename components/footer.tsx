import Image from "next/image";

import Container from "./container";
import FooterItem from "./footer-item";

const Footer = () => {
  return (
    <footer className="bg-darkGray">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between py-6 md:py-3 text-white ">
          <div className="flex flex-col md:flex-row">
            <span className="mr-7 mb-4">
              <FooterItem
                title="Rennes"
                icon={
                  <Image
                    src="/assets/geoloc.png"
                    alt="Marqueur"
                    width={12}
                    height={17}
                  />
                }
              />
            </span>
            <a className="mr-7 mb-4" href="mailto:claire.birgand@outlook.fr">
              <FooterItem
                title="claire.birgand@outlook.fr"
                icon={
                  <Image
                    src="/assets/asterisque-anis-small.png"
                    alt="Asterisque"
                    width={14}
                    height={13}
                  />
                }
              />
            </a>
            <a className="mb-4" href="tel:0632000112">
              <FooterItem
                title="06 32 00 01 12"
                icon={
                  <Image
                    src="/assets/asterisque-anis-small.png"
                    alt="Asterisque"
                    width={14}
                    height={13}
                  />
                }
              />
            </a>
          </div>
          <div className="mt-4 md:mt-0">© Claire Birgand</div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

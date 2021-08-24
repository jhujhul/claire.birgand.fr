import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

import Container from "./container";
import FooterItem from "./footer-item";
import config from "../data/config.json";

const { email, ville, telephone } = config;

let telephoneString = "";
for (let i = 0; i < 5; i++) {
  telephoneString += telephone.slice(i * 2, i * 2 + 2) + " ";
}

const Footer: FunctionComponent = () => {
  return (
    <footer className="bg-darkGray">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between py-6 md:py-3 text-white ">
          <div className="flex flex-col md:flex-row">
            <span className="md:mr-7 mb-4 md:mb-0">
              <FooterItem
                title={ville}
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
            <a className="md:mr-7 mb-4 md:mb-0" href={`mailto:${email}`}>
              <FooterItem
                title={email}
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
            <a className="mb-4 md:mb-0" href={`tel:${telephone}`}>
              <FooterItem
                title={telephoneString}
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
          <Link href="/mentions-legales">
            <div className="mt-4 md:mt-0 cursor-pointer">© Claire Birgand</div>
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

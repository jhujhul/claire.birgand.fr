import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import LinkIcon from "./link-icon";
import LinkText from "./link-text";
import Container from "./container";

const links = [
  {
    name: "à propos",
    href: "/a-propos",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
const mobileLinks = [
  {
    name: "Home",
    href: "/",
  },
  ...links,
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  let closeDialobButtonRef = useRef(null);

  return (
    <Container>
      <nav className="pt-5 md:pt-12 pb-16">
        <div className="flex items-start md:items-center justify-between">
          <Link href="/">
            <a className="w-36 md:w-56">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={220}
                height={131}
              />
            </a>
          </Link>
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md text-black hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={() => setIsOpen(true)}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden md:flex items-center md:ml-10 md:pr-4">
            <div className="md:space-x-9 mr-9">
              {links.map(({ href, name }) => (
                <LinkText key={href} href={href} name={name} />
              ))}
            </div>
            <div className="md:space-x-1">
              <LinkIcon name="Mail">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </LinkIcon>
              <LinkIcon name="Linkedin">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </LinkIcon>
            </div>
          </div>
        </div>
      </nav>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-10 inset-0 overflow-y-auto bg-white pt-5"
        initialFocus={closeDialobButtonRef}
      >
        <Container>
          <div className="flex flex-row-reverse">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md text-black hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={() => setIsOpen(false)}
              aria-controls="mobile-menu"
              aria-expanded="false"
              ref={closeDialobButtonRef}
            >
              <span className="sr-only">Fermer le menu principal</span>
              <XIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col items-center mt-20">
            {mobileLinks.map(({ href, name }) => (
              <div key={href} className="mb-12">
                <LinkText href={href} name={name} />
              </div>
            ))}
          </div>
        </Container>
      </Dialog>
    </Container>
  );
};

export default Header;

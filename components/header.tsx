import Image from "next/image";
import Link from "next/link";
import LinkIcon from "./link-icon";
import LinkText from "./link-text";
import Container from "./container";

const Header = () => {
  return (
    <Container>
      <div className="pt-12 pb-16">
        <nav className="flex items-center justify-between" aria-label="Global">
          <Link href="/">
            <a>
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={220}
                height={131}
              />
            </a>
          </Link>
          <div className="hidden md:flex items-center md:ml-10 md:pr-4">
            <div className="md:space-x-9 mr-9">
              <LinkText href="/a-propos" name="à propos" />
              <LinkText href="/portfolio" name="Portfolio" />
              <LinkText href="/contact" name="Contact" />
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
        </nav>
      </div>
    </Container>
  );
};

export default Header;

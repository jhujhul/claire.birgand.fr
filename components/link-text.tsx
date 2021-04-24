import Link from "next/link";
import { FunctionComponent } from "react";

interface LinkTextProps {
  href: string;
  name: string;
}
const LinkText: FunctionComponent<LinkTextProps> = (props) => {
  const { href, name } = props;

  return (
    <Link href={href}>
      <a className="font-light text-black hover:text-gray-900 text-lg leading-5 uppercase">
        {name}
      </a>
    </Link>
  );
};

export default LinkText;

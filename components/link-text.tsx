import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

interface LinkTextProps {
  href: string;
  name: string;
}
const LinkText: FunctionComponent<LinkTextProps> = (props) => {
  const { href, name } = props;
  const router = useRouter();

  const isActive = router.asPath === href;
  const className = classNames(
    "font-light text-black hover:text-gray-900 text-lg leading-5 uppercase",
    { "border-b border-black": isActive }
  );

  return (
    <Link href={href}>
      <a className={className}>{name}</a>
    </Link>
  );
};

export default LinkText;

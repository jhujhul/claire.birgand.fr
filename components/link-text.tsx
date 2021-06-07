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

  const isActive =
    router.asPath === href ||
    // ugly but handles portofolio dynamic pages
    [router.asPath, href].every((path) => path.includes("/portfolio"));
  const className = classNames("link font-light text-black text-lg uppercase", {
    "link-active": isActive,
  });

  return (
    <Link href={href}>
      <a className={className}>{name}</a>
    </Link>
  );
};

export default LinkText;

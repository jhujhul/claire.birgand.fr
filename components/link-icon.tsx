import { FunctionComponent } from "react";

interface LinkIconProps {
  name: string;
  href: string;
}
const LinkIcon: FunctionComponent<LinkIconProps> = (props) => {
  const { children, name, href } = props;

  return (
    <a
      type="button"
      className="rounded-full h-8 w-8 inline-flex items-center justify-center border border-black text-back focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
      aria-expanded="false"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="sr-only">{name}</span>
      {children}
    </a>
  );
};

export default LinkIcon;

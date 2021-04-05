import { FunctionComponent } from "react";

interface LinkIconProps {
  name: string;
}
const LinkIcon: FunctionComponent<LinkIconProps> = (props) => {
  const { children, name } = props;

  return (
    <button
      type="button"
      className="rounded-full h-7 w-7 inline-flex items-center justify-center border border-black text-back focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
      aria-expanded="false"
    >
      <span className="sr-only">{name}</span>
      {children}
    </button>
  );
};

export default LinkIcon;

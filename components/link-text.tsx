import { FunctionComponent } from "react";

interface LinkTextProps {
  name: string;
}
const LinkText: FunctionComponent<LinkTextProps> = (props) => {
  const { name } = props;

  return (
    <a
      href="#"
      className="font-light text-black hover:text-gray-900 text-lg leading-5 uppercase"
    >
      {name}
    </a>
  );
};

export default LinkText;

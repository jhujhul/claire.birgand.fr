import { FunctionComponent } from "react";

interface Props {
  title: string;
  icon: JSX.Element;
}
const FooterItem: FunctionComponent<Props> = (props) => {
  const { icon, title } = props;

  return (
    <span className="flex items-center">
      <div className="flex items-center justify-center w-4">{icon}</div>
      <span className="ml-2">{title}</span>
    </span>
  );
};

export default FooterItem;

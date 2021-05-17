import { FunctionComponent } from "react";

interface Props {
  titleName: string;
  titleColor: string;
  icon: JSX.Element;
}
const HomeSectionTitle: FunctionComponent<Props> = (props) => {
  const { titleColor, titleName, icon } = props;

  return (
    <div className="flex items-center md:-ml-10 pb-7">
      <div className="hidden md:flex flex-shrink-0 items-center mr-2 pl-1">
        {icon}
      </div>
      <h2 className={`${titleColor} font-bold text-3xl md:text-4xl`}>
        {titleName}
      </h2>
    </div>
  );
};

export default HomeSectionTitle;

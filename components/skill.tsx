import Image from "next/image";
import { FunctionComponent } from "react";

import { useMediaQuery } from "../hooks/useMediaQuery";

interface SkillProps {
  name: string;
}
const Skill: FunctionComponent<SkillProps> = (props) => {
  const { children, name } = props;
  const isMdOrLarger = useMediaQuery("(min-width: 768px)");

  const title = (
    <h3 className="relative inline-block font-mono text-4xl leading-9">
      <span
        aria-hidden="true"
        className="absolute inset-0 mt-3 mb-1 bg-alien"
      ></span>
      <span className="relative">{name}</span>
    </h3>
  );

  return (
    <div
      style={{
        backgroundImage: isMdOrLarger
          ? "url(/assets/double-trait.png)"
          : "none",
      }}
      className="pl-8 mb-10 md:mb-0 bg-none md:max-w-xs md:flex md:bg-left md:bg-no-repeat md:bg-contain md:pl-9 md:pt-2 md:pb-4"
    >
      <div>
        <div className="flex items-center -ml-8 mb-3 md:block md:ml-0 md:mb-6">
          {!isMdOrLarger && (
            <div className="flex-shrink-0 flex items-center justify-center mr-3 w-5 h-5">
              <Image
                src="/assets/asterisque-anis.png"
                alt="Asterisque"
                width={27}
                height={26}
              />
            </div>
          )}
          {title}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Skill;

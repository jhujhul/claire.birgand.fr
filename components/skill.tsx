import { FunctionComponent } from "react";

interface SkillProps {
  name: string;
}
const Skill: FunctionComponent<SkillProps> = (props) => {
  const { children, name } = props;

  return (
    <div
      className="max-w-xs flex bg-left bg-no-repeat bg-contain pl-9 pt-2 pb-4"
      style={{ backgroundImage: "url(/assets/blog/double-trait.png)" }}
    >
      <div>
        <h3 className="relative inline-block font-mono text-4xl leading-9 mb-6">
          <span
            aria-hidden="true"
            className="absolute inset-0 mt-3 mb-1 bg-alien"
          ></span>
          <span className="relative">{name}</span>
        </h3>
        {children}
      </div>
    </div>
  );
};

export default Skill;

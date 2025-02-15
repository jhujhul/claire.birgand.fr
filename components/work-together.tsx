import Link from "next/link";
import { FunctionComponent } from "react";
import config from "../data/config.json";

const { email } = config;

const WorkTogether: FunctionComponent = () => {
  return (
    <div className="text-center">
      {/* <Link href="/contact" legacyBehavior>
        <a className="text-4xl leading-snug"> */}
      <a
        className="text-4xl leading-snug cursor-pointer"
        href={`mailto:${email}`}
      >
        <span className="font-light">Alors, on travaille </span>
        <span className="font-bold text-alien bg-darkGray">
          &nbsp;ensemble ?&nbsp;
        </span>
      </a>
      {/* </a>
      </Link> */}
    </div>
  );
};

export default WorkTogether;

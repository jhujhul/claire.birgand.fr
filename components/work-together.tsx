import Link from "next/link";
import { FunctionComponent } from "react";

const WorkTogether: FunctionComponent = () => {
  return (
    <div className="text-center">
      {/* <Link href="/contact">
        <a className="text-4xl leading-snug"> */}
      <h2 className="text-4xl leading-snug">
        <span className="font-light">Alors, on travaille </span>
        <span className="font-bold text-alien bg-darkGray">
          &nbsp;ensemble ?&nbsp;
        </span>
      </h2>
      {/* </a>
      </Link> */}
    </div>
  );
};

export default WorkTogether;

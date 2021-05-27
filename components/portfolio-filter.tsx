import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

const PATHNAME = "/portfolio";

interface Props {
  name: string;
  filter?: string;
}
const PortfolioFilter: FunctionComponent<Props> = (props) => {
  const { name, filter } = props;
  const router = useRouter();

  const href = filter ? `${PATHNAME}?filter=${filter}` : PATHNAME;
  const isActive = filter === router.query.filter;

  return (
    <li>
      <Link href={href}>
        <a className="relative inline-block font-mono text-4xl">
          {isActive && (
            <span
              aria-hidden="true"
              className="absolute inset-0 mt-3 mb-1 bg-alien"
            ></span>
          )}
          <span className="relative">{name}</span>
        </a>
      </Link>
    </li>
  );
};

export default PortfolioFilter;

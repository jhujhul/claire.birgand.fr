import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { Category } from "../types";

interface Props {
  category: Category;
}
const PortfolioFilter: FunctionComponent<Props> = (props) => {
  const { category } = props;
  const router = useRouter();

  const isActive = category.id === router.query.categoryId;

  return (
    <li>
      <Link href={`/portfolio/${category.id}`}>
        <a className="relative inline-block font-mono text-4xl">
          {isActive && (
            <span
              aria-hidden="true"
              className="absolute inset-0 mt-3 mb-1 bg-alien"
            ></span>
          )}
          <span className="relative">{category.name}</span>
        </a>
      </Link>
    </li>
  );
};

export default PortfolioFilter;

import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { Category } from "../types";
import HighlightedText from "./highlighted-text";

interface Props {
  category: Category;
}
const PortfolioFilter: FunctionComponent<Props> = (props) => {
  const { category } = props;
  const router = useRouter();

  const isActive = category.id === router.query.categoryId;

  return (
    <li>
      <Link href={`/portfolio/${category.id}`} legacyBehavior>
        <a className="inline-block font-mono text-3xl">
          {isActive ? (
            <HighlightedText>{category.name}</HighlightedText>
          ) : (
            category.name
          )}
        </a>
      </Link>
    </li>
  );
};

export default PortfolioFilter;

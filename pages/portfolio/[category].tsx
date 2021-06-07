import Head from "next/head";
import { FunctionComponent } from "react";
import Container from "../../components/container";
import Layout from "../../components/layout";
import PortfolioFilter from "../../components/portfolio-filter";
import ProjectList from "../../components/project-list";
import WorkTogether from "../../components/work-together";
import { getAllProjects, getProjectCategories } from "../../lib/api";
import { Category, CATEGORY_ALL, Project } from "../../types";

interface Props {
  projects: Project[];
  categories: Category[];
}
const Portfolio: FunctionComponent<Props> = (props) => {
  const { projects, categories } = props;

  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Container>
        <div className="flex justify-center mb-7">
          <ul className="flex justify-center flex-wrap">
            <div className="mx-4">
              <PortfolioFilter category={CATEGORY_ALL} />
            </div>
            {categories.map((category) => (
              <div key={category.id} className="mx-4">
                <PortfolioFilter category={category} />
              </div>
            ))}
          </ul>
        </div>
        <div className="mb-16">
          <ProjectList projects={projects} descriptionColor="text-black" />
        </div>
        <div className="mb-10 md:mb-20">
          <WorkTogether />
        </div>
      </Container>
    </Layout>
  );
};

export default Portfolio;

type Params = {
  params: {
    category: string;
  };
};
export const getStaticProps = async ({ params }: Params) => {
  const projects = await getAllProjects({
    onlyFeatured: false,
    categoryId: params.category,
  });
  const categories = await getProjectCategories();

  return {
    props: { projects, categories },
  };
};

export async function getStaticPaths() {
  const categories = await getProjectCategories();

  return {
    paths: [...categories, CATEGORY_ALL].map((category) => {
      return {
        params: {
          category: category.id,
        },
      };
    }),
    fallback: false,
  };
}

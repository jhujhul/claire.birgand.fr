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
  currentCategory: Category;
}
const Portfolio: FunctionComponent<Props> = (props) => {
  const { projects, categories } = props;

  return (
    <Layout>
      <Head>
        <title>
          Portfolio : Claire Birgand : graphisme, design, lettering à Rennes
        </title>
        <meta
          name="description"
          content={`Portfolio : Claire Birgand : graphisme, design, lettering à Rennes`}
        />
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
    categoryId: string;
  };
};
export const getStaticProps = async ({ params }: Params) => {
  const { categoryId } = params;
  const projects = await getAllProjects({
    onlyFeatured: false,
    categoryId,
  });
  const categories = await getProjectCategories();
  const currentCategory = [...categories, CATEGORY_ALL].find(
    (c) => c.id === categoryId
  ) as Category;

  return {
    props: { projects, categories, currentCategory },
  };
};

export async function getStaticPaths() {
  const categories = await getProjectCategories();

  const paths = [...categories, CATEGORY_ALL].map((category) => ({
    params: {
      categoryId: category.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

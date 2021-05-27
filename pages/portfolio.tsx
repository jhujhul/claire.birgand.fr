import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import PortfolioFilter from "../components/portfolio-filter";
import ProjectList from "../components/project-list";
import { getAllProjects } from "../lib/api";
import { Project } from "../types";

interface Props {
  projects: Project[];
}
const Portfolio: FunctionComponent<Props> = (props) => {
  const { projects } = props;
  console.log("🚀 ~ file: portfolio.tsx ~ line 17 ~ projects", projects);
  const router = useRouter();
  console.log(
    "🚀 ~ file: portfolio.tsx ~ line 8 ~ Portfolio ~ query",
    router.query
  );
  console.log(
    "🚀 ~ file: portfolio.tsx ~ line 8 ~ Portfolio ~ pathname",
    router
  );

  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Container>
        <div className="flex justify-center mb-7">
          <ul className="flex gap-9">
            <PortfolioFilter name="Tout" />
            <PortfolioFilter name="Graphisme" filter="graphisme" />
            <PortfolioFilter name="Lettering" filter="lettering" />
            <PortfolioFilter name="Design" filter="design" />
          </ul>
        </div>
        <ProjectList projects={projects} />
      </Container>
    </Layout>
  );
};

export default Portfolio;

export const getStaticProps = async () => {
  const projects = await getAllProjects({ onlyFeatured: false });

  return {
    props: { projects },
  };
};

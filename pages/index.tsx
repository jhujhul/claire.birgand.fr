import { FunctionComponent } from "react";
import Head from "next/head";

import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllProjects } from "../lib/api";
import ProjectSelection from "../components/project-selection";
import Testimonials from "../components/testimonials";
import { Project } from "../types";

interface Props {
  projects: Project[];
}
const Index: FunctionComponent<Props> = (props) => {
  const { projects } = props;

  return (
    <Layout>
      <Head>
        <title>Intro</title>
      </Head>
      <Intro />
      <ProjectSelection projects={projects} />
      <Testimonials />
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const projects = await getAllProjects({ onlyFeatured: true });

  return {
    props: { projects },
  };
};

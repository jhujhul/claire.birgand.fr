import { FunctionComponent } from "react";
import Head from "next/head";

import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllProjects, getAllTestimonials } from "../lib/api";
import ProjectSelection from "../components/project-selection";
import Testimonials from "../components/testimonials";
import { Project, Testimonial } from "../types";

interface Props {
  projects: Project[];
  testimonials: Testimonial[];
}
const Index: FunctionComponent<Props> = (props) => {
  const { projects, testimonials } = props;

  return (
    <Layout>
      <Head>
        <title>Claire Birgand : graphiste freelance à Rennes</title>
        <meta
          name="description"
          content="Graphiste freelance à Rennes, je vous accompagne dans la création de vos supports de communication : logo, affiche, vitrophanie, newsletter, lettering, goodie..."
        />
      </Head>
      <Intro />
      <ProjectSelection projects={projects} />
      <Testimonials testimonials={testimonials} />
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const projects = await getAllProjects({ onlyFeatured: true });
  const testimonials = await getAllTestimonials();

  return {
    props: { projects, testimonials },
  };
};

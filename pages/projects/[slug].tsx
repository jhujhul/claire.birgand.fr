import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { FunctionComponent } from "react";

import Container from "../../components/container";
import Layout from "../../components/layout";
import { getAllProjects, getProjectBySlug } from "../../lib/api";
import { Project } from "../../types";
import WorkTogether from "../../components/work-together";
import Section from "../../components/section";
import HighlightedText from "../../components/highlighted-text";

type Props = {
  project: Project;
};
const ProjectComponent: FunctionComponent<Props> = (props) => {
  const { project } = props;

  const router = useRouter();
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Container>
        <div className="flex justify-center mb-8 lg:mb-12">
          <h1 className="font-mono text-4xl leading-9 text-center">
            <HighlightedText>{project.title}</HighlightedText>
          </h1>
        </div>

        {project.sections.map((section) => (
          <Section key={section.title} section={section} />
        ))}
        <div className="mb-10 lg:mb-20">
          <WorkTogether />
        </div>
      </Container>
    </Layout>
  );
};

export default ProjectComponent;

type Params = {
  params: {
    slug: string;
  };
};
export async function getStaticProps({ params }: Params) {
  const project = await getProjectBySlug(params.slug);

  return {
    props: {
      project: {
        ...project,
      },
    },
  };
}

export async function getStaticPaths() {
  const projects = await getAllProjects({ onlyFeatured: false });

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
}

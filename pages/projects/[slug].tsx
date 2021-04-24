import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getAllProjects, getProjectBySlug } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";
import { FunctionComponent } from "react";
import { Project } from "../../types";

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
        {project.title}
        <div dangerouslySetInnerHTML={{ __html: project.content }} />
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
  const content = await markdownToHtml(project.content || "");

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const projects = await getAllProjects();

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

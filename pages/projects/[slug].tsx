import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { FunctionComponent } from "react";
import Image from "next/image";

import Container from "../../components/container";
import Layout from "../../components/layout";
import { getAllProjects, getProjectBySlug } from "../../lib/api";
import { Project } from "../../types";

type Props = {
  project: Project;
};
const ProjectComponent: FunctionComponent<Props> = (props) => {
  const { project } = props;
  console.log("🚀 ~ file: [slug].tsx ~ line 17 ~ project", project);

  const router = useRouter();
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Container>
        {project.title}
        <div className="h-96 w-full relative">
          <Image src={project.mainImage} layout="fill" objectFit="contain" />
        </div>
        {project.sections.map((section) => {
          return (
            <div>
              <div>{section.title}</div>
              <div>{section.description}</div>

              {section.images.map((image) => (
                <div className="h-96 w-full relative">
                  <Image src={image} layout="fill" objectFit="contain" />
                </div>
              ))}
            </div>
          );
        })}
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
  const projects = await getAllProjects();
  console.log(
    "🚀 ~ file: [slug].tsx ~ line 74 ~ getStaticPaths ~ projects",
    projects
  );

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

import { FunctionComponent } from "react";
import Head from "next/head";

import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllProjects } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import ProjectSelection from "../components/project-selection";
import Testimonials from "../components/testimonials";
import { Project } from "../types";

interface Props {
  projects: Project[];
}
const Index: FunctionComponent<Props> = (props) => {
  const { projects } = props;
  // const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Intro />
        <ProjectSelection projects={projects} />
        <Testimonials />
        {/* {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const projects = await getAllProjects();

  return {
    props: { projects },
  };
};

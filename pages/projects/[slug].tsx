import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { FunctionComponent } from "react";
import Image from "next/image";
import Carousel from "nuka-carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import classNames from "classnames";

import Container from "../../components/container";
import Layout from "../../components/layout";
import { getAllProjects, getProjectBySlug } from "../../lib/api";
import { Project } from "../../types";
import WorkTogether from "../../components/work-together";
import { useMediaQuery } from "../../hooks/useMediaQuery";

type Props = {
  project: Project;
};
const ProjectComponent: FunctionComponent<Props> = (props) => {
  const { project } = props;
  const isLgOrLarger = useMediaQuery("(min-width: 1024px)");

  const router = useRouter();
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Container>
        <div className="flex justify-center mb-8 lg:mb-12">
          <h1 className="relative inline-block font-mono text-4xl leading-9 text-center">
            <span
              aria-hidden="true"
              className="absolute inset-0 mt-3 mb-1 bg-alien"
            ></span>
            <span className="relative">{project.title}</span>
          </h1>
        </div>

        {project.sections.map((section) => (
          <div
            key={section.title}
            className="flex flex-col lg:flex-row mb-12 lg:mb-20"
          >
            <div className="flex-shrink-0 lg:mr-2 xl:mr-16 pl-6 mb-4 lg:mb-0 lg:w-96">
              <div className="flex items-center -ml-6 mb-2">
                <div className="flex flex-shrink-0 items-center mr-2">
                  <Image
                    src="/assets/asterisque-anis.png"
                    alt="Asterisque"
                    width={15}
                    height={14}
                  />
                </div>
                <div className="font-bold text-xl">{section.title}</div>
              </div>
              <div className="font-normal">{section.description}</div>
            </div>

            <div className="w-full lg:px-8">
              <Carousel
                wrapAround={true}
                renderBottomCenterControls={(props) => {
                  const { slideCount, currentSlide, goToSlide } = props;

                  return (
                    <div className="flex lg:hidden mt-8">
                      {Array.from(Array(slideCount).keys()).map((i) => {
                        const isActive = currentSlide === i;
                        const className = classNames(
                          "rounded-full bg-gray-400 w-2 h-2 cursor-pointer mr-1",
                          {
                            "bg-alien": isActive,
                          }
                        );

                        return (
                          <div
                            key={i}
                            className={className}
                            onClick={() => goToSlide(i)}
                          ></div>
                        );
                      })}
                    </div>
                  );
                }}
                renderCenterLeftControls={({ previousSlide }) => (
                  <button
                    onClick={previousSlide}
                    className="hidden lg:inline-block"
                    aria-label="Image précédente"
                  >
                    <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
                  </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button
                    onClick={nextSlide}
                    className="hidden lg:inline-block"
                    aria-label="Image suivante"
                  >
                    <ChevronRightIcon className="h-6 w-6 text-gray-600" />
                  </button>
                )}
                getControlsContainerStyles={(key) => {
                  switch (key) {
                    case "BottomCenter":
                      return {
                        bottom: "-16px",
                      };
                    case "CenterLeft":
                      return {
                        left: "-32px",
                      };
                    case "CenterRight":
                      return {
                        right: "-32px",
                      };
                    default:
                      return {};
                  }
                }}
                withoutControls={section.images.length <= 1}
                dragging={section.images.length > 1}
                swiping={section.images.length > 1}
              >
                {section.images.map((image) => (
                  <div
                    key={image}
                    // style={{ height: "600px" }}
                    // style={{ paddingBottom: "100%" }}
                    className="project-image"
                  >
                    <Image
                      key={image}
                      src={image}
                      layout="fill"
                      objectFit="contain"
                      alt={`${section.title} image`}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
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

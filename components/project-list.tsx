import Image from "next/image";
import { FunctionComponent } from "react";

import { Project } from "../types";

interface Props {
  projects: Project[];
  descriptionColor?: string;
}
const ProjectList: FunctionComponent<Props> = (props) => {
  const { projects, descriptionColor = "text-white" } = props;

  return (
    <div className="md:grid md:grid-cols-3 md:gap-x-8">
      {projects.map((project) => {
        const {
          title,
          subtitle = "Les réalisations",
          slug,
          mainImage,
        } = project;

        return (
          <div className="mb-4" key={slug}>
            {/* <Link as={`/projects/${slug}`} href="/projects/[slug]">
              <a> */}
            <div
              className="relative bg-gray-400 mb-2"
              style={{ paddingBottom: "100%" }}
            >
              {mainImage && (
                <Image
                  src={mainImage}
                  layout="fill"
                  objectFit="cover"
                  className="hover:opacity-75 transition-opacity duration-300"
                />
              )}
            </div>
            <p
              className={`${descriptionColor} font-medium text-center uppercase line leading-tight`}
            >
              {title}
            </p>
            <p
              className={`${descriptionColor} italic text-center leading-tight`}
            >
              {subtitle}
            </p>
            {/* </a>
            </Link> */}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;

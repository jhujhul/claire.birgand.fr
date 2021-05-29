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
    <div className="md:grid md:grid-cols-3 md:gap-4">
      {projects.map((project) => {
        const { title, slug, mainImage } = project;

        return (
          <div className="mb-2" key={slug}>
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
            <p className={`${descriptionColor} italic text-center uppercase`}>
              {title}
            </p>
            <p className={`${descriptionColor} italic text-center`}>
              Les réalisations
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

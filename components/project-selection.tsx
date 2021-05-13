import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

import { Project } from "../types";
import Container from "./container";

interface Props {
  projects: Project[];
}
const ProjectSelection: FunctionComponent<Props> = (props) => {
  const { projects } = props;

  return (
    <section className="bg-darkGray pt-7 pb-4">
      <Container>
        <div className="flex items-center -ml-10 pb-7">
          <div className="flex-shrink-0 flex items-center mr-3">
            <Image
              src="/assets/blog/asterisque-blanche.png"
              alt="Asterisque"
              width={27}
              height={26}
            />
          </div>
          <h2 className="font-bold text-alien text-4xl">
            Sélection de projets
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {projects.map((project) => {
            const { title, slug } = project;

            return (
              <Link
                as={`/projects/${slug}`}
                href="/projects/[slug]"
                key={title}
              >
                <a>
                  <div
                    className="relative bg-gray-400 mb-2"
                    style={{ paddingBottom: "100%" }}
                  >
                    <Image
                      src={project.mainImage}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="text-white italic text-center uppercase">
                    {title}
                  </p>
                  <p className="text-white italic text-center">
                    Les réalisations
                  </p>
                </a>
              </Link>
            );
          })}
        </div>
        <div className="text-center">
          <a href="#" className="text-alien">
            <span className="font-extralight text-lg leading-5">
              Voir toutes mes
            </span>
            <span className="font-mono text-2xl leading-7"> réalisations</span>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default ProjectSelection;

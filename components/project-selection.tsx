import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

import { Project } from "../types";
import HomeSection from "./home-section";
import HomeSectionTitle from "./home-section-title";
import ProjectList from "./project-list";

interface Props {
  projects: Project[];
}
const ProjectSelection: FunctionComponent<Props> = (props) => {
  const { projects } = props;

  return (
    <HomeSection backgroundColor="bg-darkGray">
      <HomeSectionTitle
        titleName="Sélection de projets"
        titleColor="text-alien"
        icon={
          <Image
            src="/assets/asterisque-blanche.png"
            alt="Asterisque"
            width={27}
            height={26}
          />
        }
      />
      <ProjectList projects={projects} />
      <div className="text-center">
        <Link href="/portfolio">
          <a className="text-alien">
            <span className="font-extralight text-lg leading-5">
              Voir toutes mes
            </span>
            <span className="font-mono text-2xl leading-7"> réalisations</span>
          </a>
        </Link>
      </div>
    </HomeSection>
  );
};

export default ProjectSelection;

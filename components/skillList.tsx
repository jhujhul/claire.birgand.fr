import { FunctionComponent } from "react";

import Skill from "./skill";

const SkillList: FunctionComponent = () => {
  return (
    <div className="mt-8 flex flex-col items-center md:flex-row md:justify-around md:items-start md:mb-20">
      <Skill name="Graphisme">
        <p>
          <span className="font-bold">Print :</span> je conçois des affiches,
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          flyers, plaquettes, cartes de visite, cartons d'invitation, menus,
          faire-part, vitrophanies...
        </p>
        <p>
          <span className="font-bold">Web :</span> je réalise des newsletters,
          visuels réseaux sociaux, powerpoints...
        </p>
      </Skill>
      <Skill name="Lettering">
        <p>
          Je crée des lettrages (dessins des lettres) que ce soit pour un logo,
          un <span className="whitespace-nowrap">t-shirt</span>, une vitrine...
        </p>
      </Skill>
      <Skill name="Design">
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          J'élabore des prototypes de goodies (badge, figurine, porte-clé...),
          décorations en bois, platisque ou encore mousse.
        </p>
      </Skill>
    </div>
  );
};

export default SkillList;

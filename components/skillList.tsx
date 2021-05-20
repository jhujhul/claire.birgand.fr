import { FunctionComponent } from "react";

import Skill from "./skill";

const SkillList: FunctionComponent = () => {
  return (
    <div className="mt-8 flex flex-col items-center md:flex-row md:justify-around md:items-start md:mb-20">
      <Skill name="Graphisme">
        <p>
          <span className="font-bold">Print :</span> Affiche, flyer, plaquette,
          carte de visite, carton d’invitation, menu, faire-part, vitrophanie...
        </p>
        <p>
          <span className="font-bold">Web :</span> newsletter, visuel réseaux
          sociaux, powerpoint...
        </p>
      </Skill>
      <Skill name="Lettering">
        <p>
          Je crée des lettrages (dessins des lettres) que ce soit pour un logo,
          un t-shirt, une vitrine...
        </p>
      </Skill>
      <Skill name="Design">
        <p>
          Je réalisé des prototypes de goodies (badge, figurine, porte-clé...),
          décorations en bois, platisque ou encore mousse.
        </p>
      </Skill>
    </div>
  );
};

export default SkillList;

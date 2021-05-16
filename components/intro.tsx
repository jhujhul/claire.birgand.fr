import { FunctionComponent } from "react";

import Container from "./container";
import SkillList from "./skillList";
import Wishes from "./wishes";

const Intro: FunctionComponent = () => {
  return (
    <section className="text-darkGray text-lg md:text-base">
      <Container>
        <h1 className="mb-3">Bonjour :)</h1>
        <Wishes />
        <p>Vous êtes au bon endroit !</p>
        <p>
          Je vous accompagne dans la réalisation de vos projets graphiques en
          tout genre
        </p>
        <p>(peu importe le format ou le secteur d’activité).</p>
        <SkillList />
      </Container>
    </section>
  );
};

export default Intro;

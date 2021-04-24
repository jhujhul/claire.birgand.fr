import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Container from "./container";
import Skill from "./skill";

const Intro = () => {
  const wishEl = useRef<HTMLElement | null>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        "une carte de visite ?",
        "un costume de l'espace ?",
        "de l'eau bien fraiche ?",
        "un gros calin ?",
      ],
      typeSpeed: 20,
      backSpeed: 20,
      backDelay: 1200,
      startDelay: 600,
      loop: true,
    };
    typed.current = new Typed(wishEl.current as HTMLElement, options);

    return function cleanup() {
      typed.current?.destroy();
    };
  }, []);

  return (
    <section className="text-darkGray">
      <Container>
        <h1 className="mb-3">Bonjour :)</h1>
        <h2 className="text-4xl leading-10 mb-3">
          <span className="font-light">Vous souhaitez créer</span>{" "}
          <span className="font-bold text-alien bg-darkGray" ref={wishEl} />
        </h2>
        <p>Vous êtes au bon endroit !</p>
        <p>
          Je vous accompagne dans la réalisation de vos projets graphiques en
          tout genre
        </p>
        <p>(peu importe le format ou le secteur d’activité).</p>
        <div className="mt-8 flex justify-around items-start mb-20">
          <Skill name="Graphisme">
            <p>
              <span className="font-bold">Print :</span> Affiche, flyer,
              plaquette, carte de visite, carton d’invitation, menu, faire-part,
              vitrophanie...
            </p>
            <p>
              <span className="font-bold">Web :</span> newsletter, visuel
              réseaux sociaux, powerpoint...
            </p>
          </Skill>
          <Skill name="Lettering">
            <p>
              Je crée des lettrages (dessins des lettres) que ce soit pour un
              logo, un t-shirt, une vitrine...
            </p>
          </Skill>
          <Skill name="Design">
            <p>
              Je réalisé des prototypes de goodies (badge, figurine,
              porte-clé...), décorations en bois, platisque ou encore mousse.
            </p>
          </Skill>
        </div>
      </Container>
    </section>
  );
};

export default Intro;

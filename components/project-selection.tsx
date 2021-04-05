import Image from "next/image";

import Container from "./container";

const ProjectSelection = () => {
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
          <div>
            <div
              className="bg-gray-400 mb-2"
              style={{ paddingBottom: "100%" }}
            ></div>
            <p className="text-white italic text-center">ENTREPRISE</p>
            <p className="text-white italic text-center">Les réalisations</p>
          </div>
          <div>
            <div
              className="bg-gray-400 mb-2"
              style={{ paddingBottom: "100%" }}
            ></div>
            <p className="text-white italic text-center">ENTREPRISE</p>
            <p className="text-white italic text-center">Les réalisations</p>
          </div>
          <div>
            <div
              className="bg-gray-400 mb-2"
              style={{ paddingBottom: "100%" }}
            ></div>
            <p className="text-white italic text-center">ENTREPRISE</p>
            <p className="text-white italic text-center">Les réalisations</p>
          </div>
          <div>
            <div
              className="bg-gray-400 mb-2"
              style={{ paddingBottom: "100%" }}
            ></div>
            <p className="text-white italic text-center">ENTREPRISE</p>
            <p className="text-white italic text-center">Les réalisations</p>
          </div>
          <div>
            <div
              className="bg-gray-400 mb-2"
              style={{ paddingBottom: "100%" }}
            ></div>
            <p className="text-white italic text-center">ENTREPRISE</p>
            <p className="text-white italic text-center">Les réalisations</p>
          </div>
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

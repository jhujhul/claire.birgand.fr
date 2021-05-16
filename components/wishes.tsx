import { useEffect, useRef, FunctionComponent } from "react";
import Typed from "typed.js";

const Wishes: FunctionComponent = () => {
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
    <div>
      <h2 className="text-4xl leading-10 mb-4">
        <span className="font-light">Vous souhaitez créer</span>
        <br className="md:hidden" />
        <div className="h-20 md:h-auto">
          <span className="font-bold text-alien bg-darkGray" ref={wishEl} />
        </div>
      </h2>
    </div>
  );
};

export default Wishes;

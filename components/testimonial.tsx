import Image from "next/image";
import { FunctionComponent } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { Testimonial } from "../types";

interface Props {
  testimonial: Testimonial;
}
const TestimonialComponent: FunctionComponent<Props> = (props) => {
  const isMdOrLarger = useMediaQuery("(min-width: 768px)");
  const { testimonial } = props;
  const { name, quote, image, profession } = testimonial;

  return (
    <figure className="md:grid md:grid-cols-2">
      {isMdOrLarger && (
        <div className="hidden md:flex md:justify-end w-full">
          <div
            className="relative bg-gray-400 mr-10"
            style={{ width: "360px", height: "360px" }}
          >
            {image && <Image src={image} layout="fill" objectFit="cover" />}
          </div>
        </div>
      )}
      <div className="md:w-2/3 flex flex-col justify-center">
        <div className="mb-4">
          <Image
            src="/assets/guillemets.png"
            alt="Guillemets"
            width={74}
            height={58}
          />
        </div>
        <blockquote className="italic font-medium text-xl mb-3">
          <p>{quote}</p>
        </blockquote>
        <figcaption>
          <p className="relative inline-block font-mono text-3xl">
            <span
              aria-hidden="true"
              className="absolute inset-0 mt-3 mb-1 bg-alien"
            ></span>
            <span className="relative">{name}</span>
          </p>
          <p className="font-extralight">{profession}</p>
        </figcaption>
      </div>
    </figure>
  );
};

export default TestimonialComponent;

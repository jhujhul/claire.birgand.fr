import Image from "next/image";
import { FunctionComponent } from "react";
import Carousel from "nuka-carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

import { Testimonial } from "../types";
import HomeSection from "./home-section";
import HomeSectionTitle from "./home-section-title";
import TestimonialComponent from "./testimonial";
import WorkTogether from "./work-together";

interface Props {
  testimonials: Testimonial[];
}
const Testimonials: FunctionComponent<Props> = (props) => {
  const { testimonials } = props;

  return (
    <HomeSection backgroundColor="bg-white">
      <HomeSectionTitle
        titleName="Témoignages"
        titleColor="text-black"
        icon={
          <Image
            src="/assets/asterisque-anis.png"
            alt="Asterisque"
            width={27}
            height={26}
          />
        }
      />
      <div className="mb-10 md:mb-20">
        <Carousel
          autoplay={true}
          autoplayInterval={5000}
          wrapAround={true}
          renderBottomCenterControls={null}
          renderCenterLeftControls={({ previousSlide }) => (
            <button onClick={previousSlide} className="hidden md:inline-block">
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button onClick={nextSlide} className="hidden md:inline-block">
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          )}
        >
          {testimonials.map((testimonial) => (
            <TestimonialComponent
              key={testimonial.quote}
              testimonial={testimonial}
            />
          ))}
        </Carousel>
      </div>
      <div className="mb-10 md:mb-20">
        <WorkTogether />
      </div>
    </HomeSection>
  );
};

export default Testimonials;

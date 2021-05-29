import Image from "next/image";
import { FunctionComponent } from "react";
import Carousel from "nuka-carousel";

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

  // const test: Testimonial = {
  //   quote:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  //   name: "Martin ALLIO",
  //   profession: "Business developer chez crotte de bique land",
  //   image: "",
  // };
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
          renderCenterLeftControls={null}
          renderCenterRightControls={null}
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

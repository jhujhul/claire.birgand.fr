import Image from "next/image";
import { FunctionComponent } from "react";
import Carousel from "nuka-carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

import classNames from "classnames";
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
      <div className="mt-4 mb-10 md:mb-20">
        <Carousel
          autoplayInterval={5000}
          wrapAround={true}
          renderBottomCenterControls={(props) => {
            const { slideCount, currentSlide, goToSlide } = props;

            return (
              <div className="flex md:hidden mt-8">
                {Array.from(Array(slideCount).keys()).map((i) => {
                  const isActive = currentSlide === i;
                  const className = classNames(
                    "rounded-full bg-gray-400 w-2 h-2 cursor-pointer mr-1",
                    {
                      "bg-alien": isActive,
                    }
                  );

                  return (
                    <div
                      key={i}
                      className={className}
                      onClick={() => goToSlide(i)}
                    ></div>
                  );
                })}
              </div>
            );
          }}
          renderCenterLeftControls={({ previousSlide }) => (
            <button
              onClick={previousSlide}
              className="hidden md:inline-block"
              aria-label="Témoignage précédent"
            >
              <ChevronLeftIcon className="h-6 w-6  text-gray-600" />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button
              onClick={nextSlide}
              className="hidden md:inline-block"
              aria-label="Témoignage suivant"
            >
              <ChevronRightIcon className="h-6 w-6  text-gray-600" />
            </button>
          )}
          getControlsContainerStyles={(key) => {
            switch (key) {
              case "BottomCenter":
                return {
                  bottom: "-16px",
                };
              case "CenterLeft":
                return {
                  left: "-32px",
                };
              case "CenterRight":
                return {
                  right: "-32px",
                };
              default:
                return {};
            }
          }}
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

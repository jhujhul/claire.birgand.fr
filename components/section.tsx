import { FunctionComponent } from "react";
import Image from "next/image";
import Carousel from "nuka-carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import classNames from "classnames";

import { ProjectSection } from "../types";
import { useMediaQuery } from "../hooks/useMediaQuery";

interface Props {
  section: ProjectSection;
}
const Section: FunctionComponent<Props> = (props) => {
  const { section } = props;
  const isXlOrLarger = useMediaQuery("(min-width: 1280px)");

  return (
    <div className="flex flex-col xl:flex-row mb-12 xl:mb-20">
      <div className="flex-shrink-0 xl:mr-4 2xl:mr-16 pl-6 mb-6 xl:mb-0 xl:w-80 2xl:w-96">
        <div className="flex items-start -ml-6 mb-2">
          <div className="flex flex-shrink-0 items-center mt-2 mr-2">
            <Image
              src="/assets/asterisque-anis.png"
              alt="Asterisque"
              width={15}
              height={14}
            />
          </div>
          <div className="font-bold text-xl text-justify">{section.title}</div>
        </div>
        <div className="font-normal text-justify">{section.description}</div>
      </div>

      <div className="w-full xl:px-8">
        {isXlOrLarger ? (
          <Carousel
            wrapAround={true}
            renderBottomCenterControls={(props) => {
              const { slideCount, currentSlide, goToSlide } = props;

              return (
                <div className="flex xl:hidden mt-8">
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
                className="hidden xl:inline-block"
                aria-label="Image précédente"
              >
                <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button
                onClick={nextSlide}
                className="hidden xl:inline-block"
                aria-label="Image suivante"
              >
                <ChevronRightIcon className="h-6 w-6 text-gray-600" />
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
            withoutControls={section.images.length <= 1}
            dragging={section.images.length > 1}
            swiping={section.images.length > 1}
          >
            {section.images.map(({ src }) => (
              <div key={src} className="project-image">
                <Image
                  key={src}
                  src={src}
                  layout="fill"
                  objectFit="contain"
                  alt={`${section.title} image`}
                />
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="max-w-2xl mx-auto">
            {section.images.map(({ src, width, height }) => (
              <div key={src} className="mb-4">
                <Image
                  key={src}
                  src={src}
                  height={height}
                  width={width}
                  layout="responsive"
                  alt={`${section.title} image`}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;

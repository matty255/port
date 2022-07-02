import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import "./Slide.scss";
import {Slide} from "./Slide.jsx";
import './testimonials.scss'
import {data} from '../../static/data/projectSlideData'

const CardExample = () => {
  const ref = React.useRef(StackedCarousel);
  return (
    <div className="testimonials" id="testimonials">
    <h1 className="font-minB">Experience</h1>
    <div className="card">
      <div className="w-full h-full">
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
               className="mt-5 overflow-hidden"
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={width < 420 ? width : 450}
                carouselWidth={width}
                height={window.innerHeight}
                data={data}
                maxVisibleSlide={5}
                customScales={[1, 0.85, 0.7, 0.55]}
                transitionTime={450}
              />
            );
          }}
        />

      </div>
    </div>
    </div>
  );
};

export default CardExample;

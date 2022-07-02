import React from "react";
import { StackedCarouselSlideProps } from "react-stacked-center-carousel";
import "./Slide.scss";
import {IconBox} from "./IconBox"
export const Slide = React.memo(function (StackedCarouselSlideProps) {
  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } =
    StackedCarouselSlideProps;

  const coverImage = data[dataIndex].image;
  const title = data[dataIndex].title;
  const icons = data[dataIndex].icons;
  const desc = data[dataIndex].desc;
  // console.log(window.innerHeight)

  // console.log(coverImage);
  return (
    <div className="card-card overflow-hidden h-full" draggable={false}>
      <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
        <div
          className="card-overlay fill"
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
      </div>
      <div className="detail fill">
        <div className="discription">
          <img
            alt="j"
            className="cover-image w-full md:h-2/4"
            src={coverImage}
          />
          <div className="flex flex-row p-2 shrink-0">

    {window.innerHeight > 400 ? icons.map((item, i) => (
          <IconBox
          key={`${i}-item.skillClass`}
          skillName={item.skillName}
          icon={item.skillClass}
          color={item.color}
          textColor={item.textColor}
          />
        )) : ""}
        
          </div>
          <hr />
          <h2 className="text-xl text-center text-stone-700 font-minB py-2 shrink-0">{title}</h2>
          <hr />
          <div className="text-md font-min2 px-4 pt-4 flex flex-wrap w-full h-40">
            {desc}
          </div>
          <div className="text-md font-min2 px-4 pt-4 flex justify-between w-full h-20">
            <button className="border border-gray-300 h-8 px-1">시연영상</button>  <button className="border border-gray-300 h-8 px-1">Github</button>
          </div>
        </div>
      </div>
    </div>
  );
});

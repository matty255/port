import React, {useState} from "react";
import { StackedCarouselSlideProps } from "react-stacked-center-carousel";
import "./Slide.scss";
import {IconBox} from "./IconBox"
import { useEffect } from "react";
export const Slide = React.memo(function (StackedCarouselSlideProps) {
  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } =
    StackedCarouselSlideProps;
    const [frameHeight , setFrameHeight] = useState(window.innerHeight)
  const coverImage = data[dataIndex].image;
  const title = data[dataIndex].title;
  const icons = data[dataIndex].icons;
  const desc = data[dataIndex].desc;
  // console.log(window.innerHeight)
const handleResize = () => {
  setFrameHeight(window.innerHeight)
}

  useEffect(() => {
      window.addEventListener('resize', handleResize)
      // console.log(frameHeight)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
  }, [])
  

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
      <div className="detail fill group">
        <div className="discription flex justify-center items-center mx-auto ">
         <img
            alt="j"
            className="cover-image w-full md:h-2/4"
            src={coverImage}
          />

          {isCenterSlide ?  <iframe id="myFrame" className="w-[25rem] md:w-[28.2rem] absolute top-0 opacity-0 group-hover:opacity-100" height={300} src={"https://www.youtube.com/embed/TU-3BacYfYw?rel=0&amp;autoplay=1&mute=1&amp;loop=1;playlist=TU-3BacYfYw"} frameBorder="0" title="a"></iframe> : ""}
          <div className="flex flex-row p-2 shrink-0">



    {frameHeight > 400 ? icons.map((item, i) => (
          <IconBox
          key={`${i}-item.skillClass`}
          skillName={item.skillName}
          icon={item.skillClass}
          color={item.color}
          textColor={item.textColor}
          />
        )) : ""}
        
          </div>
         
          {frameHeight > 400 ? <>  <hr /><h2 className="text-xl text-center text-stone-700 font-minB py-2 shrink-0">{title}</h2> <hr />
          <div className="text-md font-min2 px-4 pt-4 flex flex-wrap w-full h-40 peer">
            {desc}
          </div> </>: "" }
          
          <div className="text-md font-min2 px-4 pt-4 flex justify-between w-full h-20">
            <button className="border border-gray-300 h-8 px-1">시연영상</button>  <button className="border border-gray-300 h-8 px-1">Github</button>
          </div>
        </div>
      </div>
    </div>
  );
});

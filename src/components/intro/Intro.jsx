import "./intro.scss";
import Typed from "react-typed";
import { useEffect, useRef } from "react";
import {textLines, intros} from "../../static/data/IntroData"

export default function Intro() {

  return (
    <div className="intro" id="intro" >
      <div className="left">
        <div className="imgContainer">
          <img src={intros.introImage} alt="" />
        </div>
      </div>
      <div className="right drop-shadow-md">
        
        <div className="wrapper">
        <h1 className="hidden lg:contents">Frond-End Developer</h1>
          <h2 className="font-min1">{intros.hello}
          <br className="md:hidden"/>{intros.name}</h2>
          <h3 className="">
          {intros.adjective} <br className="md:hidden"/><Typed strings={textLines} typeSpeed={60} loop />{intros.afterAdjective}
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

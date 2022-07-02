import { useState } from "react";
import "./contact.scss";
import {contacts} from "../../static/data/contactInfo" 
import Computer from "../../static/image/computer.gif"

export default function Contact() {


  return (
    <div className="contact" id="contact">
      <div className="left">
        <div className="rounded-full absolute bg-white w-44 h-44 md:w-72 md:h-72 left-44 mt-32">
        </div>
        <img src={Computer} alt="" className="sepia object-contain" />
      </div>
      <div className="right">
        <h2 className="mb-12 font-min1">Contact to. <span className="font-minB tracking-tight">{contacts.name}</span></h2>
        <div className="flex flex-col text-right gap-2">
        <p><span className="font-min1 text-lg text-right">phone. </span>{contacts.phone}</p>
        <p><span className="font-min1 text-lg text-right">blog. </span>{contacts.blog}</p>
        <p><span className="font-min1 text-lg text-right">mail. </span>{contacts.mail}</p>
        <p><span className="font-min1 text-lg text-right">github. </span>{contacts.github}</p>
        <button className="self-end bg-yellow-300 w-fit rounded-md mt-10 px-1">sand mail</button>
        </div>
      </div>
    </div>
  );
}

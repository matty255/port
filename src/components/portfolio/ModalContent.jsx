import React, { useState, useEffect } from "react";
import  "./modal.css"

export default function Modal(data, open) {
  const image = data.data.img
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
      setAnimate(true)
      setTimeout(() => setAnimate(false), 250);
  }, [data]);
  return (
    <div>

{/* <div className="fixed top-0 left-0 w-full h-2/3">
</div> */}
<div className="w-full h-2/3 fixed top-0 z-10 bg-no-repeat bg-cover
flex justify-center 
" style={{backgroundImage: `linear-gradient(to bottom, transparent 50%, #F8F0DF 100%), url(${image})`}}>

   {/* <img src={data.data.img} alt="" className="opacity-60 object-fill m-auto hover:z-50 z-9 peer group-hover:opacity-100  top-24"  /> */}

</div>
<div>
<div className={!animate ? "fixed bottom-20 h-40 w-full bg-white z-50 opacity-80" : "flex flex-col"}>

  <div className={!animate ? "flex flex-col transition transform translate-x-12" : "flex flex-col"}>
  <p>{data.data.title}</p>
  <p> {data.data.desc}</p>
  </div>
  </div>



</div>
    </div>
  );
}

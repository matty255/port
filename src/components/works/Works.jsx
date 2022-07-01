import { useState, useEffect } from "react";
import {data} from "../../static/data/videoLinkData";
export default function Works() {

const convertUrl = (id) => {
  const youtubeUrl = `https://www.youtube.com/embed/${id}?rel=0&amp;autoplay=1&mute=1&amp;loop=1;playlist=${id}`
  return youtubeUrl
}
const [frameHeight , setFrameHeight] = useState()

useEffect(() => {

 const frame = document.getElementById('myFrame');
 console.log("height" , frame.contentWindow.document.body.scrollHeight + "px")
        
 setTimeout(() => {
   setFrameHeight(frame.contentWindow.document.body.scrollHeight + "px")
  },100)


 },[])
  
  return (
    <> 
      <div className="works bg-gray-400" id="works">
  {data &&  

  <div id="carouselExampleCaptionsFull" className="carousel slide carousel-fade relative h-full" data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">

    <button
      type="button"
      data-bs-target="#carouselExampleCaptionsFull"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptionsFull"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptionsFull"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
     <button
      type="button"
      data-bs-target="#carouselExampleCaptionsFull"
      data-bs-slide-to="3"
      aria-label="Slide 4"
    ></button>
         <button
      type="button"
      data-bs-target="#carouselExampleCaptionsFull"
      data-bs-slide-to="4"
      aria-label="Slide 5"
    ></button>
  </div>

  <div className="carousel-inner relative w-full overflow-hidden h-full">
    <div className="carousel-item active relative float-left w-full bg-no-repeat bg-cover bg-center" >

     {data[0].isYoutube === true ? 
     <iframe id="myFrame" className="min-w-full min-h-full max-w-fit h-screen" height={frameHeight} src={convertUrl(data[0].id)} frameBorder="0" title="a"></iframe> : 
     <video className="min-w-full min-h-full max-w-fit xl:min-w-0 xl:min-h-0" playsInline autoPlay={true} controls = '' muted loop>
        <source className="" src={data[0].url} type="video/mp4" />
      </video>
      } 
      
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
        <div className="flex justify-center items-center">
          <div className="text-white text-center px-14 px-md-0">
         <h2 className="text-3xl font-semibold mb-4 mt-5 hidden md:block"> {data[0].title}</h2>
            <div className="text-white text-center px-14 px-md-0">
            <a type="button" className="px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-5 md:mt-0" href={data[0].a_link} role="button"     data-mdb-ripple="true" data-mdb-ripple-color="light">보러가기</a>
          </div>
          </div>
        </div>
      </div>
    </div>

    <div className="carousel-item relative float-left w-full bg-no-repeat bg-cover bg-center">

    {data[1].isYoutube === true ? 
     <iframe id="myFrame" className="min-w-full min-h-full max-w-fit h-screen" height={frameHeight} src={convertUrl(data[1].id)} frameBorder="0" title="a"></iframe> : 
     <video className="min-w-full min-h-full max-w-fit xl:min-w-0 xl:min-h-0" playsInline autoPlay={true} controls = '' muted loop>
        <source className="" src={data[1].url} type="video/mp4" />
      </video>
      } 
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
        <div className="flex justify-center items-center">
          <div className="text-white text-center px-14 px-md-0">
         <h2 className="text-3xl font-semibold mb-4 mt-5 hidden md:block"> {data[1].title}</h2>
            <div className="text-white text-center px-14 px-md-0">
            <a type="button" className="px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-5 md:mt-0" href={data[1].a_link}  role="button"     data-mdb-ripple="true" data-mdb-ripple-color="light">보러가기</a>
          </div>
          </div>
        </div>
      </div>
    </div>


    <div className="carousel-item relative float-left w-full bg-no-repeat bg-cover bg-center">
    {data[2].isYoutube === true ? 
     <iframe id="myFrame" className="min-w-full min-h-full max-w-fit h-screen" height={frameHeight} src={convertUrl(data[2].id)} frameBorder="0" title="a"></iframe> : 
     <video className="min-w-full min-h-full max-w-fit xl:min-w-0 xl:min-h-0" playsInline autoPlay={true} controls = '' muted loop>
        <source className="" src={data[2].url} type="video/mp4" />
      </video>
      } 
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
        <div className="flex justify-center items-center">
        <div className="text-white text-center px-14 px-md-0">
            <h2 className="text-3xl font-semibold mb-4 mt-5 hidden md:block">{data[2].title}</h2>
            <div className="text-white text-center px-14 px-md-0">
            <a type="button" className="px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-5 md:mt-0" href={data[2].a_link}  role="button"     data-mdb-ripple="true" data-mdb-ripple-color="light">보러가기</a>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full  bg-no-repeat bg-cover bg-center">
    {data[3].isYoutube === true ? 
     <iframe id="myFrame" className="min-w-full min-h-full max-w-fit h-screen" height={frameHeight} src={convertUrl(data[3].id)} frameBorder="0" title="a"></iframe> : 
     <video className="min-w-full min-h-full max-w-fit xl:min-w-0 xl:min-h-0" playsInline autoPlay={true} controls = '' muted loop>
        <source className="" src={data[3].url} type="video/mp4" />
      </video>
      } 
      
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
        <div className="flex justify-center items-center">
        <div className="text-white text-center px-14 px-md-0">
            <h2 className="text-3xl font-semibold mb-4 mt-5 hidden md:block">{data[3].title}</h2>
            <div className="text-white text-center px-14 px-md-0">
            <a type="button" className="px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-5 md:mt-0" href={data[3].a_link}  role="button"     data-mdb-ripple="true" data-mdb-ripple-color="light">보러가기</a>
          </div>
          </div>
        </div>
      </div>
    </div>

    <div className="carousel-item relative float-left w-full bg-no-repeat bg-cover bg-center">

    {data[4].isYoutube === true ? 
     <iframe id="myFrame" className="min-w-full min-h-full max-w-fit h-screen" height={frameHeight} src={convertUrl(data[4].id)} frameBorder="0" title="a"></iframe> : 
     <video className="min-w-full min-h-full max-w-fit xl:min-w-0 xl:min-h-0" playsInline autoPlay={true} controls = '' muted loop>
        <source className="" src={data[4].url} type="video/mp4" />
      </video>
      } 

<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
  <div className="flex justify-center items-center">
    <div className="text-white text-center px-14 px-md-0">
   <h2 className="text-3xl font-semibold mb-4 mt-5 hidden md:block"> {data[4].title}</h2>
      <div className="text-white text-center px-14 px-md-0">
      <a type="button" className="px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-5 md:mt-0" href={data[4].a_link}  role="button"     data-mdb-ripple="true" data-mdb-ripple-color="light">보러가기</a>
    </div>
    </div>
  </div>
</div>
</div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptionsFull"
    data-bs-slide="prev"
  >
    <span
      className="carousel-control-prev-icon inline-block bg-no-repeat"
      aria-hidden="true"
    ></span>
    <span className="visually-hidden">Previous</span>

  </button>

  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptionsFull"
    data-bs-slide="next"
  >
    <span
      className="carousel-control-next-icon inline-block bg-no-repeat"
      aria-hidden="true"
    ></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 
}
</div>
</>
  );
}

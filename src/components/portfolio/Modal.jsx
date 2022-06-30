

export default function Modal(data) {

  return (
    <div>
<div className="fixed top-0 left-0 w-full h-screen bg-black opacity-50 ">

</div>
<div className="w-full h-2/3 fixed top-0 z-9 hover:z-50 bg-gradient-to-b from-blue-500 flex justify-center
">
   <img src={data.data.img} alt="" className="opacity-60 hover:opacity-100  object-fill m-auto hover:z-50 peer"  />
   <p className="z-50 absolute top-0 text-3xl text-center peer-hover:opacity-0">{data.data.title} <span className="text-blue-400 ml-5 animate-pulse ">hover me!</span></p> 
</div>
    </div>
  );
}

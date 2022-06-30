

export default function Modal(data) {
  const image = data.data.img
  return (
    <div>

<div className="fixed top-0 left-0 w-full h-2/3">
</div>
<div className="w-full h-2/3 fixed top-0 z-10 bg-no-repeat bg-cover
flex justify-center scale-110 ease-in transition duration-150 
" style={{backgroundImage: `linear-gradient(to bottom, transparent, #F8F0DF), url(${image})`}}>

   {/* <img src={data.data.img} alt="" className="opacity-60 object-fill m-auto hover:z-50 z-9 peer group-hover:opacity-100  top-24"  /> */}

</div>
<div>
<div className="fixed bottom-20 h-40 w-full bg-white z-50 opacity-80">
  여기테이블
  <div className="flex flex-col">
  <p>{data.data.title}</p>
  <p> {data.data.desc}</p>
  </div>
  </div>
  <p className="fixed bottom-10 left-8 md:left-1/3">돌아가기</p>
<p className="fixed bottom-10 right-8 md:right-1/3">보러가기</p>


</div>
    </div>
  );
}

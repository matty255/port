import React, { useState, useEffect } from "react";
import ModalContent from "./ModalContent";
const Modal = (props) => {

  const { open, close, data } = props;

  const [animate, setAnimate] = useState(false);

  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (visible && !open) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setAnimate(open);
  }, [visible, open]);

  if (!animate && !visible) return null;

  return (

    <div className={open ? "modal open" : "modal close"}>
      <section>
       

        <main>
          <ModalContent data={data} open={open} />
        </main>

        {/* <button className="close">
          &times;
        </button> */}
       
      </section>
      <button className="fixed bottom-10 left-8 md:left-1/3 bg-amber-300 text-white p-1 rounded-md font-min1 tracking-wider" onClick={close} >돌아가기</button>
          <button className="fixed bottom-10 right-8 md:right-1/3 bg-amber-300 text-white p-1 rounded-md font-min1 tracking-wider border-solid" >보러가기</button>
    </div>
  );
};

export default Modal;

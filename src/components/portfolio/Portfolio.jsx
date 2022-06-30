import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  list,
  webPortfolio,
  webAppPortfolio,
  mobilePortfolio,
  openSourcePortfolio,
  etcPortfolio,
} from "../../static/data/projectData";
import Modal from "./Modal"

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [modalOn, setModalOn] = useState(false);
  const [modalData, setModalData] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case list[0].id:
        setData(webPortfolio);
        break;
      case list[1].id:
        setData(webAppPortfolio);
        break;
      case list[2].id:
        setData(mobilePortfolio);
        break;
      case list[3].id:
        setData(openSourcePortfolio);
        break;
      case list[4].id:
        setData(etcPortfolio);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  const handleModal = (d) => {
    let id = d.id;
    if(modalData && modalData.id === parseInt(id)) {
      setModalOn((state) => !state);
    } else if (!modalOn) {
      setModalOn((state) => !state);
      setModalData(d)
    } else {
      setModalData(d)
    }
    
};

  return (
    <>
{ modalOn && (
  <>

      <Modal
          data={modalData}
          modalOn={modalOn}
          setModalOn={setModalOn}
      />
      
      <button onClick={() => setModalOn(!modalOn)} className=" fixed z-9 top-52 w-40"></button>
     
      </>
  )}
  
    <div className="portfolio" id="portfolio" >
      <h1 className="font-minB">Projects</h1>
      <ul>
        {list.map((item, i) => (
          <PortfolioList
          key={`${i}-item.id`}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="flex md:justify-center ">
      <div className="container justify-center md:justify-start">
        {data.map((d, i) => (
         
          <div className="item z-30" key={`${i}-${d.id}`} onClick={() => handleModal(d)}>
            <img
              src={d.img}
              alt=""
            />
            <h3 className="truncate">{d.title}</h3>
          </div>
        

        ))}
      </div>
      </div>
    </div>
    </>
  );
}

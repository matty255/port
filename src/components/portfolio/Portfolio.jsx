import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import "./modal.scss"
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
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    switch (selected) {
      case list[0].id:
        setData(webPortfolio);
        setModalData(webAppPortfolio[0])
        break;
      case list[1].id:
        setData(webAppPortfolio);
        setModalData(webAppPortfolio[1])
        break;
      case list[2].id:
        setData(mobilePortfolio);
        setModalData(webAppPortfolio[2])
        break;
      case list[3].id:
        setData(openSourcePortfolio);
        setModalData(webAppPortfolio[3])
        break;
      case list[4].id:
        setData(etcPortfolio);
        setModalData(webAppPortfolio[4])
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  const handleModal = (d) => {
    let id = d.id;
    if(modalData && modalData.id === parseInt(id)) {
      setModalOpen((state) => !state);
    } else if (!modalOpen) {
      setModalOpen((state) => !state);
      setModalData(d)
    } else {
      setModalData(d)
    }
    
};

  return (
    <>

    <div className="portfolio" id="portfolio" >
      <h1 className="font-minB">Projects</h1>
      <Modal open={modalOpen} close={closeModal} data={modalData} />

      <ul className={modalOpen ? "fixed top-0 z-30 opacity-80 hover:opacity-100 transition transform ease-in-out translate-y-3 overflow-hidden flex shrink-0" : ""}>
        {list.map((item, i) => (
          <PortfolioList
          key={`${i}-item.id`}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            modalOpen={modalOpen}
          />
        ))}
      </ul>
      <div className="flex md:justify-center ">
      <div className="container justify-center md:justify-start">
        {data.map((d, i) => (
         
          <div className={modalOpen ? "item z-30 opacity-10 hover:opacity-100" : "item"} key={`${i}-${d.id}`} onClick={() => handleModal(d)}>
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

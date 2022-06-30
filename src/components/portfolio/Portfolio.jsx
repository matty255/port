import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  list,
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../static/data/projectData";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case list[0].id:
        setData(featuredPortfolio);
        break;
      case list[1].id:
        setData(webPortfolio);
        break;
      case list[2].id:
        setData(mobilePortfolio);
        break;
      case list[3].id:
        setData(designPortfolio);
        break;
      case list[4].id:
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio " id="portfolio">
      <h1 className="font-minB">Projects</h1>
      <ul>
        {list.map((item, i) => (
          <PortfolioList
          key={i}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d, i) => (
          <div className="item" key={i}>
            <img
              src={d.img}
              alt=""
            />
            <h3 className="truncate">{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

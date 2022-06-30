import "./portfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "portfolioList active font-min2" : "portfolioList font-min3"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}

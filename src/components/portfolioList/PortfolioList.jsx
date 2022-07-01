import "./portfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected, modalOpen }) {
  return (
    <li
      className={modalOpen ? (active ? "portfolioList active font-min2 transform transition" : "portfolioList font-min3 transform transition bg-white") : "portfolioList font-min3 transform transition"}

      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}

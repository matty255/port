import "./menu.scss";
import {menuNames} from "../../static/data/IntroData";
export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">{menuNames.Home}</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">{menuNames.Portfolio}</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">{menuNames.Works}</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">{menuNames.Testimonials}</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">{menuNames.Contact}</a>
        </li>
      </ul>
    </div>
  );
}

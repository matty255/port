import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";
import {contacts} from "../../static/data/contactInfo" 

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo font-minB tracking-tighter">
          {contacts.name}
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span className="font-min1">{contacts.phone}</span>
          </div>
          <div className="itemContainer" >
            <Mail className="icon" />
            <span className="font-min1">{contacts.mail}</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

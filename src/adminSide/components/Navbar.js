import React,{useState} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import * as Falcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";

const Navbar = () => {
    const [sidebar,setSidebar] = useState(false);
    const showSidebar = ()=>{
        setSidebar(!sidebar);
    }

  return (
    <>
      <div className="navbar">
        <Link to="#" className="nav-menu-icon" onClick={showSidebar}>
          <Falcons.FaBars />
        </Link>
      </div>
      <div className={sidebar ? "sidebar-container active" : "sidebar-container"}>
        <ul className="sidebar-items" >
          <li className="sidebar-toggle">
            <Link to="#" className="nav-menu-icon" onClick={showSidebar}>
              <Falcons.FaWindowClose />
            </Link>
          </li>
          {SidebarData.map((sidebaritem)=>{
            return(
                <li key={sidebaritem.id} className={sidebaritem.cName}>
                    <Link to={sidebaritem.path}>
                        {sidebaritem.icon}
                        <span>{sidebaritem.title}</span>
                    </Link>
                </li>
            )
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

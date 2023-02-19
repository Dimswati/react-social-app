import "./navbar.scss";
import { Link } from "react-router-dom";
import {HomeOutlined, DarkModeOutlined, WbSunnyOutlined, GridViewOutlined, NotificationsOutlined, EmailOutlined, PercentOutlined, SearchOutlined} from '@mui/icons-material';
import { useContext } from "react";
import { DarkModeContext } from "../../../context/darkModeContext";
import { AuthContext } from "../../../context/authContext";

export default function Navbar() {

  const {toggle ,darkMode} = useContext(DarkModeContext)
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration: "none"}}>
          <span>lamasocial</span>
        </Link>
        <HomeOutlined/>
        {darkMode ? <DarkModeOutlined onClick={toggle}/> : <WbSunnyOutlined onClick={toggle}/>}
        <GridViewOutlined/>
        <div className="search">
          <SearchOutlined/>
          <input type="search" placeholder="Search..."/>
        </div>
      </div>
      <div className="right">
        <PercentOutlined/>
        <EmailOutlined/>
        <NotificationsOutlined/>
        <div className="user">
          <img src={currentUser.profilePicture} alt="user" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

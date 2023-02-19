import { useContext } from "react"
import { AuthContext } from "../../context/authContext"
import "./profile.scss"
import { FacebookTwoTone, Instagram, Twitter, LinkedIn, Pinterest, Place, Language, EmailOutlined, MoreVert } from "@mui/icons-material"
import Posts from "../components/posts/Posts"


export default function Profile() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400" alt="" className="cover" />
        <img src={currentUser.profilePicture} alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoTone fontSize="medium"/>
            </a>
            <a href="http://facebook.com">
              <Instagram fontSize="medium"/>
            </a>
            <a href="http://facebook.com">
              <Twitter fontSize="medium"/>
            </a>
            <a href="http://facebook.com">
              <LinkedIn fontSize="medium"/>
            </a>
            <a href="http://facebook.com">
              <Pinterest fontSize="medium"/>
            </a>
          </div>
          <div className="center">
            <span>{currentUser.name}</span>
            <div className="info">
              <div className="item">
                <Place/>
                <span>USA</span>
              </div>
              <div className="item">
                <Language/>
                <span>swahili</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlined/>
            <MoreVert/>
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  )
}

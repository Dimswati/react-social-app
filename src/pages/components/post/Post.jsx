import "./post.scss"
import { FavoriteBorderOutlined, FavoriteOutlined, TextsmsOutlined, ShareOutlined, MoreHoriz } from "@mui/icons-material"
import { Link } from "react-router-dom"
import Comments from "../comments/Comments"
import { useState } from "react"

export default function Post({post}) {
  const [commentOpen, setCommentOpen] = useState(false)


  const liked = false
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.img} alt="" />
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{textDecoration: "none", color: "inherit"}}>
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHoriz/>
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlined/> : <FavoriteBorderOutlined/>}
            12 Likes
          </div>
          <div className="item" onClick={()=>setCommentOpen(prevState => !prevState)}>
            <TextsmsOutlined/>
            12 Comments
          </div>
          <div className="item">
            <ShareOutlined/>
            12 Share
          </div>
        </div>
        {commentOpen && <Comments/>}
      </div>
    </div>
  )
}

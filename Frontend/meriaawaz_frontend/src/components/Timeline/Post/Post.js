import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ user, postImage, likes, timestamp, dec }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>{" "}
          {user} • <span>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="dec">
        <pre>{dec}</pre>
      </div>
      <div className="post__image">
        <img src={postImage} alt="Post Image" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <img
              src="https://cdn-icons-png.flaticon.com/128/608/608336.png"
              width={"20px"}
              alt=""
              className="postIcon"
            />
            {/* <FavoriteBorderIcon className="postIcon" /> */}
            <ChatBubbleOutlineIcon className="postIcon" />
            {/* <TelegramIcon className="postIcon" /> */}
          </div>
          <div className="post__iconSave">
            {/* <BookmarkBorderIcon className="postIcon" /> */}
          </div>
        </div>
        Supported by {likes} people.
      </div>
    </div>
  );
}

export default Post;

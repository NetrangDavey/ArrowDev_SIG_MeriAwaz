import React from "react";
import "./Problem_dispaly.css";
import Timeline from "../Timeline/Timeline";
import PostUpload from "../PostUpload/PostUpload";
import PostDisplay from "../PostDisplay/PostDisplay";
function Problem_dispaly() {
  return (
    <div className="homepage">
      <div className="homepage__navWraper"></div>
      <div className="homepage__timeline">
        <PostUpload />
        <PostDisplay />
        <Timeline />
      </div>
    </div>
  );
}

export default Problem_dispaly;

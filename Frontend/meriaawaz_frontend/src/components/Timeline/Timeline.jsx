import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";
import p1 from "../../assets/p1.jpg";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Ram patel",
      postImage: p1,
      likes: 54,
      dec:
        "Me and my friends were driving home from a movie late in the night.\n" +
        "Because of a huge pothole in the road which was not visible properly due to the dark, an accident happened, and 3 people suffered serious injuries!\n" +
        "Please fix the road as soon as possible!\n" +
        "Location: Peddu Street, Kondithope, George Town, Chennai - 600001",
      timestamp: "5d",
    },
    {
      user: "jagdish",
      postImage:
        "https://citizenmatters.in/wp-content/uploads/2018/10/IMG-20181009-WA0001-300x225.jpg",
      likes: 432,
      dec: "Motorists navigating Vanuvampet along the Inner Ring Road are increasingly frustrated by the subpar road conditions and inadequate lighting. The poorly maintained surfaces make driving challenging, particularly during nighttime, when visibility is compromised by insufficient illumination. This combination not only raises safety concerns but also contributes to traffic delays and discomfort for commuters. The situation highlights the urgent need for infrastructure improvements to ensure a smoother and safer driving experience in this bustling area.",
      timestamp: "2w",
    },
    {
      user: "madhu",
      postImage:
        "https://citizenmatters.in/wp-content/uploads/2018/10/IMG-20181009-WA0022-300x225.jpg",
      likes: 140,
      dec: "A tilted lamp post at a lane near Patel Road in Perambur.",

      timestamp: "1m",
    },
    {
      user: "kishan",
      postImage:
        "https://citizenmatters.in/wp-content/uploads/2018/10/IMG-20181009-WA0020-1024x768.jpg",
      likes: 14,
      dec: "A street light at Venkatraman street in Perambur has been blocked by the avenue trees.",
      timestamp: "2d",
    },
    {
      user: "harsh_afzalgunj",
      postImage:
        "https://assets.thehansindia.com/hansindia-bucket/CIV_9953.jpg",
      likes: 213,
      dec: "It’s been over three months since we, the commuters, transport vehicles, customers, and business owners in Kishangunj, have been struggling with various civic issues in our bustling market area. It’s frustrating to see that no effective action has been taken by the authorities to address our concerns. On June 13, we came together and submitted our complaints to the GHMC, representing businesses like Padmavati Trading Company, Nagarmal Agency, Manorath Corporation, Annapurna Sales Agency, Sri Mahima Enterprises, Pramod Oil Industries, RK Enterprises, Jai Aruhe Navdurga Marketing, and Jaya Industries. We’re all hoping for some much-needed resolution soon.",
      timestamp: "3m",
    },
    {
      user: "gopal",
      postImage:
        "https://th-i.thgim.com/public/news/cities/chennai/actc1u/article34426557.ece/alternates/LANDSCAPE_1200/28throadscraped3jpg",
      likes: 113,
      dec: "Abandoned road work in Anna Nagar and Velachery. Very difficult to drive on. Please fix quickly.",
      timestamp: "1h",
    },
    {
      user: "kumar",
      postImage:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/03/13/801533-garbage-29.jpg",
      likes: 113,
      dec: "Garbage dumped on streets all over the city. Horrible smell, unable to bear. Please fix as soon as possible.",
      timestamp: "5m",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
              dec={post.dec}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;

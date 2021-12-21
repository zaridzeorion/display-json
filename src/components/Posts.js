import { React } from "react";
import "../styles/posts.css";

const Posts = ({ posts, darkMode }) => {
  var style = getComputedStyle(document.body);
  const darkColor = style.getPropertyValue("--dark-color"); // dark #24252a
  const lightColor = style.getPropertyValue("--light-color"); // light #d9dde8

  const colorMode = darkMode
    ? {
        color: darkColor,
        backgroundColor: lightColor,
      }
    : {
        backgroundColor: darkColor,
        color: lightColor,
      };

  return (
    <div className="posts">
      <ul className="posts__lists">
        {posts.map((post) => (
          <li style={colorMode} className="posts__list" key={post.id}>
            <h4 className="post__title"> {post.title}</h4>
            <p className="post__body"> {post.body} </p> <br />
            <p className="post__author">Author: {post.user_id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;

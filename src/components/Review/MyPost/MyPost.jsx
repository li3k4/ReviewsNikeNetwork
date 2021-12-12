import React from "react";
import s from "./MyPost.module.css";
import Post from "../Post/Post";

const MyPost = (props) => {
  let postsElement = props.posts.map(p => 
    <Post message={p.message} countLike={p.countLike} />
  );
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  
  return (
    <div>
      <div className={s.main}>
        <img
          className={s.img}
          src="https://cdn2.iconfinder.com/data/icons/facebook-51/32/FACEBOOK_LINE-01-512.png"
        ></img>
        <div className={s.field}>
          <text>My post</text>
          <textarea
            className={s.area}
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
          <button className={s.btnLike} onClick={onAddPost}>
            Send
          </button>
        </div>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPost;

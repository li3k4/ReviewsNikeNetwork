import React from "react";
import s from './Post.module.css';

const Post = (props) => {
return <div className = {s.main}>
    <img className={s.img} src = 'https://cdn2.iconfinder.com/data/icons/facebook-51/32/FACEBOOK_LINE-01-512.png'></img>
     <div className = {s.text_btn}>
         {props.message}
         <button className={s.btnLike}>
             Like {props.countLike}
             </button>
     </div>
</div>
   
}

export default Post;
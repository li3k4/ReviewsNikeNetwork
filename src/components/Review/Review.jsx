import React from "react";
import Preview from "./Preview/Preview";
import s from "./Review.module.css";
import MyPostContainer from "./MyPost/MyPostContainer";

const Review = (props) => {

  return (
    <div className={s.main}>
      <div className={s.scrollmenu}>
        <a href =''> <Preview /> </a>
        <a href =''> <Preview /> </a>
        <a href =''> <Preview /> </a>
        <a href =''> <Preview /> </a>
      </div>
      <img
        className={s.img}
        src="https://www.nicepng.com/png/full/874-8743979_nike-air-force-utility-boys-grade-school-sneakers.png"
      ></img>
      <MyPostContainer/>
    </div>
  );
};

export default Review;

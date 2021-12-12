import React from "react";
import s from "./Preview.module.css";

const Preview = () => {
  return (
      <div className={s.preview}>
        <div className={s.content}>
        <img
          className={s.smallImg}
          src="https://www.nicepng.com/png/full/874-8743979_nike-air-force-utility-boys-grade-school-sneakers.png"
        ></img>
        Nike 2021 Air
        </div>
      </div>
  );
  
}

export default Preview;

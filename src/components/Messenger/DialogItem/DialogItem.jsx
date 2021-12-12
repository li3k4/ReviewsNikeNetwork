import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  let path = "/Messenger/dialog/" + props.id;

  return (
    <div className={s.dialogs_item}>
      <img
        className={s.img}
        src="https://cdn2.iconfinder.com/data/icons/facebook-51/32/FACEBOOK_LINE-01-512.png"
      ></img>
      <NavLink to={path} className={s.name} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;

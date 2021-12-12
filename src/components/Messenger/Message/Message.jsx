import React from "react";
import s from "./../Messenger.module.css";

const Message = (props) => {
  return (
    <div className={s.message}>
      {props.message}
      <div className={s.writer}>
      </div>
    </div>
  );
};

export default Message;

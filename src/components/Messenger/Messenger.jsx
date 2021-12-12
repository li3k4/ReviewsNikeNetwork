import React from "react";
import { NavLink } from "react-router-dom";
import { updateNewMessageBody, sendMessage } from "../../redux/messengerReducer";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Messenger.module.css";

/*const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};*/

const Messenger = (props) => {
  let state = props.messengerPage;

  let elementDialog = state.dialogs.map((name) => (
    <DialogItem name={name.name} key={name.id} id={name.id} />
  ));
  let elementMessage = state.messages.map((message) => (
    <Message message={message.message} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div>
      <div className={s.main}>
        <div className={s.dialogs_item}>{elementDialog}</div>
        <div className={s.messages}>
          <div className={s.a}>{elementMessage}</div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;

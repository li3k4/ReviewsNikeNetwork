import React from "react";
import { connect } from "react-redux";
import { updateNewMessageBody } from "../../redux/messengerReducer";
import { sendMessageBody } from "../../redux/messengerReducer";
import Messenger from "./Messenger";

let mapStateToProps = (state) => {
  return{
  messengerPage: state.messengerPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return{
    sendMessage: () => {
      dispatch(sendMessageBody());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBody(body));
    }
  }
}
const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(Messenger);

export default MessengerContainer;

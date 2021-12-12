const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
      { id: 1, name: "Dan" },
      { id: 2, name: "Mari" },
      { id: 3, name: "CoolDaddy" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Hello" },
      { id: 3, message: "How are u?" },
    ],
    newMessageBody: " ",
  };

const messengerReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
          return {
            ...state,
            newMessageBody: action.body
        };
         case SEND_MESSAGE:
              let body = state.newMessageBody;
              return {
                ...state,
                newMessageBody: ' ',
                messages: [...state.messages, { id: 10, message: body }]
            };
        default:
            return state;
        
    }
};

export const sendMessageBody = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBody = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export default messengerReducer;

import reviewReducer from "./reviewReducer";
import messengerReducer from "./messengerReducer";
import headerReducer from "./headerReducer";

let store = {

  _callSubscriber() {
    console.log("change");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },


  dispatch(action) {
    this._state.reviewPage = reviewReducer(this._state.reviewPage, action);
    this._state.messengerPage = messengerReducer(this._state.messengerPage,action);
    this._state.sidebar = headerReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;

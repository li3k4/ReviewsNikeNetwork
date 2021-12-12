import React from "react";
import { connect } from "react-redux";
import {
  addPostAC,
  updateNewPostTextAC,
} from "../../../redux/reviewReducer";
import MyPost from "./MyPost";

let mapStateToProps = (state) => {
  return{
    posts: state.reviewPage.posts,
    newPostText: state.reviewPage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextAC(text);
      dispatch(action);
    }, 
    addPost: () => {
      dispatch(addPostAC());
    }
  }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost);
 
export default MyPostContainer;

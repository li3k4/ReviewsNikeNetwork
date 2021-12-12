const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
  posts: [
    { id: 0, message: "The best of my life", countLike: 10 },
    { id: 1, message: "Nike shoes", countLike: 5 },
    { id: 2, message: "like it", countLike: 0 },
  ],
  newPostText: "Write",
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 10,
        message: state.newPostText,
        countLike: 0,
      };
      return {
        ...state,
        post: [...state.posts, newPost],
        newPostText: " "
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    default:
      return state;
  }
};
export const addPostAC = () => ({ type: ADD_POST });
export const updateNewPostTextAC = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export default reviewReducer;

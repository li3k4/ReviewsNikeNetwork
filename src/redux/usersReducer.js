const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [
    { id: 0,
      photo: "https://cdn2.iconfinder.com/data/icons/facebook-51/32/FACEBOOK_LINE-01-512.png",
      fullName: "Dmitry",
      purchases: 1,
      location: { country: "Ukraine", city: "Kiev" },
      follow: false,
    },
    { id: 1,
      photo: "https://cdn2.iconfinder.com/data/icons/facebook-51/32/FACEBOOK_LINE-01-512.png",
      fullName: "Max Kovalcki",
      purchases: 3,
      location: { country: "UK", city: "London" },
      follow: true,
    },
    { id: 2,
      photo: "https://cdn2.iconfinder.com/data/icons/facebook-51/32/FACEBOOK_LINE-01-512.png",
      fullName: "Liam Trev",
      purchases: 4,
      location: { country: "US", city: "NY" },
      follow: false,
    },]
};

const usersReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, follow: true };
          }
          return u;
        }),
      };
    
      case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, follow: false };
          }
          return u;
        }),
      };

      case SET_USERS: {
        return {...state, users: [...state.users, ...action.users]}
      }
      default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export default usersReducer;

import { profileAPI, usersAPI } from "../apiFolder/API";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    {
      id: 1,
      post: "First post...........First post.....First post",
      likesCount: 12,
    },
    {
      id: 2,
      post: "Second post/////////..........Second post",
      likesCount: 101,
    },
    {
      id: 3,
      post: "Third post..........Third post.........Third post",
      likesCount: 3,
    },
  ],
  newPostText: "newPostText from state.profilePAge.newPostText",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        post: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreate = () => ({ type: ADD_POST });
export const updateNewpostTextActionCreate = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile: profile,
});
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};
export const setStatus = (status) => ({ type: SET_STATUS, status: status });
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if(response.data.resultCode === 0 ){
    dispatch(setStatus(status))}
  });
};

export default profileReducer;

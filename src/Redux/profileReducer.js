const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE= 'SET_USER_PROFILE'

let initialState = {
    posts : [
        {id: 1, post:'First post...........First post.....First post', likesCount:12   }, 
        {id: 2, post:'Second post/////////..........Second post', likesCount:101   }, 
        {id: 3, post:'Third post..........Third post.........Third post', likesCount:3  },
      ],
    newPostText: 'newPostText from state.profilePAge.newPostText',
    profile: null
    
}

const profileReducer = (state = initialState ,action) => {
    let stateCopy = {...state}
    switch(action.type){
        case ADD_POST: {
            let newPost = {
                id:5,
                post: state.newPostText,
                likesCount: 0
                }
            return {
                ...state,
                posts: [...state.posts,newPost],
                newPostText: ''
            }
    }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }}
        case SET_USER_PROFILE: {
            return{
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }   
}


export const addPostActionCreate = () => ({type:ADD_POST})
export const updateNewpostTextActionCreate = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile)=> ({type: SET_USER_PROFILE, profile: profile})


export default profileReducer
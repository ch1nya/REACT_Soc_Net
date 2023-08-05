const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts : [
        {id: 1, post:'First post...........First post.....First post', likesCount:12   },
        {id: 2, post:'Second post/////////..........Second post', likesCount:101   },
        {id: 3, post:'Third post..........Third post.........Third post', likesCount:3  },
      ],
    newPostText: 'newPostText from state.profilePAge.newPostText'

}

const profileReducer = (state = initialState ,action) => {
    console.log(action)
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id:5,
                post: state.newPostText,
                likesCount: 0
                }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}


export const addPostActionCreate = () => {
    return {
        type:ADD_POST
    }
  }

  export const updateNewpostTextActionCreate = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
  }
export default profileReducer

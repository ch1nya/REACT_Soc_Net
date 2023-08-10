const FOLLOW = "FOLLOW"
const UNFOLLOW = 'UNFOLLOW'
const SET_USER = 'SET_USER'

let initialState = {
  users: [],
  pageSize:  4,
  totalUsersCount: 15,
  currentPage: 2,
  

}

const usersReducer = (state = initialState, action) => {

  

  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user
        })
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user
        })
      }
    }
    case SET_USER: {
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    }
    default:
      return state
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USER, users })


export default usersReducer
import React from 'react'
import Users from './Users'
import { followAC,unfollowAC, setUsers } from '../../Redux/usersReducer'
import { Connect, connect } from 'react-redux'

let mapStateToProps = (state)=> {
  return {
    users: state.users.users
  }
}
let mapDispatchToProps = (dispatch) => {
  return{
    follow: (userId) => { 
      dispatch(followAC(userId))
    },
    unfollow: (userId) => { 
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => { 
      dispatch(setUsers(users))
    }

  }
} 

const UserContainer =  connect(mapStateToProps, mapDispatchToProps)(Users) 
export default UserContainer
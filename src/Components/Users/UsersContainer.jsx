import React from 'react'
import Users from './Users'
import { followAC,unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../Redux/usersReducer'
import { Connect, connect } from 'react-redux'

let mapStateToProps = (state)=> {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage
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
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => { 
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => { 
      dispatch(setUsersTotalCountAC(totalCount))
    }

  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Users) 
 
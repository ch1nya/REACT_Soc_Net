import React from 'react'
import { followAC,unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../Redux/usersReducer'
import { connect } from 'react-redux'
import axios from 'axios'
import Users from './Users'


class UsersContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanger = (page) => {
    this.props.setCurrentPage(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }
  render() {
    return <Users
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanger={this.onPageChanger}
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
    />
  }
}

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
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer) 
 
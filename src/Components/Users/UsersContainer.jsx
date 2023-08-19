import React from 'react'
import { follow, unfollow, setUsers, 
  setCurrentPage,
   toggleFollowingProgress, getUsers
   } from '../../Redux/usersReducer'
import { connect } from 'react-redux'
import Users from './Users'
import Preloader from '../CommonComponents/Preloader'


class UsersContainer extends React.Component {
  componentDidMount() {
    // debugger
    // this.props.toggleIsFetching(true)
    
    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
    //   .then(data => {
    //     this.props.toggleIsFetching(false)
    //     this.props.setUsers(data.items)
    //     this.props.setTotalUsersCount(data.totalCount)
    //   })
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanger = (page) => {
    this.props.getUsers(page, this.props.pageSize)
    // this.props.setCurrentPage(page)
    // this.props.toggleIsFetching(true)
    // usersAPI.getUsers(page, this.props.pageSize)
    //   .then(data => { 
    //     this.props.toggleIsFetching(false)
    //     this.props.setUsers(data.items)
      // })
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanger={this.onPageChanger}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        // toggleFollowingProgress={this.props.toggleFollowingProgress}
        followingInProgress = {this.props.followingInProgress}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    followingInProgress: state.users.followingInProgress
    
  }
}

export default connect(mapStateToProps,
  { 
    follow, unfollow, setCurrentPage,
    toggleFollowingProgress, getUsers
  }
)(UsersContainer)

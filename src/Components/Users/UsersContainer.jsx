import React from 'react'
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../Redux/usersReducer'
import { connect } from 'react-redux'
import axios from 'axios'
import Users from './Users'
import Preloader from '../CommonComponents/Preloader'
import {usersAPI} from '../../apiFolder/API' 

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)
      })


      // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{withCredentials: true})
      // .then(response => {
      //   this.props.toggleIsFetching(false)
      //   this.props.setUsers(response.data.items)
      //   this.props.setTotalUsersCount(response.data.totalCount)
      // })
  }

  onPageChanger = (page) => {
    this.props.setCurrentPage(page)
    this.props.toggleIsFetching(true)
    usersAPI.getUsers(page, this.props.pageSize)
      .then(data => { 
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)

      })
  }
  // onPageChanger = (page) => {
  //   this.props.setCurrentPage(page)
  //   this.props.toggleIsFetching(true)
  //   axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {withCredentials: true})
  //     .then(response => {
  //       this.props.toggleIsFetching(false)
  //       this.props.setUsers(response.data.items)

  //     })
  // }
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
  }
}

export default connect(mapStateToProps,
  { 
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching 
  }
)(UsersContainer)

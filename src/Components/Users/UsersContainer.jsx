import React from 'react'
import { follow, unfollow, setUsers, 
  setCurrentPage,
   toggleFollowingProgress, getUsers
   } from '../../Redux/usersReducer'
import { connect } from 'react-redux'
import Users from './Users'
import Preloader from '../CommonComponents/Preloader'
import WithAuthRedirect from '../../hoc/WithAuthRedirect'


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanger = (page) => {
    this.props.getUsers(page, this.props.pageSize)
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

//       ↓SIPLIFIED VERSION
// let withRedirect = WithAuthRedirect(UsersContainer)

// export default connect(mapStateToProps,
//   { 
//     follow, unfollow, setCurrentPage,
//     toggleFollowingProgress, getUsers
//   }
// )(UsersContainer)


//      ↓COMPLEX VERSION 
export default WithAuthRedirect(connect(mapStateToProps,
  { 
    follow, unfollow, setCurrentPage,
    toggleFollowingProgress, getUsers
  }
)(UsersContainer))

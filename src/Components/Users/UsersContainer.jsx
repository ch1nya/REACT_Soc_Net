import React from 'react'
import {
  follow, unfollow, setUsers,
  setCurrentPage,
  toggleFollowingProgress, requestUsers
} from '../../Redux/usersReducer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Users from './Users'
import Preloader from '../../CommonComponents/Preloader'
import WithAuthRedirect from '../../hoc/WithAuthRedirect'
import { getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUsers, getFollowingInProgress} from '../../Redux/usersSelectors'


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanger = (page) => {
    this.props.requestUsers(page, this.props.pageSize)
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
        followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),


  }
}

let withRedirect = WithAuthRedirect(UsersContainer)

//       ↓SIPLIFIED VERSION
// let withRedirect = WithAuthRedirect(UsersContainer)

// export default connect(mapStateToProps,
//   { 
//     follow, unfollow, setCurrentPage,
//     toggleFollowingProgress, requestUsers
//   }
// )(UsersContainer)


//      ↓COMPLEX VERSION 
export default compose(
  connect(mapStateToProps,
  { 
    follow, unfollow, setCurrentPage,
    toggleFollowingProgress, requestUsers
  }
))(UsersContainer)

import React from 'react'
import s from './Users.module.css'
import userPhoto from './../../Assets/Images/user.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { usersAPI } from '../../apiFolder/API'
import { follow, unfollow } from '../../Redux/usersReducer'

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let curP = props.currentPage;
  let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
  let curPL = curP + 5;
  let slicedPages = pages.slice(curPF, curPL);

  return (
    <div>
      <div>
        {slicedPages.map(page => {
          return <span
            className={props.currentPage === page && s.selectedPage}
            onClick={(e) => { props.onPageChanger(page) }}>{page}
          </span>
        })}
      </div>
      {props.users.map(user => (
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={`/profile/${user.id}`}>
                <img className={s.avatar} src={user.photos.small !== null ? user.photos.small : userPhoto} alt="" />
              </NavLink>
            </div>
            <div>
              {user.followed
                ? <button
                  className={s.unfollowButton}
                  disabled={props.followingInProgress.some(id=> id===user.id)}
                  onClick={() => {
                    debugger
                    props.unfollow(user.id)

                    // props.toggleFollowingProgress(true, user.id)
                    // usersAPI.unfollow(user)
                    //   .then(responce => {
                    //     if (responce.data.resultCode === 0) { props.unfollow(user.id) }
                    //     props.toggleFollowingProgress(false, user.id)
                    //   })

                  }}>Unfollow</button>
                : <button
                  className={s.followButton}
                  disabled={props.followingInProgress.some(id=> id===user.id)}
                  onClick={() => {
                    debugger
                    props.follow(user.id)
                    // props.toggleFollowingProgress(true, user.id)
                    // usersAPI.follow(user)
                    //   .then(responce => {
                    //     if (responce.data.resultCode === 0) { props.follow(user.id) }
                    //     props.toggleFollowingProgress(false, user.id)
                    //   })
                  }}>Follow</button>}

            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Users
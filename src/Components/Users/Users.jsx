import React from 'react'
import s from './Users.module.css'
import userPhoto from './../../Assets/Images/user.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { usersAPI } from '../../apiFolder/API'

const Users = (props) => {
  // debugger
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
                ? <button desabled={props.followingInProgress} onClick={() => {
                  debugger
                  props.toggleFollowingProgress(true)
                  usersAPI.unfollow(user)
                    .then(responce => {
                      if (responce.data.resultCode === 0) { props.unfollow(user.id) }
                      props.toggleFollowingProgress(false)
                    })
                }}>Unfollow</button>
                : <button desabled={props.followingInProgress} onClick={() => {
                  props.toggleFollowingProgress(true)
                  usersAPI.follow(user)
                    .then(responce => {
                      if (responce.data.resultCode === 0) { props.follow(user.id) }
                      props.toggleFollowingProgress(false)
                    })
                }}>Follow</button>}

              {/* axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, { withCredentials: true, headers:{"API-KEY":'f03ec59c-3d02-4701-bf90-527792b5d4b5'}})
                    .then(response => {
                      if (response.data.resultCode === 0) { props.unfollow(user.id) }
                    })
                }}>Unfollow</button>
                : <button onClick={() => {
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, { withCredentials: true,  headers:{"API-KEY":'f03ec59c-3d02-4701-bf90-527792b5d4b5'}})
                    .then(response => {
                      if (response.data.resultCode === 0) { props.follow(user.id) } */}



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
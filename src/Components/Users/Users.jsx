import React from 'react'
import s from './Users.module.css'
import userPhoto from './../../Assets/Images/user.png'


const Users = (props) => {
debugger
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
            onClick={(e) => {props.onPageChanger(page) }}>{page}
          </span>
        })}
      </div>
      {props.users.map(user => (
        <div key={user.id}>
          <span>
            <div>
              <img className={s.avatar} src={user.photos.small !== null ? user.photos.small : userPhoto} alt="" />
            </div>
            <div>
              {user.followed
                ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                : <button onClick={() => { props.follow(user.id) }}>Follow</button>}
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
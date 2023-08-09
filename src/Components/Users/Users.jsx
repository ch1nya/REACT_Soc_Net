import React from 'react'
import s from './Users.module.css'
import axios from 'axios'
import userPhoto from './../../Assets/Images/user.png'


const Users = (props) => {
  debugger
  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      props.setUsers(response.data.items)
    })
  }
  return <div>
    <h1>USERS</h1>

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

}

export default Users
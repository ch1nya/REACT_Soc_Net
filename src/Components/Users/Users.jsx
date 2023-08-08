import React from 'react'
import s from './Users.module.css'



const Users = (props) => {
debugger
  if (props.users.length === 0){
    props.setUsers( 
      [
      { id: 1, name: 'Ivan', status: 'here is my status', followed: false, location: { city: 'Minsk', country: 'Belarus' } , photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRtzTlO5KRSzZ67XMGm2DTq_5fmxVhcsm1cw&usqp=CAU", },
      { id: 2, name: 'Helen', status: 'here is my status1', followed: true, location: { city: 'Lesabon', country: 'Portugal' }, photo: "https://memepedia.ru/wp-content/uploads/2019/01/mem-yaytso.jpg", },
      { id: 3, name: 'Dron', status: 'here is my status2', followed: false, location: { city: 'Moscow', country: 'Russia' }, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTraCCbsJgrDL_kgCO1chAroGr2KPPwWmVtEw&usqp=CAU", },
      { id: 4, name: 'Marta', status: 'here is my status3', followed: false, location: { city: 'Orlando', country: 'USA' }, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnvie5SwbhhA5YJXKqRDDOlsWvlA2Sz81UQ&usqp=CAU", },
      { id: 5, name: 'Dima', status: 'here is my status4', followed: true, location: { city: 'Beijing', country: 'China' }, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VgouGIj5sFWwhEycB1euuynhs5Cvt1NsMA&usqp=CAU", },
      { id: 6, name: 'Alex', status: 'here is my status5', followed: false, location: { city: 'Munich', country: 'Germany' }, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ukvUsooi5M8QMU0jGJagEF824N_DbpAxHg&usqp=CAU", },
      { id: 7, name: 'Hehe', status: 'here is my status6', followed: false, location: { city: 'Paris', country: 'France' }, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRo6oRGkD1T75-wJCMY5ObXIoL3OkSCo0N7g&usqp=CAU", },
    ],)}

  return <div>
    <h1>USERS</h1>

    {props.users.map(user => (
      <div key={user.id}>
        <span>
          <div>
            <img className={s.avatar} src={user.photo} alt="" />
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
            <div>{user.location.country}</div>
            <div>{user.location.city}</div>
          </span>
        </span>
      </div>
    ))}
  </div>

}

export default Users
import React from 'react'
import s from './Users.module.css'
import axios from 'axios'
import userPhoto from './../../Assets/Images/user.png'



class Users extends React.Component {
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
    debugger
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    let curP = this.props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    // // И в jsx меняем:
    // pages.map(*****)
    // // на 
    // slicedPages.map(*****)



    return <div>
      <div>
        {slicedPages.map(page => {
          return <span
            className={this.props.currentPage === page && s.selectedPage}
            onClick={(e) => { this.onPageChanger(page) }}>{page}
          </span>
        })}
      </div>
      {this.props.users.map(user => (
        <div key={user.id}>
          <span>
            <div>
              <img className={s.avatar} src={user.photos.small !== null ? user.photos.small : userPhoto} alt="" />
            </div>
            <div>
              {user.followed
                ? <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
                : <button onClick={() => { this.props.follow(user.id) }}>Follow</button>}
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
}

export default Users
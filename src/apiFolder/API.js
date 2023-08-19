import axios from "axios";
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": 'f03ec59c-3d02-4701-bf90-527792b5d4b5'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    auth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    unfollow(user) {
        return instance.delete(`follow/${user.id}`)
        
    },
    follow(user) {
        return instance.post(`follow/${user.id}`)
    }

}

// axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, { withCredentials: true,  headers:{"API-KEY":'f03ec59c-3d02-4701-bf90-527792b5d4b5'}})
//                     .then(response => {
//                       if (response.data.resultCode === 0) { props.follow(user.id) }
//                     })


///////          ↑ after
///////          ↓ before
//  export const getUsers = () => {
//     return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
//  { withCredentials: true })}


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
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
        
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    }

}
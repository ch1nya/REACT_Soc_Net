import axios from "axios";
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": 'dcee610c-8e86-4339-ab40-644aeab3a76b'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
        
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    }

}

export const authAPI = {
    auth() {
        return instance.get(`auth/me`)
    }
}
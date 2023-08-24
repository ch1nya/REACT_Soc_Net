import axios from "axios";
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '150e27f4-034c-4d7c-a105-3f006802078b'
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
        console.warn('Obsolete method. Please use ProfileApi Object')
        return profileAPI.getProfile(userId)
    }

}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`,{status: status})
    },
}


export const loginAPI = {
    getProfile(){
    return instance.post(`login`)
},
getStatus(userId){
    return instance.get(`profile/status/${userId}`)
},
updateStatus(status){
    return instance.put(`profile/status`,{status: status})
},
}

export const authAPI = {
    auth() {
        return instance.get(`auth/me`)
    }
}

import axios from 'axios'

const api = axios.create({
    baseURL: "/api",
})
//USER
export const addUser = payload => api.post(`/user`, payload)
export const getUser = name => api.get(`/user/${name}`)
export const updateGarden = (id, payload) => api.put(`/user/${id}`, payload)

//BALLOONS
export const addBalloons = payload => api.post(`/balloons`, payload)
export const getBalloons = userId => api.get(`/balloons/${userId}`)
export const updateBalloons = (balloonId, payload) => api.put(`/balloons/${balloonId}`, payload) // only being used to claim balloons at the moment

//FRIENDS
export const addFriends = payload => api.post(`/friends`, payload)
export const getFriends = userId => api.get(`/friends/${userId}`)
export const getFriendByName = (friendName, id) => api.get(`/friend/${friendName}/${id}`)

//SEEDS
export const addSeeds = payload => api.post(`/seeds`, payload)
export const getSeeds = userId => api.get(`/seeds/${userId}`)
export const updateSeeds = (userId, type, payload) => api.put(`/seeds/${userId}/${type}`, payload) // only updates variants and quantity

// PLANTS
export const addPlant = payload => api.post(`/plants`, payload)
export const getPlants = userId => api.get(`/plants/${userId}`)
export const updatePlant = (id, payload) => api.put(`/plants/${id}`, payload)



const apis = {
    addUser,
    getUser,
    updateGarden,
    addBalloons,
    getBalloons,
    updateBalloons,
    getFriends,
    addFriends,
    getFriendByName,
    addSeeds,
    getSeeds,
    updateSeeds,
    addPlant,
    getPlants,
    updatePlant,
}

export default apis

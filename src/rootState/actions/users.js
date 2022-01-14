
const ADD_USER = (payload) => {
    return {
        type: "ADD_USER",
        payload: payload
    }
}
const REMOVE_USER = (payload) => {
    return {
        type: "REMOVE_USER",
        payload: payload
    }
}

export { ADD_USER, REMOVE_USER }
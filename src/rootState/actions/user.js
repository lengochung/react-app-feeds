const LOGIN = (payload) => {
    return {
        type: "LOGIN",
        payload: payload
    }
}
const LOGOUT = () => {
    return {
        type: "LOGOUT",
        payload: {}
    }
}
const UPDATE_INFOUSER = (payload) => {
    return {
        type: "UPDATE_INFOUSER",
        payload: payload
    }
}

export { LOGIN, LOGOUT,UPDATE_INFOUSER }
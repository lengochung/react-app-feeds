const REAL_TIME = () => {
    return {
        type: "REAL_TIME",
        payload: ""
    }
}
const LIKE = (payload) => {
    return {
        type: "LIKE",
        payload: payload
    }
}
const DISLIKE = (payload) => {
    return {
        type: "DISLIKE",
        payload: payload
    }
}
const COMMENT = (payload) => {
    return {
        type: "COMMENT",
        payload: payload
    }
}
const DELETE_COMMENT = (payload) => {
    return {
        type: "DELETE_COMMENT",
        payload: payload
    }
}
const CREATE_POST = (payload) => {
    return {
        type: "CREATE_POST",
        payload: payload
    }
}
const DELETE_POST = (payload) => {
    return {
        type: "DELETE_POST",
        payload: payload
    }
}


export { LIKE, DISLIKE, REAL_TIME, COMMENT, DELETE_COMMENT, CREATE_POST, DELETE_POST }
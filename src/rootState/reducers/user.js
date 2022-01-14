import load from "../../APIs"

const initialState = {
    info: {},
    logged: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN": {
            load("users").updateWhere("status", 1, "uid", action.payload.uid)
            action.payload.status = "1"
            return {
                info: action.payload,
                logged: true
            }
        }
        case "LOGOUT": {
            return {
                info: {},
                logged: false
            }
        }
        case "UPDATE_INFOUSER": {
            let newUser = state.info
                newUser.uname = action.payload.name
                newUser.phone = action.payload.phone
            load('users').updatesWhere('uname',action.payload.name,'phone',action.payload.phone,'uid',newUser.uid)
            return {
                info: newUser,
                logged: true
            }
        }
        default:
            return state
    }
}

export default userReducer  
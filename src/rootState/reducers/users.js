import load from "../../APIs"

const initialState = {
    list: load("users").getAll()
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER": {
            const newList = [...state.list]
            newList.push(action.payload)
            return {
                ...state,
                list: newList
            }
        }
        case "REMOVE_USER": {
            load("users").deleteWhere("uid", action.payload.uid)
            const newList = state.list.filter(ob => ob !== action.payload)
            return {
                ...state,
                list: newList
            }
        }
        default:
            return state
    }
}

export default usersReducer
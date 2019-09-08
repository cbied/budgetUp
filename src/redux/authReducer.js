
const initialState = {
    user_data: null,
}

const HANDLE_SESSION_DATA = 'HANDLE_SESSION_DATA' 

export const handleSessionData = data => {
    return {
        type: HANDLE_SESSION_DATA,
        payload: data
    }
}



export default function authReducer(state=initialState,action) {
    const { type, payload } = action

    switch(type) {
        case HANDLE_SESSION_DATA:
            return { ...state, user_data: payload }

        default: return state
    }
} 
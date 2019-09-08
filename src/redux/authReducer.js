
const initialState = {
    user_data: null,
    username: '',
    id: '',
    first_name: ''
}

const HANDLE_SESSION_DATA = 'HANDLE_SESSION_DATA' 
const HANDLE_USERNAME = 'HANDLE_USERNAME'
const HANDLE_ID = 'HANDLE_ID'
const HANDLE_FIRST_NAME = 'HANDLE_FIRST_NAME'

export const handleSessionData = data => {
    return {
        type: HANDLE_SESSION_DATA,
        payload: data
    }
}

export const handleUsername = username => {
    return {
        type: HANDLE_USERNAME,
        payload: username
    }
}

export const handleId = id => {
    return {
        type: HANDLE_ID,
        payload: id
    }
}

export const handleFirstname = firstname => {
    return {
        type: HANDLE_FIRST_NAME,
        payload: firstname
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
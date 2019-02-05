export const ADD_CONTENT = 'ADD_CONTENT'
export const TOGGLE_CONTENT = 'TOGGLE_CONTENT'
export const ACCOUNT_SAVE_SUCCES = 'ACCOUNT_SAVE_SUCCES'

// Action Creators

export function addContent(text){
    return {
        type: ADD_CONTENT,
        text
    }
}

export function toggleContent(index) {
    return {
        type: TOGGLE_CONTENT,
        index
    }
}

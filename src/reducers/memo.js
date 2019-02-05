import {ADD_CONTENT} from '../actions'

const memos = (state=[],action)=>{

    switch (action.type) {
        case ADD_CONTENT:
            return[
                ...state,
                {
                    text: action.text
                }
            ]

        default:
            return state
    }
}


export default memos

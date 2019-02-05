import {combineReducers} from 'redux'
import memos from './memo'
import {reducer as reduxFormReducer } from 'redux-form'

//複数のReducersをオブジェクトで渡す

const memoApp = combineReducers({
    memos,
    form : reduxFormReducer
})

export default memoApp;

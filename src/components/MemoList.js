import {connect} from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import Memo from './Memo'

const MemoList = ({memos}) => (
    console.log('mapStateToProps memos',memos),
    <ul>
        {memos.map(memo=>(
            console.log('map memo',memo),
            <Memo key={memo.text.memo}{...memo.text}/>
        ))}

    </ul>
)

//"mapStateToProps"で取得できるプロパティは、combineReducers関数で引数として、
//分割して作成しているreducersである。
//今回の場合、memoAppのreducerに付属されている"memos"reducerと"form"reducerが
//下記の"state"として渡されている。
const mapStateToProps = state => (
    console.log('mapStateToProps state',state.memos),
    {
    memos:state.memos
})

// const mapDispatchToProps = dispatch => (
//     console.log('mapDispatchToProps dispatch',dispatch)
// )

export default connect(mapStateToProps,null)(MemoList)
// export default MemoList

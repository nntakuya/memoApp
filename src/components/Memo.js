import React from 'react'
import PropTypes from 'prop-types'

const Memo = (props)=>(
    console.log('Memo',props.memo),
    <li>{props.memo}</li>
)

export default Memo

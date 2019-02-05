import React from 'react'
import AddContent from './AddContent'

class ContactPage extends React.Component {
    constructor() {
        super()
        let submit = values => {
            console.log(values);
        }
    }

    render(){
        return <AddContent onSubmit ={this.submit} />
    }
}


export default ContactPage

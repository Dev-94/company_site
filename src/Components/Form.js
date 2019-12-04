import React from 'react';




class Form extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        comment: '',

    }

    // handleOnChange(typing)
    // handling submit
    handleOnChange = (event) => {
        const target = event.target
        // console.log('target: ' + target)
        const value = target.value
        // console.log("value: " + value)
        const name = target.name
        // console.log("name: " + name)
        this.setState({
            [name]: value
        })
    }



    handleSubmit(event) {
        event.preventDefault()
        // this.recaptcha.exectute()
        console.log(event)

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Form</h1>
                <label>Name</label>
                <input
                    type='text'
                    name='name'
                    onChange={this.handleOnChange}
                    value={this.state.name}
                />

                <label>Email</label>
                <input
                    type='text'
                    name='email'
                    onChange={this.handleOnChange}
                    value={this.state.email}
                />

                <label>Phone Number</label>
                <input
                    type='text'
                    name='phone'
                    onChange={this.handleOnChange}
                    value={this.state.phone}
                />

                <label>Subject</label>
                <input
                    type='text'
                    name='subject'
                    onChange={this.handleOnChange}
                    value={this.state.subject}
                />

                <label>Comment</label>
                <input
                    type='text'
                    name='comment'
                    onChange={this.handleOnChange}
                    value={this.state.comment}
                />

                <input type='submit' value='Submit' />



            </form >
        )
    }

}

export default Form
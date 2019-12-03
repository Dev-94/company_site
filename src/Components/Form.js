import React from 'react';
import ReactDOM from 'react-dom';


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
    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    handleSubmit(e) {
        e.preventDefault()
        console.log(e)

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Form</h1>
                <label>Name</label>
                <input
                    type='text'
                    value='name'
                    onChange={this.handleOnChange}
                    value={this.state.name}
                />

                <label>Email</label>
                <input
                    type='text'
                    value='email'
                    onChange={this.handleOnChange}
                    value={this.state.email}
                />

                <label>Phone Number</label>
                <input
                    type='text'
                    value='phone'
                    onChange={this.handleOnChange}
                    value={this.state.phone}
                />

                <label>Subject</label>
                <input
                    type='text'
                    value='subject'
                    onChange={this.handleOnChange}
                    value={this.state.subject}
                />

                <label>Comment</label>
                <input
                    type='text'
                    value='comment'
                    onChange={this.handleOnChange}
                    value={this.state.comment}
                />

                <input type='submit' value='Submit' />

            </form >
        )
    }

}

export default Form
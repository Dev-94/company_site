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
    // handing submit

    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
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
                    value={this.name}
                />

                <label>Email</label>
                <input
                    type='text'
                    value='email'
                    onChange={this.handleOnChange}
                    value={this.email}
                />

                <label>Phone Number</label>
                <input
                    type='text'
                    value='phone'
                    onChange={this.handleOnChange}
                    value={this.phone}
                />

                <label>Subject</label>
                <input
                    type='text'
                    value='subject'
                    onChange={this.handleOnChange}
                    value={this.subject}
                />

                <label>Comment</label>
                <input
                    type='text'
                    value='comment'
                    onChange={this.handleOnChange}
                    value={this.comment}
                />

                <input type='button' value='Submit' onSubmit={this.handleSubmit} />

            </form >
        )
    }

}

export default Form
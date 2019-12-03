import React from 'react';
import ReactDOM from 'react-dom';


class Form extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        comment: ''

    }

    // handleOnChange(typing)
    // handing submit

    handleOnChange() {

    }

    onSubmit() {

    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Form</h1>
                <label>Name</label>
                <input
                    type='text'
                    value='name'
                    onChange={this.handleOnChange}
                    value={this.name} />

                <label>Email</label>
                <input />

                <label>Phone</label>
                <input />

                <label>Subject</label>
                <input />

                <label>Comment</label>
                <input />

                <input type='button' value='Submit' />

            </form >
        )
    }

}

export default Form
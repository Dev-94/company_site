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
                    value={this.name}
                />

                <label>Email</label>
                <input
                    type='text'
                    value='email'
                    onChange={this.handleOnChange}
                    value={this.name}
                />

                <label>Phone Number</label>
                <input
                    type='text'
                    value='phone'
                    onChange={this.handleOnChange}
                    value={this.name}
                />

                <label>Subject</label>
                <input
                    type='text'
                    value='subject'
                    onChange={this.handleOnChange}
                    value={this.name}
                />

                <label>Comment</label>
                <input
                    type='text'
                    value='comment'
                    onChange={this.handleOnChange}
                    value={this.name}
                />

                <input type='button' value='Submit' />

            </form >
        )
    }

}

export default Form
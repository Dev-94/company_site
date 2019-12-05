import React from 'react';
import { ReCaptcha } from 'react-recaptcha-v3'

import './Form.css'



class Form extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        comment: '',
    }


    handleOnChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }


    handleSubmit(event) {
        event.preventDefault()
        console.log(event.target)

    }

    verifyCallback = (recaptchaToken) => {
        console.log('recaptcha token: ' + recaptchaToken)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <h1>Please contact us to learn more about what we do!</h1>
                <br />

                <label>Name</label>
                <br />

                <input
                    type='text'
                    name='name'
                    onChange={this.handleOnChange}
                    value={this.state.name}
                />
                <br />
                <br />

                <label>Email</label>
                <br />
                <input
                    type='text'
                    name='email'
                    onChange={this.handleOnChange}
                    value={this.state.email}
                />
                <br />
                <br />


                <label>Phone Number</label>
                <br />
                <input
                    type='text'
                    name='phone'
                    onChange={this.handleOnChange}
                    value={this.state.phone}
                />
                <br />
                <br />


                <label>Subject</label>
                <br />
                <input
                    type='text'
                    name='subject'
                    onChange={this.handleOnChange}
                    value={this.state.subject}
                />
                <br />
                <br />


                <label>Comment</label>
                <br />
                <input
                    type='text'
                    name='comment'
                    onChange={this.handleOnChange}
                    value={this.state.comment}
                    errortext={this.state.comment}
                />

                <br />
                <br />

                <input className="button" type='submit' value='Submit' />

                <ReCaptcha
                    sitekey='6LcNJMYUAAAAAC0y9fEVN3DI-5uD8iSvydiOKxCf'
                    verifyCallback={this.verifyCallback}
                />
            </form >
        )
    }
}

export default Form
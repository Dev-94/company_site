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
        console.log(event.target)

    }

    verifyCallback = (recaptchaToken) => {
        // Here you will get the final recaptchaToken!!!  
        console.log(recaptchaToken, "<= your recaptcha token")
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Form</h1>
                <label>Name</label>
                <br />

                <input
                    type='text'
                    name='name'
                    onChange={this.handleOnChange}
                    value={this.state.name}
                />
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

                <label>Phone Number</label>
                <br />

                <input
                    type='text'
                    name='phone'
                    onChange={this.handleOnChange}
                    value={this.state.phone}
                />
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

                <label>Comment</label>
                <br />

                <input
                    type='text'
                    name='comment'
                    onChange={this.handleOnChange}
                    value={this.state.comment}
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
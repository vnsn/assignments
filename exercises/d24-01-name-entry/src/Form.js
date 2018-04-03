import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            inputs: {
                firstName: props.firstName || "",
                lastName: props.lastName || "",
                email: props.email || ""
            },
            people: []
        }

        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        // take value from input and set state accordingly
        const { name, value } = event.target;

        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState(prevState => {
            return {
                inputs: this.initialState.inputs,
                people: [...prevState.people, prevState.inputs]
            }
        })
    }

    render() {
        console.log(this.state.inputs);
        console.log(this.state.people);
        const { firstName, lastName, email } = this.state.inputs;
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="firstName" onChange={this.handleChange} value={firstName} type="text" placeholder="Enter First Name"/>
                <input name="lastName" onChange={this.handleChange} value={lastName} type="text" placeholder="Enter Last Name"/>
                <input name="email" onChange={this.handleChange} value={email} type="email" placeholder="@email"/>
                <button>Submit</button>
            </form>
        );
    }
}

export default Form;

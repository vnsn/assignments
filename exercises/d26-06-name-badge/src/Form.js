import React, { Component } from 'react';
import Badge from "./Badge";

class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                firstName: props.firstName || "",
                lastName: props.lastName || "",
                email: props.email || "",
                birthCity: props.birthCity || "",
                phone: props.phone || "",
                faveFood: props.faveFood || "",
                about: props.about || ""
            },
            people: []
        }

        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.canBeSubmitted = this.canBeSubmitted.bind(this);
    }

    handleChange(event) {
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
        if (!this.canBeSubmitted()) {
            return;
          }
        this.setState(prevState => {
            return {
                inputs: this.initialState.inputs,
                people: [...prevState.people, prevState.inputs]
            }
        })
    }

    canBeSubmitted() {
        const { firstName, lastName, email, birthCity, phone, faveFood, about } = this.state.inputs;

        return (
            firstName.length > 2 && lastName.length > 2 &&
            email.length > 2 && birthCity.length > 2 &&
            phone.length > 2 && faveFood.length > 2 && about.length > 2
        );
    }

    render() {
        const { firstName, lastName, email, birthCity, phone, faveFood, about } = this.state.inputs;

        return (
            <div className="Name">
                <form onSubmit={this.handleSubmit} className="name-form" name="name-form">
                    <input onChange={this.handleChange} value={firstName} type="text" name="firstName" id="firstName" placeholder="First Name" />
                    <input onChange={this.handleChange} value={lastName} type="text" name="lastName" id="lastName" placeholder="Last Name" />
                    <input onChange={this.handleChange} value={email} type="email" name="email" id="email" placeholder="Email" />
                    <input onChange={this.handleChange} value={birthCity} type="text" name="birthCity" id="birthCity" placeholder="Place of Birth" />
                    <input onChange={this.handleChange} value={phone} type="number" name="phone" id="phone" placeholder="Phone" />
                    <input onChange={this.handleChange} value={faveFood} type="text" name="faveFood" id="faveFood" placeholder="Favorite Food" />
                    <textarea onChange={this.handleChange} value={about} name="about" rows="7" cols="30" id="about" placeholder="Tell us about yourself" />
                    <button disabled={!this.canBeSubmitted()}>Submit</button>
                </form>

                <Badge people={this.state.people} />

            </div>
        );
    }
}

export default Form;

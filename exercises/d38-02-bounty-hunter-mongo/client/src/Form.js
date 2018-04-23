import React, { Component } from 'react';
import { connect } from "react-redux";
import { addBounty } from "./redux/bounties-redux";

class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                firstName: "",
                lastName: "",
                dead: false,
                amount: "",
                type: ""
            }
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


// I think something is off with the "dead" property. 

    handleChange(event) {
        const { name, value, type, checked } = event.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: type === "checkbox" ? checked : value
                }
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.addBounty(this.state.inputs);
        this.setState(this.initialState);
    }

    render() {
        const { firstName, lastName, dead, amount, type } = this.state.inputs;
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="add-form">
                    <p><label htmlFor="firstName">Name</label>
                        <input onChange={this.handleChange} name="firstName" value={firstName} type="text" placeholder="First Name" />
                        <input onChange={this.handleChange} name="lastName" value={lastName} type="text" placeholder="Last Name" />
                    </p>
                    <p>
                        <label htmlFor="dead">Dead?
                        <input onChange={this.handleChange} name="dead" id="dead" type="checkbox" checked={dead} /></label>
                    </p>

                    <p>Sith or Jedi?
                        <select onChange={this.handleChange} name="type" id="type" value={type}>
                            <option value="none">Pick a type</option>
                            <option value="sith">Sith</option>
                            <option value="jedi">Jedi</option>
                        </select>
                    </p>

                    <p><label htmlFor="amount">Bounty Amount
                    <input onChange={this.handleChange} name="amount" value={amount} type="number" placeholder="Amount" /></label>
                    </p>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addBounty })(Form)
                // where the null is, is usually mapStateToProps, but since we don't need anything from state, we don't need to pass a function here. 
                // Need to put null as placeholder and cue that 
// connect(function, object)
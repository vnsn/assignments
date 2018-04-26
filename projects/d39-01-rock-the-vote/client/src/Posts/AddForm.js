import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../redux/item-reducer';


class AddForm extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                title: "",
                summary: "",
                votes: 0
            }
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addItem(this.state.inputs);
        this.setState(this.initialState);
    }

    render() {
        const { title, summary } = this.state.inputs;
        return (
                <form onSubmit={this.handleSubmit} className="add-form">
                    <p>
                        <label htmlFor="title">Title</label>
                        <input onChange={this.handleChange} name="title" id="title" value={title} type="text" />
                    </p>
                    <p>
                        <label htmlFor="summary">Summary of the issue</label>
                        <textarea onChange={this.handleChange} name="summary" id="summary" value={summary} />
                    </p>
                    <button>Post</button>
                </form>
        )
    }
}

export default connect(null, { addItem })(AddForm);

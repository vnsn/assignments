import React, {Component} from 'react';

import {connect} from "react-redux";
import {addThing} from "./redux/things.js";

class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                imgUrl: "",
                caption: "",
                why: ""
            }
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        const {name, value} = event.target;
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
        this.props.addThing(this.state.inputs);
        this.setState(this.initialState);
    }

    render(){
        const { imgUrl, caption, why} = this.state.inputs;
        return (
            <div className="form-input">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={imgUrl} type="text" name="imgUrl" id="imgUrl" placeholder="Image URL" />
                    <input onChange={this.handleChange} name="caption" value={caption} type="text" placeholder="Enter Caption" />
                    <input onChange={this.handleChange} name="why" value={why} type="text" placeholder="Enter why you think it's ugly" />
                    <button>Submit</button>
                </form>
    
            </div>
        )
    }
}

export default connect(null, {addThing}) (Form)
// where the null is, is usually mapStateToProps, but since we don't need anything from state, we don't need to pass a function here. 
// Need to put null as placeholder and cue that 
// connect(function, object)
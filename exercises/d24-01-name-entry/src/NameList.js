import React, { Component } from 'react';
import Name from "./Name";

class NameList extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      inputs: {
          firstName: props.firstName || ""
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


  handleSubmit(event){
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

    const { firstName } = this.state.inputs;

    const personList = this.state.people.map((str,index) => 
      <Name 
          key={str + index} 
          item={str}
          index={index}
      />)

    return (
      <div className="Name">
        <form onSubmit={this.handleSubmit}>
          <input name="firstName" onChange={this.handleChange} value={firstName} type="text" placeholder="Enter First Name"/>
          <button>Submit</button>
        </form>
        
        <h1>What you typed: {firstName}</h1>
        <ol>
        {personList}
        </ol>
      </div>
    );
  }
}

export default NameList;

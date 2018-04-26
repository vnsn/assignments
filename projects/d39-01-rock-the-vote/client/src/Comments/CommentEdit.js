import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editItem } from '../redux/item-reducer';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                editingText: props.editingText || ""
            }
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleEditComment = this.handleEditComment.bind(this);
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

    handleEditComment(e, id, itemObj, editingText, editingIndex) {
        e.preventDefault();
        const requestBody = {
            comments: itemObj.comments.map((comment, i)=> {
                if(i === editingIndex) return editingText;
                return comment;
            })
        };
        this.props.editItem(id, requestBody, true);
    }

    render() {
        const { editingIndex, itemObj } = this.props;
        const { editingText } = this.state.inputs;
        return (
            <div>
                <form onSubmit={(e) => this.handleEditComment(e, itemObj._id, itemObj, editingText, editingIndex)} className="comment-form">
                    <input onChange={this.handleChange} name="editingText" value={editingText} />

                    <button>Save</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { editItem })(CommentForm);

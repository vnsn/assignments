import React, { Component } from 'react';
import { connect } from "react-redux";
import { getItems, deleteItem, editItem } from "../redux/item-reducer";
import CommentList from '../Comments/CommentList';

class List extends Component {
    componentDidMount() {
        this.props.getItems();
    }

    handleVote = (id, itemObj, voteNum) => {
        itemObj.votes += voteNum;
        this.props.editItem(id, itemObj);
    }

    render() {
        const { data } = this.props;

        const itemList = data.sort((a, b) => b.votes - a.votes).map(item => {
            return (
                <div className="issue" key={item._id}>
                    <div className="votes">
                        <button onClick={() => this.handleVote(item._id, item, 1)} value="1" className="up-button">UP</button>

                        {item.votes}

                        <button onClick={() => this.handleVote(item._id, item, -1)} value="-1" className="dn-button">DN</button>

                    </div>

                    <h2 className="issue-name">{item.title}</h2>

                    <button onClick={() => this.props.deleteItem(item._id)} className="del-button">DEL</button>
                    
                    <p className="item-summary">{item.summary}</p>

                    <div className="comment-container">
                        <CommentList {...item} />
                    </div>
                </div>
            );
        })

        return (
            <div className="issue-container">
                {itemList}
            </div>
        )
    }
}

export default connect(state => state.items, { getItems, deleteItem, editItem })(List);

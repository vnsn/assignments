import React, { Component } from 'react';

import { connect } from "react-redux";
import { getBounties, deleteBounty } from "./redux/bounties-redux";
import EditForm from "./EditForm";

class List extends Component {

    componentDidMount() {
        this.props.getBounties();
    }

    render() {
        const { data } = this.props;
        const bountyList = data.map(bounty => {
            return (
                <div className="enemy" key={bounty._id}>
                    <button onClick={() => this.props.deleteBounty(bounty._id)} className="del-button">DEL</button>
                    <h2 className="bounty-name">{bounty.firstName} {bounty.lastName}</h2>

                    <EditForm id={bounty._id} {...bounty} />
                </div>
            );
        })

        return (
            <div className="enemy-container">
                {bountyList}
            </div>
        )
    }

}

export default connect(state => state.bounties, { getBounties, deleteBounty })(List);

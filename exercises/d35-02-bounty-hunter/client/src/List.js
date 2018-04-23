import React, { Component } from 'react';

import { connect } from "react-redux";
import { getBounties, deleteBounty } from "./redux/bounties-redux";
import EditForm from "./EditForm";

class List extends Component {

    render(props) {
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
            <div>
                {bountyList}
            </div>
        )
    }

}

export default connect(state => state.bounties, { getBounties, deleteBounty })(List);


// why don't we need constructor??
// why is it const { data } = this.props; and not just props??
// but calling the deleteBounty function only needs props.deleteBounty. 


{/* <ul className="bounty-info">
<li>Reward: ${bounty.amount}</li>
<li>Type: {bounty.type}</li>
<li>Dead? {bounty.dead}</li>
</ul> */}
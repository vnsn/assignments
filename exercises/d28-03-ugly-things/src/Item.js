import React from 'react'
import EditForm from './EditForm';

function Item(props) {
    console.log(props);
    const {imgUrl, caption, why, removeThing, index} = props;
    return (
        <div>
            <img style={{height: "100px", width: "auto"}} src={imgUrl} alt="" />
            <h2>{caption}</h2>
            <p>{why}</p>
            <button onClick={() => removeThing(index)}>DEL</button>
            <EditForm index={index} imgUrl={imgUrl} caption={caption} why={why} />
        </div>
    )
}

export default Item;

// test images
// https://i.telegraph.co.uk/multimedia/archive/01565/blobfish_1565953c.jpg
// https://australianmuseum.net.au/uploads/images/16115/psychrolutid2_big.jpg



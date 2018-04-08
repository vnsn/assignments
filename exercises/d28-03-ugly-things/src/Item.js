import React from 'react'

function Item(props) {
    console.log(props);
    const {imgUrl, caption, why, removeThing, editThing, index} = props;
    return (
        <div>
            <img style={{height: "100px", width: "auto"}} src={imgUrl} alt="" />
            <h2>{caption}</h2>
            <p>{why}</p>
            <button onClick={() => removeThing(index)}>DEL</button>
            <button onClick={() => editThing(index)}>EDIT</button>
        </div>
    )
}

export default Item;


// https://i.telegraph.co.uk/multimedia/archive/01565/blobfish_1565953c.jpg
// https://australianmuseum.net.au/uploads/images/16115/psychrolutid2_big.jpg



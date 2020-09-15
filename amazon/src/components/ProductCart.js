import React from 'react';

const Product = (props) => {
    // return <div>
    //     <h1>{props.productDetails.name}</h1>
    //     <h2>{props.productDetails.price}</h2>
    // </div>
    return <div className="col-md-3">
        <div className="card">
            <img className="card-img-top" src={props.productDetails.imageUrl} alt="Card image cap" />
            <div className="card-body">
                <p className="card-text">{props.productDetails.name}</p>
                <button className="btn btn-primary" onClick={e=>{
                    props.handleClick(props.productDetails);
                }}>Add To Cart {props.productDetails.price}</button>
            </div>
        </div>
    </div>
}

export default Product;
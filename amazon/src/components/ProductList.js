import React from 'react';
import Product from './ProductCart';

const ProductList = (props) => {
    const Products = [{
        name:"iPhone",
        price:"100000",
        imageUrl:"https://cdn.shopify.com/s/files/1/0049/5514/4307/products/Clarity-Black-iPhone-11-Pro-Front_c21abfc4-5b6e-4758-9657-ff091a59be46_680x.jpg?v=1598609734"
    },
    {
        name:"Samsung",
        price:"20000",
        imageUrl:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-note10-lite-1.jpg" 
    }]

    const update = (data) => {
        console.log("I clicked");
        console.log(data);
        props.UpdateCartInApp(data);
    }

    return <div className="row">
        {Products.map((item,index) => {
            return <Product productDetails={item} handleClick = {update}/>
        })}
    </div>
}

export default ProductList;
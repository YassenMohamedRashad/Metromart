import React from 'react';
import Products from "../Products.json";
import Card from './Card';


function ProductsContainer() {
    return (
        <div className="container">
            <div className="row justify-content-center  ">
                {
                    Products && Products.map((item) => {
                        return (
                            <Card item={item} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ProductsContainer;
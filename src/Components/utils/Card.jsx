import React from 'react';
import "../../assets/css/Card.css"


function Card ( { item } )
{

    return (
        <div className='col'>
            <div className="card Card-cardContainer">
                <img src={ item.image_path } className="card-img-top w-100" style={{height:"250px"}} />
                <div className="card-body">
                    <h5 className="card-title">{ item.name }</h5>
                    <p>{ item.price }</p>
                    <p>rating</p>
                    <div className='d-flex justify-content-between'>
                        <a className="btn btn-success"><i class="bi bi-eye"></i></a>
                        <a className="btn btn-danger"><i class="bi bi-cart-plus"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
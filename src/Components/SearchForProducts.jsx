import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from './utils/Card';
import "../assets/css/SearchForProducts.css";

function SearchForProducts ()
{
    let [ products, setProducts ] = useState( [] );

    let [ minPriceValue, setMinPriceValue ] = useState( 1 );
    let [ maxPriceValue, setMaxPriceValue ] = useState( 1000000 );
    let [ SortBy, setSortBy ] = useState("");

    const handleMinPriceValue = ( e ) =>
    {
        setMinPriceValue( e.target.value );
    };
    const handleMaxPriceValue = ( e ) =>
    {
        setMaxPriceValue( e.target.value );
    };


    const handleSortBy = (e) =>
    {
        setSortBy(e.target.value)
    }




    const searchKey = useParams().key;
    let getProducts = () =>
    {

    };

    if ( searchKey == "allProducts" )
    {
        getProducts = async () =>
        {
            try
            {
                const res = await axios.get( `http://localhost:5011/products/` );
                setProducts( res.data.data );
            } catch ( error )
            {
                console.error( "Error fetching products:", error );
            }
        };
    } else if ( parseInt( searchKey ) )
    {
        getProducts = async () =>
        {
            try
            {
                const res = await axios.get( `http://localhost:5011/products/getProductsByCategory/${ searchKey }` );
                setProducts( res.data.data );
            } catch ( error )
            {
                console.error( "Error fetching products:", error );
            }
        };
    }
    else
    {
        getProducts = async () =>
        {
            try
            {
                const res = await axios.get( `http://localhost:5011/products/search/${ searchKey }` );
                setProducts( res.data.data );
            } catch ( error )
            {
                console.error( "Error fetching products:", error );
            }
        };
    }


    let filteredProducts = products.filter( ( item ) =>
    {
        return ( ( item.price > minPriceValue && item.price < maxPriceValue ) );
    } );


    switch (SortBy) {
        case "MTL":
            filteredProducts = filteredProducts.sort( ( a, b ) => b.price - a.price );
            break;
        case "LTM":
            filteredProducts = filteredProducts.sort( ( a, b ) => a.price - b.price );
            break;
        case "HR":
            filteredProducts = filteredProducts.sort( ( a, b ) => b.rate - a.rate );
        default:
            break;
    }


    useEffect( () =>
    {
        getProducts();
    }, [] );

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col col-md-2 col-12 p-3 text-white bg-dark'>
                    <div>
                        <h5>Filter</h5>
                        <hr />
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item SearchProductsitem" style={ { border: "none" } }>
                                <h2 class="accordion-header">
                                    <button className="accordion-button SearchProductsButton text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Category
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body SearchProductsBody">
                                        <div className='text-start'>
                                            <a href="/Metromart/SearchForProducts/1" className='btn btn-dark w-100 text-white-50 text-start'>Electronics</a>
                                            <a href="/Metromart/SearchForProducts/2" className='btn btn-dark w-100 text-white-50 text-start'>Clothes</a>
                                            <a href="/Metromart/SearchForProducts/3" className='btn btn-dark w-100 text-white-50 text-start'>Furniture</a>
                                            <a href="/Metromart/SearchForProducts/4" className='btn btn-dark w-100 text-white-50 text-start'>Shoes</a>
                                            <a href="/Metromart/SearchForProducts/5" className='btn btn-dark w-100 text-white-50 text-start'>Miscellaneous</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item SearchProductsitem" style={ { border: "none" } }>
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed SearchProductsButton" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Price
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div>
                                            <form>
                                                <input type="number" min={ 1 } value={ minPriceValue } className='SearchProductsPriceInput' onChange={ handleMinPriceValue } />
                                                <span className='text-white ms-3 me-3'>To</span>
                                                <input type="number" className='SearchProductsPriceInput' value={ maxPriceValue } onChange={ handleMaxPriceValue } />
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>

                    <div>
                        <h5>Sort by</h5>
                        <hr />
                        <div className='form-check'>
                            <input type="radio" name='sortBy' className='form-check-input' value={ "MTL" } onChange={ handleSortBy }/>
                            <label>price : more to less</label>
                        </div>
                        <div className='form-check'>
                            <input type="radio" name='sortBy' className='form-check-input' value={ "LTM" } onChange={ handleSortBy } />
                            <label>price : less to more</label>
                        </div>
                        <div className='form-check'>
                            <input type="radio" name='sortBy' className='form-check-input' value={ "HR" } onChange={ handleSortBy } />
                            <label>high rating</label>
                        </div>
                    </div>


                </div>
                {/* filters for products */ }






                {/* products */ }
                <div className='col col-md-10 col-12' style={ { overflowX: "hidden" } }>
                    <div className='row p-5'>
                        {
                            filteredProducts && filteredProducts.map( ( item ) =>
                            {
                                return (
                                    <div className="col-8 col-sm-6 col-md-4 col-lg-3 .col-xl-2">
                                        <Card key={ item.id } item={ item } />
                                    </div>
                                );
                            } )
                        }
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SearchForProducts;













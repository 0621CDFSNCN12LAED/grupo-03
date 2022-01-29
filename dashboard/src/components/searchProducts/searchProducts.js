import React, { useEffect, useRef, useState } from 'react';

const apiSearchProductsUrl = "/api/products/search";

function SearchProducts() {

	const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState("");
	const searchInput = useRef();


	async function searchAPI () {
		const response = await fetch(apiSearchProductsUrl + `?name=${keyword}`);
		const result = await response.json();
        const data = result.data;
		setProducts(data);
	}
	
	function onSubmit(e) {
		e.preventDefault();
		setKeyword(searchInput.current.value);
	}

	useEffect( () => {
		if(keyword){
			searchAPI();
		}
	}, [keyword]);

	return(
		<div className="container-fluid">
            <div className="row my-4">
                <div className="col-12 col-md-6">
                    {/* Buscador */}
                    <form method="GET" onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="">Search Products:</label>
                            <input ref={searchInput} type="text" className="form-control" />
                        </div>
                        <button className="btn btn-info">Search</button>
                    </form>
                </div>
            </div>
            {(() => {
                if (products != undefined) {
                    return(
                        <div className="row">
                            {
                                products.length > 0 && products.map((product, i) => {
                                    return (
                                        <div className="col-sm-6 col-md-3 my-4" key={i}>
                                            <div className="card shadow mb-4">
                                                <div className="card-header py-3">
                                                    <h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
                                                </div>
                                                <div className="card-body">
                                                    <div className="text-center">
                                                        <img 
                                                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                                            src={product.image}
                                                            alt={product.name}
                                                            style={{ width: '90%', height: '400px', objectFit: 'cover' }}
                                                        />
                                                    </div>
                                                    <p>{product.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                } else {
                    return(
                        <div className="alert alert-warning text-center">No se encontraron productos</div>
                    )
                }
            })()}
		</div>
	)
}

export default SearchProducts;
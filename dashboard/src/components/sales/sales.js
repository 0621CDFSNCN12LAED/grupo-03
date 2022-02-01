import React, { Component } from "react";

const salesURL = "/api/sales";

class Sales extends Component {
    constructor(props) {
		super(props) 
		this.state = {
			sales: null,
		}
	}
	
	componentDidMount() {
		this.fetchSales();
	}
	
	async fetchSales() {
		const response = await fetch(salesURL);
		const result = await response.json();
		const data = await result.data;
		this.setState({sales: data});
	}
	
	render () {
		if(!this.state.sales){
			return <div className="row">Loading...</div>
		}
		return (
			<div>
				{this.state.sales.map((sale, i) => {
					if (sale.products == {}) {
						return (
							<div>
								<p>User: {sale.user.firstName} {sale.user.lastName}</p>
								<p>Bought Product: {sale.products.name}</p>
							</div>
						)
					}
					return (
						<div>
							<p>User: {sale.user.firstName} {sale.user.lastName}</p>
							<p>Bought Products: {
									sale.products.map(product => {
										return (
											<li>{product.name}</li>
										)
									})
							}</p>
						</div>
					)
				})}
			</div>
		)
	}
}

export default Sales;
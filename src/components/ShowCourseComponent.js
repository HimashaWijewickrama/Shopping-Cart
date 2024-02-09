import React from 'react';

function ShowCourseComponent({ courses,
	filterCourseFunction,
	addCourseToCartFunction }) {
	return (
		<div className='products'>
			<div className="product-list">
				{filterCourseFunction.length === 0 ? (
					<p className="no-results">
						Sorry, No matching Product found.
					</p>
				) : (
					filterCourseFunction.map((product) => (
						<div className="product" key={product.id}>
							<img src={product.image} alt={product.name} />
							<h2>{product.name}</h2>
							<p>Price: Rs.{product.price}</p>
							<button
							type="button" className="btn btn-secondary"
								id="add-to-cart-button"
								onClick={() => addCourseToCartFunction(product)}
							>
								Add to Shopping Cart
							</button>
						</div>
					))
				)}
			</div>
		</div>
	);
}

export default ShowCourseComponent;

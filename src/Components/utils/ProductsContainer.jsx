import Card from "./Card";
import { ProductsContext } from "../../Context/ProductsContext";
import { useContext } from "react";

function ProductsContainer() {
	const Products = useContext(ProductsContext);
	return (
		<div className="container">
			<div className="row justify-content-center  ">
				{Products &&
					Products.map((item) => {
						return (
							<div className="col-8 col-sm-6 col-md-4 col-lg-3 .col-xl-2">
								<Card key={item.id} item={item} />
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default ProductsContainer;

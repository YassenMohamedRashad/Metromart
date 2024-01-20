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
						return <Card key={item.id} item={item} />;
					})}
			</div>
		</div>
	);
}

export default ProductsContainer;

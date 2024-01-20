import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext([]);

export const ProductsContextProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const parseImagePath = (productArray) => {
		return productArray.map((product) => {
			// image_path is a string representing a JSON array
			// You can modify this part based on the actual structure of your data
			const parsedImagePath = JSON.parse(product.image_path || "[]");

			// Update the product with the modified image_path
			return {
				...product,
				images: parsedImagePath,
			};
		});
	};
	useEffect(() => {
		axios
			.get("http://localhost:5011/products/")
			.then((res) => {
				const modifiedProducts = parseImagePath(res.data.data);
				setProducts(modifiedProducts);
				// console.table(modifiedProducts);
			})
			.catch((error) => {
				throw new Error(error);
			});
	}, []);

	return (
		<ProductsContext.Provider value={products}>
			{children}
		</ProductsContext.Provider>
	);
};

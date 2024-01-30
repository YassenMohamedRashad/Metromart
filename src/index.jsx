import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
import { ProductsContextProvider } from "./Context/ProductsContext";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./assets/css/nav.css";
import "./assets/css/variables.css";
import "./assets/css/Loader.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthContextProvider>
				<ProductsContextProvider>
					<App />
				</ProductsContextProvider>
			</AuthContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);

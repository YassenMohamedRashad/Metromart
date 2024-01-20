import "../assets/css/Roadmap.css";
export const Roadmap = ({ category_id, name }) => {
	const categories = {
		1: "Electronics",
		2: "Clothes",
		3: "Furniture",
		4: "Shoes",
		5: "Miscellaneous",
	};
	return (
		<>
			<h6 className="tabs mb-1 mt-3 mx-5">
				<a className="tab">{categories[category_id]}</a> /
				<a className="tab">{name.split(" ").slice(0, 2).join(" ")}</a>
			</h6>
		</>
	);
};

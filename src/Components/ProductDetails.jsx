import { Button, Card } from "react-bootstrap";
import img1 from "../assets/images/gammaxx-l240-argb-1-500x500 1.png";
const ProductDetails = () => {
	return (
		<>
		adfksldfjlas
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={img1} />
				<Card.Body>
					<Card.Title>Havic HV-G92 Gamepad</Card.Title>
					<Card.Text>$192.00 $120.00</Card.Text>
					<Button variant="primary">Buy Now</Button>
				</Card.Body>
			</Card>
		</>
	);
};
export default ProductDetails;

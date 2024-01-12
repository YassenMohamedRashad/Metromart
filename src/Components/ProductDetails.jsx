import { Button, Card, Container, Row, Col } from "react-bootstrap";
const ProductDetails = () => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src="gamepad.jpg" />
			<Card.Body>
				<Card.Title>Havic HV-G92 Gamepad</Card.Title>
				<Card.Text>$192.00 $120.00</Card.Text>
				<Button variant="primary">Buy Now</Button>
			</Card.Body>
		</Card>
	);
};
export default ProductDetails;

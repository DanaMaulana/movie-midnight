import { Card, Container, Col, Row } from "react-bootstrap";

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(
  require.context("../assets/images/trending", false, /\.(png|jpe?g|svg)$/)
);

const Trending = () => {
  return (
    <Container id="trending" className="py-5">
      <h2 className="text-uppercase text-white">Trending Movies</h2>
      <Row>
        {images.map((image, index) => (
          <Col key={index} md={3}>
            <Card style={{ width: "18rem", height: "auto", margin: "1rem 0" }}>
              <Card.Img
                variant="top"
                src={image}
                alt={`image ${index + 1}`}
                style={{ height: "400px" }}
              />
              <Card.Body>
                <Card.Title>Card Title {index + 1}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Trending;

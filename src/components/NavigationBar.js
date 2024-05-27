import { Navbar, Container, Nav } from "react-bootstrap";
function handleClick() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand
            href=""
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          >
            MOVIE
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#trending">Trending</Nav.Link>
            <Nav.Link href="#recently">Recently</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;

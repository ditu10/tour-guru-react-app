import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export const TopNavbar = () => {
  return (
    <>
      <div className="container-md py-md-3">
        <Navbar expand="md" className="bg-body-tertiary">
          <Container fluid>
            <NavLink to={"/"}>
              <Navbar.Brand>
                <img width="100px" src="/tripgurulogo.png" alt="logo.png" />
              </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-md-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                {/* <Button variant="outline-success">Search</Button> */}
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

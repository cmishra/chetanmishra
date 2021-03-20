import ReactNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navbar = () => {
  return (
    <ReactNavbar bg="light" expand="lg">
      <ReactNavbar.Brand className="mr-auto">
        <h2>Suno </h2>
      </ReactNavbar.Brand>
      <Nav>
        <Nav.Link href="/sign-up">
          <Nav.Item>Sign Up</Nav.Item>
        </Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav>
    </ReactNavbar>
  );
};

export default Navbar;

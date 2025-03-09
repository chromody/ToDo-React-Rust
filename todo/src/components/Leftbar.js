import { useState } from "react";
import { Navbar, Nav, Offcanvas, Button, Container } from "react-bootstrap";
import { RiTodoLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

const Leftbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="position-fixed top-0 start-0 m-3"
      >
        <FiMenu size={24} />
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="d-flex align-items-center">
            <RiTodoLine size={30} className="me-2" />
            <h2 className="m-0">Todo</h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/" onClick={handleClose}>Home</Nav.Link>
            <Nav.Link href="/tasks" onClick={handleClose}>Tasks</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Leftbar;

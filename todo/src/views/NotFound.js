import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center d-flex flex-column align-items-center justify-content-center vh-100">
      <FaExclamationTriangle size={80} className="text-danger mb-3" />
      <h1 className="text-danger">404</h1>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="text-muted">Oops! The page you're looking for doesn't exist.</p>
      <Button variant="primary" onClick={() => navigate("/")}>Go Home</Button>
    </Container>
  );
};

export default NotFound;

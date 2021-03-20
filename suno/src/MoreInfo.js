import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

const MoreInfo = () => {
  return (
    <Container background-color="red" fluid>
      <Row>
        <h3>
          Start your language journey by <u>listening.</u>
        </h3>
      </Row>
      <Row>
        <Col>
          <img
            src={require("../assets/learn-more-learn-the-alphabet.jpg")}
            width="100%"
          ></img>
        </Col>
        <Col align="center" className="my-auto">
          <h4>Learn the alphabet!</h4>
        </Col>
      </Row>
      <Row>
        <Col align="center" className="my-auto">
          <h4>Train your ears!</h4>
        </Col>
        <Col>
          <img
            src={require("../assets/learn-more-train-your-ears.jpg")}
            width="100%"
          ></img>
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            src={require("../assets/learn-more-immerse-yourself.png")}
            width="100%"
          ></img>
        </Col>
        <Col align="center" className="my-auto">
          <h4>Immerse yourself!</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default MoreInfo;

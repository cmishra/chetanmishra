import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/MoreInfo";

const MoreInfo = () => {
  return (
    <div className="more-info">
      <h3 className="learn-more-header">
        Start your language journey by <u>listening.</u>
      </h3>
      <div className="learn-more" id="learn-more">
        <div className="learn-more-unit">
          <img
            src={require("../assets/learn-more-learn-the-alphabet.svg")}
          ></img>
          <p>Learn the alphabet!</p>
        </div>
        <div className="learn-more-unit">
          <img src={require("../assets/learn-more-train-your-ears.svg")}></img>
          <p>Train your ears!</p>
        </div>
        <div className="learn-more-unit">
          <img src={require("../assets/learn-more-immerse-yourself.svg")}></img>
          <p>Immerse yourself!</p>
        </div>
      </div>
      <Button
        variant="outline-primary"
        className="begin-journey-button"
        href="/sign-up"
      >
        Begin your journey
      </Button>
    </div>
  );
};

export default MoreInfo;

import "./css/ActivitiesPage.css";

const ActivitiesPage = () => {
  return (
    <div className="learn-more">
      <div className="learn-more-unit">
        <img src={require("../assets/learn-more-learn-the-alphabet.svg")}></img>
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
  );
};

export default ActivitiesPage;

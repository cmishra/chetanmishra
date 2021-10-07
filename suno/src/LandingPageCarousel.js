import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

const LandingCarouselCaption = (props) => {
  return (
    <Carousel.Caption>
      <Button
        variant="light"
        size="lg"
        color="red"
        disabled
        className="text-black bg-white"
      >
        {props.text}
      </Button>
    </Carousel.Caption>
  );
};

const LandingPageCarousel = () => {
  return (
    <Carousel fade controls={false} pause={false}>
      <Carousel.Item>
        <img
          width="100%"
          src={require("../assets/landing-page-carousel-img-en.jpg")}
        />
        <a href="#learn-more">
          {" "}
          <LandingCarouselCaption text="Come, listen!"></LandingCarouselCaption>{" "}
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="100%"
          src={require("../assets/landing-page-carousel-img-fr.jpg")}
        />
        <a href="#learn-more">
          {" "}
          <LandingCarouselCaption text="Viens, entends!"></LandingCarouselCaption>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <img
          width="100%"
          src={require("../assets/landing-page-carousel-img-hi.jpg")}
        />
        <a href="#learn-more">
          {" "}
          <LandingCarouselCaption text="Aao, suno!"></LandingCarouselCaption>
        </a>
      </Carousel.Item>
    </Carousel>
  );
};

export default LandingPageCarousel;

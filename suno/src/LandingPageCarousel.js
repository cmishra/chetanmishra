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
    <Carousel fade controls={false} hover={false}>
      <Carousel.Item>
        <img
          width="100%"
          src={require("../assets/landing-page-carousel-img-en.jpg")}
        />
        <LandingCarouselCaption text="Come, listen!"></LandingCarouselCaption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="100%"
          src={require("../assets/landing-page-carousel-img-fr.jpg")}
        />
        <LandingCarouselCaption text="Viens, entends!"></LandingCarouselCaption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          width="100%"
          src={require("../assets/landing-page-carousel-img-hi.jpg")}
        />
        <LandingCarouselCaption text="Aao, suno!"></LandingCarouselCaption>
      </Carousel.Item>
    </Carousel>
  );
};

export default LandingPageCarousel;

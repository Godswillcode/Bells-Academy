import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../Components/Button/Button";
import slider1 from "../Images/slider-1.jpg";
import slider2 from "../Images/slider-2.jpg";
import slider3 from "../Images/slider-3.jpg";
import Intro from "../Components/Home/Intro";


function SampleNextArrow(props) {
  const { style } = props;
  return <div style={{ ...style, display: "none" }} />;
}

function SamplePrevArrow(props) {
  const { style } = props;
  return <div style={{ ...style, display: "none" }} />;
}

const Home = () => {
  const settings = {
    className: "",
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="text-white">
        <Slider {...settings}>
          <div>
            <div
              className="px-4 md:pl-12 grid grid-cols-1 md:grid-cols-2 h-carousel"
              style={{ backgroundImage: `url(${slider1})` }}
            >
              <div>
                <h1 className="text-2xl sm:text-2xl md:text-4xl font-medium pb-2">
                  Start your journey with our practical courses
                </h1>
                <h3 className="pb-5 text-md md:text-lg">
                  Our online courses are built in partnership with technology
                  leaders and are designed to meet industry demands.
                </h3>
                <Button type="primary" as="link" to="/">
                  Discover more
                </Button>
              </div>
            </div>
          </div>

          <div>
            <div
              className="px-4 md:pl-12 grid grid-cols-1 md:grid-cols-2 h-carousel"
              style={{ backgroundImage: `url(${slider2})` }}
            >
              <div>
                <h1 className="text-2xl sm:text-2xl md:text-4xl font-medium pb-2">
                  Start your journey with our practical courses
                </h1>
                <h3 className="pb-5 text-md md:text-lg">
                  Our online courses are built in partnership with technology
                  leaders and are designed to meet industry demands.
                </h3>
                <Button type="primary" as="link" to="/">
                  Lets Chat
                </Button>
              </div>
            </div>
          </div>

          <div>
            <div
              className="px-4 md:pl-12 grid grid-cols-1 md:grid-cols-2 h-carousel"
              style={{ backgroundImage: `url(${slider3})` }}
            >
              <div>
                <h1 className="text-2xl sm:text-2xl md:text-4xl font-medium pb-2">
                  Efficient Learning Methods
                </h1>
                <h3 className="pb-5 text-md md:text-lg">
                  {" "}
                  Our online courses are built in partnership with technology
                  leaders and are designed to meet industry demands.
                </h3>
                <Button type="primary" as="link" to="/">
                  Discover more
                </Button>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      {/* COMPONENT */}
     
      <Intro />
     
    </>
  );
};

export default Home;

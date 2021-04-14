import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../Images/testi_01.png'
import image2 from '../Images/testi_02.png'
import image3 from '../Images/testi_03.png'

function SampleNextArrow(props) {
  const { style } = props;
  return <div style={{ ...style, display: "none" }} />;
}

function SamplePrevArrow(props) {
  const { style } = props;
  return <div style={{ ...style, display: "none" }} />;
}

const Testimonial = () => {
    var settings = {
        infinite: true,
        dots: true,
        speed: 3000,
        autoplaySpeed: 2000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint:700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className="container w-full mx-auto px-6 mt-8 mb-16">
                  <h2 className="text-center pb-10 pt-2 font-medium text-3xl">Our Testimonials</h2>
             <Slider {...settings}>
          <div>
           <div className="testimonial">
                <div className="flex justify-center">
                <svg className="w-8 h-8 mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path></svg>
                </div>  
                <p className="text-base pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptas necessitatibus, quidem dolorem magni pariatur autem sequi odio dolorem magni pariatur aute pariatur aute pariatur aute</p>  
                   <div className="flex justify-center my-3">
                   <img src={image1} alt="testimonial"/>
                   </div>
                   <h3>James Obi</h3>
           </div>
          </div>

          <div>
          <div className="testimonial">
                <div className="flex justify-center">
                <svg className="w-8 h-8 mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path></svg>
                </div>  
                <p className="text-base pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptas necessitatibus, quidem dolorem magni pariatur autem sequi odio dolorem magni pariatur aute pariatur aute pariatur aute</p>  
                   <div className="flex justify-center my-3">
                   <img src={image2} alt="testimonial"/>
                   </div>
                   <h3>Walter Anger</h3>
           </div>
          </div>
          <div>
          <div className="testimonial">
                <div className="flex justify-center">
                <svg className="w-8 h-8 mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path></svg>
                </div>  
                <p className="text-base pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptas necessitatibus, quidem dolorem magni pariatur autem sequi odio dolorem magni pariatur aute pariatur aute pariatur aute</p>  
                   <div className="flex justify-center my-3">
                   <img src={image3} alt="testimonial"/>
                   </div>
                   <h3>Florence Peter</h3>
           </div>
          </div>
          <div>
          <div className="testimonial">
                <div className="flex justify-center">
                <svg className="w-8 h-8 mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path></svg>
                </div>  
                <p className="text-base pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptas necessitatibus, quidem dolorem magni pariatur autem sequi odio dolorem magni pariatur aute pariatur aute pariatur aute</p>  
                   <div className="flex justify-center my-3">
                   <img src={image1} alt="testimonial"/>
                   </div>
                   <h3>Emmanuel jonson</h3>
           </div>
          </div>
          <div>
          <div className="testimonial">
                <div className="flex justify-center">
                <svg className="w-8 h-8 mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path></svg>
                </div>  
                <p className="text-base pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptas necessitatibus, quidem dolorem magni pariatur autem sequi odio dolorem magni pariatur aute pariatur aute pariatur aute</p>  
                   <div className="flex justify-center my-3">
                   <img src={image2} alt="testimonial"/>
                   </div>
                   <h3>Emeka Eze</h3>
           </div>
          </div>
         
        </Slider>
        </div>
    )
}

export default Testimonial

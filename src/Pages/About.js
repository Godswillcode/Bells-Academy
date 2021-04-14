import { Link } from "react-router-dom";
import WhyUs from "../Components/About/WhyUs";
import PlanVisit from "../Components/PlanVisit";
import Testimonial from "../Components/Testimonial";
import aboutImg from "../Images/about.jpg";

const About = () => {
  return (
    <div>
      {/* Banner */}
      <div className="banner text-white flex justify-center text-center items-center px-5">
        <div>
          <h3 className="text-2xl md:text-4xl font-medium pb-1">About us</h3>
          <h4 className="font-medium">
            <Link to="/" className="text-secondary">
              Home
            </Link>{" "}
            / About
          </h4>
        </div>
      </div>

      {/* About intro */}
      <div className="container mx-auto px-7 mt-10 mb-14">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-medium pb-1">
              About Bell's
            </h2>
            <div className="bg-secondary w-24 h-1 mb-5"></div>
            <div className="text-justify">
              <p>
                Bell's Academy is an ingenious school that
                provides your child with world-class educational experience. As
                one of the top international schools in Lekki Lagos, we combine
                the best educational practice with the most current innovative
                approach to learning, to equip your child for an exceptional
                future in a swiftly dynamic world. We have advanced an approach
                to education that balances academic expertise, self and social
                intelligence, creativity, critical thinking and digital
                literacy.
              </p>
              <p className="pt-4">
                Your child’s unique needs are met through an integrated
                curriculum, engaging and experiential tutoring, improved and
                continuous assessment, robust teacher support, and effective
                partnership with parents and communities. A well-rounded
                education rooted in academics, enriching extra-curricula
                activities, team-building exercises and firm emphasis on
                character development is provided for your child. Combining all
                these, your child is fortified with life time success.
              </p>
            </div>
          </div>
          <div>
            <img
              src={aboutImg}
              alt="about-bell's"
              className="rounded-md h-full w-full"
            />
          </div>
        </div>
      </div>

      {/* Why choose us component*/}
      <WhyUs />
      <Testimonial />
      <PlanVisit />
    </div>
  );
};

export default About;

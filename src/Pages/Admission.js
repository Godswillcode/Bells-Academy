import { Link } from "react-router-dom";
import Button from "../Components/Button/Button";
import PlanVisit from "../Components/PlanVisit";
import Testimonial from "../Components/Testimonial";
import AdmImage from "../Images/admission.jpg";
import { motion } from 'framer-motion';
import { animationTwo, transition } from '../Animation/index';

const Admission = () => {
  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationTwo} transition={transition}>
      {/* Banner */}
      <div className="banner text-white flex justify-center text-center items-center px-5">
        <div>
          <h3 className="text-2xl md:text-4xl font-medium pb-1">Admission</h3>
          <h4 className="font-medium">
            <Link to="/" className="text-secondary">
              Home
            </Link>{" "}
            / Admission
          </h4>
        </div>
      </div>

      {/* Admission */}
      <div className="container mx-auto px-7 my-16">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-medium pb-1">
              Applying to Bell's
            </h2>
            <div className="bg-secondary w-24 h-1 mb-5"></div>
            <div className="text-justify">
              <p>
                Enrolling your child into the Glowfield community is more than
                simply joining a school. At Glowfield, your child is a star. The
                mutual mission and vision of cultivating the capacity and
                character of pupils, enables your child attain the best in life.
              </p>

              <p className="pt-4 pb-4">
                We are excited to help you get to know our unique school. Our
                admissions team are available to talk to you, answer your
                questions, and support you through this process. We are always
                just a phone call or email away because we understand that
                admission process can sometimes be overwhelming.
              </p>
              <p className="pb-5">
                When you are looking for a reputed nursery and primary school in
                Lekki Lagos, then you are welcome to explore our facilities and
                standard. Tour around the school is provided so you can acquaint
                yourself with the teaching and learning process that your child
                will be exposed to and have a real experience of the strength of
                our community.
              </p>
              <Button type="primary" as="link" to="/apply">
                Apply Now
              </Button>
            </div>
          </div>
          <div className="w-full">
            <img
              src={AdmImage}
              alt="about-bell's"
              className="rounded-md h-full w-full"
            />
          </div>
        </div>
      </div>

      {/* Components */}
      <Testimonial />
      <PlanVisit />
    </motion.div>
  );
};

export default Admission;

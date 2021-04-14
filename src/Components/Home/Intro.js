import React from "react";
import Button from "../Button/Button";
import Testimonial from "../Testimonial";

const Intro = () => {
  return (
    <>
      <div className="bg-gray-300 pt-20 pb-20">
        <div className="container mx-auto px-6 md:px-10">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-medium text-center">
            WELCOME TO BELL'S ACADEMY
          </h1>
          <div className="text-justify md:text-center lg:text-center mt-4">
            <p className="pb-2">
              The National Association of Proprietors of Private Schools
              is the apex association of private school owners in Nigeria.
              was founded in 2005 with the aim of promoting the welfare and
              interaction of proprietors of private schools and the advancement
              of quality educational services in Nigeria.
            </p>
            <p>
              This coupled with our vision which compels us to educate and
              nurture the Nigerian child for functional as well as quality
              living wherever he finds himself spurs us to stay at our best in
              ensuring the delivery quality of educational services at all our
              schools.
            </p>
          </div>

          {/* boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 text-center mt-16">
            <div className="bg-white pt-3 pb-10 px-4">
              <div className="flex justify-center mb-4">
                <div className="bg-primary rounded-full p-3 text-white">
                  <svg
                    className="w-9 h-9"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    ></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-primary pb-3 text-lg font-medium">
                OUR MISSION
              </h3>
              <p>
                We strive to be the incubator of knowledge and orientation
                required to provide and create the change needed for national
                development and transformation
              </p>
            </div>

            <div className="bg-white pt-3 pb-10 px-4">
              <div className="flex justify-center mb-4">
                <div className="bg-primary rounded-full p-3 text-white">
                  <svg
                    className="w-9 h-9"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-primary pb-3 text-lg font-medium">
                OUR VISION
              </h3>
              <p>
                We strive to be the incubator of knowledge and orientation
                required to provide and create the change needed for national
                development and transformation
              </p>
            </div>

            <div className="bg-white pt-3 pb-2 px-4">
              <div className="flex justify-center mb-4">
                <div className="bg-primary rounded-full p-3 text-white">
                  <svg
                    className="w-9 h-9"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    ></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-primary pb-3 text-lg font-medium">
                OUR CORE VALUES
              </h3>
              <div className="flex justify-center">
                <ul className="list-disc text-left">
                  <li>Professionalism</li>
                  <li>Equity</li>
                  <li>Religious tolerance</li>
                  <li>Discipline</li>
                  <li>Integrity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial component */}
      <Testimonial/>

      {/* Apply section*/}
      <div className="bg-primary py-14">
        <div className="container mx-auto px-5 md:px-40 text-center text-gray-200">
          <h2 className="pb-4 text-lg sm:text-2xl md:text-3xl font-medium">
            Applying to Bell's Academy
          </h2>
          <p className="pb-5 text-md">
            Enrolling your child into the Bell's community is more than
            simply joining a school. At Bell's, your child is a star. The
            mutual mission and vision of cultivating the capacity and character
            of pupils, enables your child attain the best in life.
          </p>

          <Button type="primary" as="link" to="/apply">
            Apply Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default Intro;

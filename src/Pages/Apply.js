import { Link } from "react-router-dom";
import PlanVisit from "../Components/PlanVisit";
import { motion } from 'framer-motion';
import { animationOne, transition } from '../Animation/index';

const Apply = () => {
  return (
    <motion.div
    initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>
      {/* Banner */}
      <div className="banner text-white flex justify-center text-center items-center px-5">
        <div>
          <h3 className="text-2xl md:text-4xl font-medium pb-1">
            Application Form
          </h3>
          <h4 className="font-medium">
            <Link to="/" className="text-secondary">
              Home
            </Link>{" "}
            / Application
          </h4>
        </div>
      </div>

      {/* Main Application */}
      <div className="container px-5 flex justify-center mb-20">
        <div className="lg:w-3/4 bg-gray-400 px-3 pt-4 pb-16">
          <h2 className="font-medium text-2xl py-3">
            PARENT/GUARDIAN INFORMATION
          </h2>

          <form>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-2">
                <input
                  type="text"
                  name="parentFirstName"
                  id="parentFirstName"
                  placeholder="First name"
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                />

                <input
                  type="text"
                  name="parentLastName"
                  id="parentLastName"
                  placeholder="Last name"
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                />

                <input
                  type="tel"
                  name="parentPhone"
                  id="parentPhone"
                  placeholder="Phone"
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                />

                <input
                  type="email"
                  name="parentEmail"
                  id="parentEmail"
                  placeholder="Enter Email"
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                />

                <select
                  name="relationship"
                  id="relationship"
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                >
                  <option>Relationship to Child</option>
                  <option value="father">Father</option>
                  <option value="mother">Mother</option>
                  <option value="guardian">Guardian</option>
                </select>
              </div>
              <input
                type="text"
                name="parentAddress"
                id="parentAddress"
                placeholder="Enter Full Address, house, street, city and State."
                className="py-2 px-3 rounded-sm w-full focus:outline-none mt-4"
              />

              {/* child information */}
              <h2 className="font-medium text-2xl mt-10">
                CHILD'S INFORMATION
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-3">
                <input
                  type="text"
                  name="childFirstName"
                  id="childFirstName"
                  placeholder="First name"
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                />

                <input
                  type="text"
                  name="childMiddleName"
                  id="childMiddleName"
                  placeholder="Middle name"
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                />

                <input
                  type="text"
                  name="childLastName"
                  id="childLastName"
                  placeholder="Last name"
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                />

                <input
                  type="text"
                  name="preferredName"
                  id="preferredName"
                  placeholder="Preferred name (if any)"
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                />

                <input
                  type="text"
                  name="childDOB"
                  placeholder="Date of Birth"
                  onFocus={(e) => {
                    e.currentTarget.type = "date";
                    e.currentTarget.focus();
                  }}
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                />

                <input
                  type="text"
                  name="parentPhone"
                  id="parentPhone"
                  placeholder="School year applying for"
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                />

                <select
                  name="classApply"
                  id="classApply"
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                >
                  <option>Class applying for </option>
                  <option value="Creche">Creche</option>
                  <option value="Pre-school">Pre-school</option>
                  <option value="Elementary">Elementary</option>
                  <option value="After-school">After-school</option>
                </select>
                <div>
                  <label className="block font-medium">Gender:</label>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    className="mr-1"
                  />
                  <label htmlFor="male">Male</label>

                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    className="ml-3 mr-1"
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <div>
                  <label className="block font-medium">
                    Sibling attends or will attend Bell's?
                  </label>
                  <input
                    type="radio"
                    id="no"
                    name="gender"
                    value="no"
                    className="mr-1"
                  />
                  <label htmlFor="no">No</label>

                  <input
                    type="radio"
                    id="yes"
                    name="gender"
                    value="yes"
                    className="ml-3 mr-1"
                  />
                  <label htmlFor="yes">Yes</label>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <button
                  type="submit"
                  className="bg-primary text-white py-2 rounded-md font-medium text-xl w-full md:w-3/4 lg:w-2/4 focus:outline-none hover:opacity-70"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <PlanVisit />
    </motion.div>
  );
};

export default Apply;

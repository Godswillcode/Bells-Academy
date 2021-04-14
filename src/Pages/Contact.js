import { useState } from "react";
import { Link } from "react-router-dom";
import { send } from "emailjs-com";
import validate from "../Components/validate";
import { motion } from 'framer-motion';
import { animationTwo, transition } from '../Animation/index';

const initialState = {
  contactName: "",
  contactPhone: "",
  contactEmail: "",
  contactSubject: "",
  contactMessage: "",
};

const Contact = () => {
  const [person, setPerson] = useState(initialState);
  const [errorMsg, setErrorMsg] = useState(initialState);

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // check error onSubmit
    const formErrors = validate(person);
    setErrorMsg(formErrors);
    if (Object.keys(formErrors).length) {
      return;
    } else {
      send("gmail", "template_ru8l7ls", person, process.env.REACT_APP_API_KEY)
        .then((response) => {
          alert("Message sent!", response.status, response.text);
        })
        .catch((err) => {
          alert("Message failed try again!", err);
        });

      setPerson(initialState);
    }
  };

  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationTwo} transition={transition}>
      {/* Banner */}
      <div className="banner text-white flex justify-center text-center items-center px-5">
        <div>
          <h3 className="text-2xl md:text-4xl font-medium pb-1">Contact us</h3>
          <h4 className="font-medium">
            <Link to="/" className="text-secondary">
              Home
            </Link>{" "}
            / Contact
          </h4>
        </div>
      </div>

      {/* Main contact */}
      <div className="bg-gray-400">
        <div className="container mx-auto w-full pb-20 pt-10 px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-4">
            {/* contact form */}
            <div>
              <form onSubmit={onSubmit}>
                <h2 className="text-center text-2xl pb-5">SEND US A MESSAGE</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="contactName"
                      id="contactName"
                      placeholder="Full name"
                      className="py-2 px-3 rounded-sm w-full focus:outline-none"
                      value={person.contactName}
                      onChange={handleChange}
                    />
                    <span className="block text-red-600">
                      {errorMsg.contactName}
                    </span>
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="contactPhone"
                      id="contactPhone"
                      placeholder="Phone"
                      className="py-2 px-3 rounded-sm w-full focus:outline-none"
                      value={person.contactPhone}
                      onChange={handleChange}
                    />
                    <span className="block text-red-600">
                      {errorMsg.contactPhone}
                    </span>
                  </div>
                  <div>
                    <input
                      type="email"
                      name="contactEmail"
                      id="contactEmail"
                      placeholder="Enter Email"
                      className="py-2 px-3 rounded-sm w-full focus:outline-none"
                      value={person.contactEmail}
                      onChange={handleChange}
                    />
                    <span className="block text-red-600">
                      {errorMsg.contactEmail}
                    </span>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="contactSubject"
                      id="contactSubject"
                      placeholder="Subject"
                      className="py-2 px-3 rounded-sm w-full focus:outline-none"
                      value={person.contactSubject}
                      onChange={handleChange}
                    />
                    <span className="block text-red-600">
                      {errorMsg.contactSubject}
                    </span>
                  </div>
                </div>
                <textarea
                  name="contactMessage"
                  id="contactMessage"
                  className="w-full mt-4 pl-2 pt-2 h-28 resize-none focus:outline-none rounded-sm"
                  placeholder="Message"
                  value={person.contactMessage}
                  onChange={handleChange}
                ></textarea>
                <span className="block text-red-600">
                  {errorMsg.contactMessage}
                </span>
                <div className="flex justify-center mt-2">
                  <button
                    type="submit"
                    className="bg-primary text-white py-2 rounded-md font-medium text-xl w-full focus:outline-none hover:opacity-70"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* contact detail */}
            <div>
              <h2 className="text-center text-2xl pb-5">REACH US</h2>
              <div className="text-center text-white font-medium text-base lg:text-lg border-2 border-secondary rounded-md py-2">
                <div>
                  <div className="flex justify-center pt-1">
                    <span className="flex justify-center bg-primary rounded-full p-2">
                      {" "}
                      <svg
                        className="w-h-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <span>
                    No.3 corner bus-stop, Epe-Epress <br />
                    way sangotedo Ajah Lekki Lagos State
                  </span>
                </div>
                <div className="mt-4">
                  <div className="flex justify-center">
                    <span className="flex justify-center bg-primary rounded-full p-2">
                      <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <span className="flex flex-wrap justify-center gap-4 pt-1">
                    {" "}
                    <a
                      href="tel:+234 90 389 683 45"
                      className="hover:text-secondary"
                    >
                      +234 90 389 683 45
                    </a>{" "}
                    <a
                      href="tel:+234 90 389 683 45"
                      className="hover:text-secondary"
                    >
                      +234 90 389 683 45
                    </a>
                  </span>
                </div>

                <div className="mt-3">
                  <div className="flex justify-center">
                    <span className="flex justify-center bg-primary rounded-full p-2">
                      <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <a
                    href="mailto:info@bellsacademy"
                    className="hover:text-secondary"
                  >
                    info@bellsacademy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Google map */}
      <iframe
        width="100%"
        height="300"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Sangotedo%20Central%20Mosque,%20Aja,%20Sangotedo&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        title="google map"
      ></iframe>
    </motion.div>
  );
};

export default Contact;

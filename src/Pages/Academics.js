import { Link } from "react-router-dom";
import { academicData } from "../Components/AcademicData";
import PlanVisit from "../Components/PlanVisit";

const Academics = () => {
  return (
    <div>
      {/* Banner */}
      <div className="banner text-white flex justify-center text-center items-center px-5">
        <div>
          <h3 className="text-2xl md:text-4xl font-medium pb-1">Academics</h3>
          <h4 className="font-medium">
            <Link to="/" className="text-secondary">
              Home
            </Link>{" "}
            / Academics
          </h4>
        </div>
      </div>

      {/* Main Academics */}
      <div className="container mx-auto w-full px-7 mt-12 mb-14">
        {academicData.map((academic) => {
          const { id, title, image, info1, info2 } = academic;
          return (
            <div key={id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8 md:border md:border-primary md:hover:shadow-lg">
                <img
                  src={image}
                  alt={title}
                  className="rounded-sm h-full w-full"
                />
                <div className="text-justify pt-2 md:pt-5 md:pr-2 pb-2">
                  <h3 className="text-3xl pb-3 font-medium">{title}</h3>
                  <p className="pb-4">{info1}</p>
                  <p>{info2}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <PlanVisit />
    </div>
  );
};

export default Academics;

import "./ServiceIdeas.css";
const ServiceIdeas = () => {
  return (
    <div>
      <div className="bg-[#DCFFFE] ">
        <div className="max-w-screen-xl mx-auto">
          <div className="">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="https://i.ibb.co/tM3JqZq/software-engineer.png"
                className=""
              />
              <div>
                <h1 className="innerTitle-Text ">
                  {" "}
                  <span className="text-black">
                    Create <span className="text-[#EF4D48]">Ideas</span>
                  </span>
                </h1>
                <p className="py-6 ServiceIdeasText">
                  Our clients recive a full roster comprised of a development
                  team; UI/UX designers; as well as product, and qa managers.
                  following the design sprint principles, we create an idea and
                  visualize it
                </p>
                <p className="ServiceIdeasBtn">Learn More</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://i.ibb.co/zZRVtCT/startup-launch.png"
                className=""
              />
              <div>
                <h1 className="innerTitle-Text ">
                  {" "}
                  <span className="text-black">
                    Building <span className="text-[#EF4D48]">Product</span>
                  </span>
                </h1>
                <p className="py-6 ServiceIdeasText">
                  Our clients recive a full roster comprised of a development
                  team; UI/UX designers; as well as product, and qa managers.
                  following the design sprint principles, we create an idea and
                  visualize it
                </p>
                <p className="ServiceIdeasBtn">Learn More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceIdeas;

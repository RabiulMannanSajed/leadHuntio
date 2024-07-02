import "./ServiceIdeas.css";
const ServiceIdeas = () => {
  return (
    <div>
      <div className="bg-[#DCFFFE]  pb-[10%]">
        <div className="ml-[10%] mr-[10%] mx-auto">
          <div className=" flex items-center justify-between">
            <div className="pr-[100px]">
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
            <img
              src="https://i.ibb.co/tM3JqZq/software-engineer.png"
              className=""
            />
          </div>
          <div className="">
            <div className="flex items-center justify-between">
              <img
                src="https://i.ibb.co/zZRVtCT/startup-launch.png"
                className="pr-[100px]"
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

import "./ServicesCollaboration.css";
const ServicesCollaboration = () => {
  return (
    <div className="bg-[#105757]">
      <div className="ServicesCollaborationPosition">
        <div className="text-center">
          <h1 className="ServicesCollaborationTitle"> How we Work </h1>
          <h1 className="innerTitle-Text ">
            <span className="text-black">
              {" "}
              Small teams and <span className="text-[#EF4D48]">honest </span>
              Collaboration
            </span>
          </h1>
        </div>
        <div className="max-w-3xl mx-auto">
          <img
            src="https://i.ibb.co/nCw2c6H/pexels-fauxels-3184339-1.png"
            alt=""
          />
          <div className="flex text-white ServicesCollaborationDetails">
            <p className="w-[1000px] mr-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              ullamcorper urna eget semper ultricies. Integer vitae ligula nec
              massa efficitur sollicitudin. Cras non quam id odio dignissim
              malesuada. Donec auctor urna auctor ipsum condimentum, ut finibus
              mi malesuada. Integer mattis odio sed dolor fermentum hendrerit.
              Curabitur condimentum, ex id commodo fermentum.
            </p>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ullamcorper urna eget semper ultricies. Integer vitae ligula nec
                massa efficitur sollicitudin.{" "}
              </p>
              <button className="servicesCollaborationBtn servicesCollaborationBtnText">
                work With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesCollaboration;

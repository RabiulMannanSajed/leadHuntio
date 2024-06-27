import ServiceIdeas from "../ServiceIdeas/ServiceIdeas";
import ServicesBanner from "../ServicesBanner/ServicesBanner";
import ServicesCollaboration from "../ServicesCollaboration/ServicesCollaboration";
import ServicesInfo from "../ServicesInfo/ServicesInfo";

const ServicesHome = () => {
  return (
    <div>
      <ServicesBanner></ServicesBanner>
      <ServicesInfo></ServicesInfo>
      <ServicesCollaboration></ServicesCollaboration>
      <ServiceIdeas></ServiceIdeas>
    </div>
  );
};

export default ServicesHome;

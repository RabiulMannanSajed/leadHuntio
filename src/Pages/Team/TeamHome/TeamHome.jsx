import TeamBanner from "../TeamBanner/TeamBanner";
import Meeting from "../Meeting/Meeting";
import Exports from "../Exports/Exports";

const TeamHome = () => {
  return (
    <div>
      <TeamBanner></TeamBanner>
      <Meeting></Meeting>
      <Exports></Exports>
    </div>
  );
};

export default TeamHome;

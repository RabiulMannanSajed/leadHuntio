import React, { useEffect, useState } from "react";
import Meet from "../Meet/Meet";

const Meeting = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data));
  }, []);
  return (
    <div className="bg-[#DCFFFE]">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="title-Text text-center">
          <span className="text-black">Meet the</span>{" "}
          <span className="text-[#EF4D48]"> Team</span>
        </h1>
        <p className="text-details text-center">
          <span className="text-[#6A6A6A]">
            Linked Hacker is the world's #1 B2B lead generation and B2B email{" "}
            <br />
            service. No one beats our stats.
          </span>
        </p>
        <div className="grid grid-cols-4 gap-5">
          {teamMembers.map((teamMember) => (
            <Meet key={teamMember.id} teamMember={teamMember}></Meet>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meeting;

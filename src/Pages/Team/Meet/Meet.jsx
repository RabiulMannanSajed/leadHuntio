import "./Meet.css";

const Meet = ({ teamMember }) => {
  const { name, img, designation } = teamMember;
  return (
    <div className="theCard">
      <div className="thefront">
        <img src={img} className="meetImg" alt="" />
        <p>{name}</p>
        <p>{designation}</p>
      </div>
      <div className="theBack">
        <p>{name}</p>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default Meet;

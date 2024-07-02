import "./Meet.css";

const Meet = ({ teamMember }) => {
  const { name, img, designation } = teamMember;

  return (
    <div className="theCard">
      <div className="theInner">
        <div className="theFront">
          <img src={img} className="meetImg" alt={name} />
          <p>{name}</p>
          <p>{designation}</p>
        </div>
        <div className="theBack">
          <p>{name}</p>
          <p>{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default Meet;

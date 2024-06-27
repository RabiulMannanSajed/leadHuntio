import "./B2B.css";
const B2B = () => {
  const b2bData = [
    {
      id: 1,
      img: "",
      date: "June 2, 2023",
      title: "Do Cold Emails Actually Work? Yes!",
    },
    {
      id: 2,
      img: "",
      date: "June 2, 2022",
      title: "How COVID-19 Changed the Art of Outbound Prospecting",
    },
    {
      id: 3,
      img: "",
      date: "June 2, 2024",
      title: "Tips on How to Write a Cold Email",
    },
  ];
  return (
    <div className="b2bBg">
      <div className="max-w-screen-xl mx-auto pt-[87px] pb-[238px]">
        <h1 className=" title-Text mb-[102px]">
          Learn more about
          <span className="text-[#EF4D48]">
            {" "}
            B2B Lead <br />
            Generation
          </span>{" "}
          & LinkedIn Ads
        </h1>
        <div className="grid grid-cols-3">
          {b2bData.map((data) => (
            <div key={data.id}>
              <div className="card card-compact  b2b-Card">
                <figure>
                  <img
                    className="rounded"
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <p>{data.date}</p>
                  <h2 className="card-title">{data.title}</h2>
                  <div className="card-actions justify-start">
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default B2B;

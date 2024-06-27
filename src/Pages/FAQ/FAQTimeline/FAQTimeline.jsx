import "./FAQTimeline.css";

const FAQTimeline = () => {
  return (
    <div className="bg-[#DCFFFE] ">
      <h1 className="innerTitle-Text text-center">
        <span className="text-black">FA</span>
        <span className="text-[#EF4D48]">Q</span>
      </h1>
      <p className="subtext-details text-center">
        <span className="text-[#6A6A6A]">
          Linked Hacker is the world's #1 B2B lead generation and B2B Email{" "}
          <br />
          service. No one beats our stats.
        </span>
      </p>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle"></div>
          <div className="timeline-start md:text-end mb-10">
            <div className="text-lg text-[#EF4D48] timelineTitle">
              Project Requirement
            </div>
            <p className="timeLineDetails">
              Migrating from a different platform? Updating the existing Shopify
              Site? Or creating a brand new site from scratch? Depending on
              this, we will be gathering the requirements from you. This will
              give us a clear idea as to what would be the best and most
              cost-effective approach for you to take.
            </p>
          </div>
          <hr className="bg-[#066C6C]" />
        </li>
        <li>
          <hr className="bg-[#066C6C]" />
          <div className="timeline-middle"></div>
          <div className="timeline-end mb-10">
            <div className="text-lg text-[#066C6C] timelineTitle">
              Project Requirement
            </div>
            <p className="timeLineDetails">
              Migrating from a different platform? Updating the existing Shopify
              Site? Or creating a brand new site from scratch? Depending on
              this, we will be gathering the requirements from you. This will
              give us a clear idea as to what would be the best and most
              cost-effective approach for you to take.
            </p>
          </div>
          <hr className="bg-[#EF4D48]" />
        </li>
        <li>
          <hr className="bg-[#EF4D48]" />
          <div className="timeline-middle"></div>
          <div className="timeline-start md:text-end mb-10">
            <div className="text-lg text-[#EF4D48] timelineTitle">
              Project Requirement
            </div>
            <p className="timeLineDetails">
              Migrating from a different platform? Updating the existing Shopify
              Site? Or creating a brand new site from scratch? Depending on
              this, we will be gathering the requirements from you. This will
              give us a clear idea as to what would be the best and most
              cost-effective approach for you to take.
            </p>
          </div>
          <hr className="bg-[#066C6C]" />
        </li>
        <li>
          <hr className="bg-[#066C6C]" />
          <div className="timeline-middle"></div>
          <div className="timeline-end mb-10">
            <div className="text-lg text-[#066C6C] timelineTitle">
              Project Requirement
            </div>
            <p className="timeLineDetails">
              Migrating from a different platform? Updating the existing Shopify
              Site? Or creating a brand new site from scratch? Depending on
              this, we will be gathering the requirements from you. This will
              give us a clear idea as to what would be the best and most
              cost-effective approach for you to take.
            </p>
          </div>
          <hr className="bg-[#EF4D48]" />
        </li>
      </ul>
    </div>
  );
};

export default FAQTimeline;

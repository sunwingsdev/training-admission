import PrimaryButton from "../../../components/Home/PrimaryButton/PrimaryButton";

const AboutUs = () => {
  const contentList = [
    {
      number: 63700,
      label: "Successful Students",
    },
    {
      number: 30000,
      label: "Expert Freelancers",
    },
    {
      number: 20000,
      label: "Skilled Job Holders",
    },
    {
      number: 600,
      label: "Industry Expert",
    },
    {
      number: 91,
      label: "Success Ratio",
    },
    {
      number: 700,
      label: "Companies",
    },
  ];
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="text-[#cf0000] text-[45px] pb-[29px] font-bold">
          About Us
        </h2>
        <p className="text-[#605f62] pb-[59px] max-w-[857px] leading-[26px]">
          Sunwings Training Centre is an institution where empowering the
          community with an excellent standard of learning is what we desire. We
          endeavour for the continuous improvement of our leaders who will work
          to construct a better future. We will continue to share our knowledge
          for contributing to the success of individuals and to serve society in
          the best interest.
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-3 gap-14 py-8">
        <div className="lg:w-1/2 w-full">
          <p className="text-[18px] font-bold text-[#fb312e]">
            Successfully 15 Year&apos;s
          </p>
          <h2 className="text-[#1f1e1e] font-bold text-[45px] leading-[54px]">
            World-Renowned IT Expert Making Organization
          </h2>
          <p className="text-[#605f62] text-base leading-[26px] py-[25px]">
            Sunwings Training Centre has been working with a vision to create IT
            experts for the past 15 years. In a fast pacing world, where every
            sector relies on technology, you need to develop IT skills to secure
            a better future. With the utmost dedication, we have been able to
            make more than 70,000 IT experts who are currently working in
            different sectors.
          </p>
          <PrimaryButton text={"Browse Course"} />
        </div>
        <img
          className="lg:w-1/2 w-full rounded-[24px]"
          src="https://www.creativeitinstitute.com/images/featured/02_default.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-center pb-9">
        {contentList?.map(({ number, label }) => (
          <div
            className="flex flex-col items-center justify-center px-[30px] py-[15px] bg-[#faf9fd]"
            key={label}
          >
            <p className="text-[#cf0000] text-[30px] leading-[45px] font-bold">
              {number}
              {label === "Success Ratio" ? "%" : "+"}
            </p>
            <p className="text-[#1f1e1e] text-[16px] leading-[20px] font-bold">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

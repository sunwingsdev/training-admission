import CourseTab from "../CourseTab/CourseTab";

const PopularCourse = () => {
  return (
    <div className="container mx-auto pt-[154px]">
      <div>
        <h2 className="text-[#1f1e1e] text-[44px] text-center font-bold">
          Popular Courses
        </h2>
        <p className="text-[#605f62] text-center w-2/3 mx-auto pt-5 pb-12">
          We have designed our courses with the most demanding professional
          skills. The knowledge, experience, and expertise gained through the
          program will ensure your desired job in the global market. From the
          list below you can enroll to any online or offline courses at any
          time.
        </p>
      </div>
      <CourseTab />
    </div>
  );
};

export default PopularCourse;

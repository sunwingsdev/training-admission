import { useForm } from "react-hook-form";
import PrimaryButton from "../../../components/Home/PrimaryButton/PrimaryButton";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
    // Reset form after submission
    reset();
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-[#cf0000] font-semibold text-[45px] pb-[29px]">
        Contact Us
      </h2>
      <p className="text-[#605f62] max-w-[857px] pb-[59px]">
        You are welcomed to visit our office for any information related to
        course and training. You can also reach us through the hotline number or
        messenger.
      </p>
      <div>
        <div className="">
          <h3 className="text-[#ff1e1e] text-[22px] font-bold pb-[3px] leading-[33px]">
            Head Office [Main Campus, Dhaka]
          </h3>
          <p className="text-[#212529] leading-[1.5rem]">
            A.I. Nannu Tower (6th Floor) <br /> Beside of Mirpur DOHS Shopping
            Complex <br /> 1st Gate, Mirpur DOHS, <br />
            Dhaka 1216, Bangladesh
          </p>
        </div>
        <div className="pt-8 flex justify-start items-start gap-8">
          <div className="">
            <h3 className="text-[#1f1e1e] text-[22px] leading-[33px] pb-[3px] font-bold">
              Phone Number
            </h3>
            <p className="text-[#212529] leading-[1.5rem]">
              +880 1777308777 <br /> +880 1777308777 <br /> +880 1777308777{" "}
              <br /> +880 1777308777 <br /> +880 1777308777
            </p>
          </div>
          <div>
            <h3 className="text-[#1f1e1e] text-[22px] leading-[33px] pb-[3px] font-bold">
              Office Visit Time:
            </h3>
            <p>
              Saturday- Thursda <br />
              10:00 am to 7:00 pm
            </p>
            <h3 className="text-[#1f1e1e] text-[22px] leading-[33px] pb-[3px] font-bold pt-2">
              Email:
            </h3>
            <p>sunwingsdev@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto my-10 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-xl mb-4">Queries</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="text"
              {...register("name")}
              placeholder="Name"
              className="border-2 border-gray-400 w-full py-2 px-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              className="border-2 border-gray-400 w-full py-2 px-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              {...register("phone")}
              placeholder="Phone Number"
              className="border-2 border-gray-400 w-full py-2 px-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              {...register("details")}
              placeholder="Your Query"
              rows="4"
              className="border-2 border-gray-400 w-full py-2 px-3 rounded-lg focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button type="submit">
              <PrimaryButton text={"Submit"} />{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

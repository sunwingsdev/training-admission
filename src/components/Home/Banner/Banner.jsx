import { BsBookmarkCheckFill } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { FaCirclePlay } from "react-icons/fa6";
import bannerImg from "../../../assets/banner/banner.jpg";
import isoImg from "../../../assets/banner/iso.png";
import BannerSlider from "../BannerSlider/BannerSlider";

const Banner = () => {
  return (
    <div className="bannerBg pt-14 pb-52 relative">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-16 lg:gap-4">
        <div className="lg:w-1/2">
          <div className="flex flex-row gap-1 items-center justify-start">
            <BsBookmarkCheckFill size={25} className="text-[#ff1e1e]" />
            <p className="text-[17px] font-semibold">Unleash Your Potential</p>
          </div>
          <h2 className="text-[43px] font-bold">
            Become an IT Pro & Rule the <br />
            <span className="gradientTextBg">Digital World</span>
          </h2>
          <p className="text-[#212529] py-4">
            With a vision to turn manpower into assets, Creative IT Institute is
            ready to enhance your learning experience with skilled mentors and
            updated curriculum. Pick your desired course from more than 30
            trendy options.
          </p>
          <div className="flex flex-row items-center justify-start gap-3">
            <PrimaryButton
              icon={IoBookOutline}
              text={"Browse Course"}
              arrow={false}
              hover={true}
            >
              Browse
            </PrimaryButton>
            <PrimaryButton
              icon={IoBookOutline}
              text={"Join Free Seminar"}
              arrow={false}
              hover={true}
            >
              Browse
            </PrimaryButton>
          </div>
          <div className="flex flex-row items-center justify-start gap-3 py-6">
            <img src={isoImg} alt="iso" />
            <p className="text-[#342b27] font-semibold">
              One of the best ISO certified IT <br /> Training Institutes in
              Bangladesh
            </p>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <FaCirclePlay
              // onClick={() => handleVideo(showLiveTv?.[0])}
              className="text-5xl text-orange-600 border-2 border-white rounded-full bg-white cursor-pointer"
            />
          </div>
          <img
            src={bannerImg}
            alt="Gallery Image"
            className="w-full rounded-2xl"
          />
        </div>
      </div>
      <BannerSlider />
    </div>
  );
};

export default Banner;

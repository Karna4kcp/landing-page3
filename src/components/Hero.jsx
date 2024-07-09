import { heroImg } from "../assets";

const Hero = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto grid md:grid-cols-2 px-4 md:px-32">
        <div className="flex flex-col justify-start gap-4">
          <p className="py-2 text-2xl uppercase text-[#20b486] font-medium">
            Start to success
          </p>
          <h1 className="md:leading-[60px] py-2 md:text-6xl text-5xl font-semibold">
            Access to <span className="text-[#20b486]">5000+</span>Courses from{" "}
            <span className="text-[#20b486]">300</span> Instructors &
            Institutions
          </h1>
          <p className="py-2 text-gray-600">
            Various Versions have evolved over the years sometimes by accident
          </p>
        </div>
        <img src={ heroImg } className="md:order-last order-first pl-5 ml-2" alt=""/>
      </div>
    </div>
  );
};

export default Hero;

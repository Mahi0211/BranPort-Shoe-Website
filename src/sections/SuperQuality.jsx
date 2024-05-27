import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col w-full max-container gap-10"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin text-[#22223b] font-bold capitalize lg:max-w-lg">
          We Provided You{" "}
          <span className="text-[#4a4e69] inline-block">
            Super{" "}
            <span className="text-[#4a4e69] inline-block">Quality</span>
          </span>{" "}
          Shoes
        </h2>
        <p className="mt-6 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-10">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8" width={540} height={540} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;

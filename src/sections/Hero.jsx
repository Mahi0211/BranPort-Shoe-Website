import { useState } from "react";
import { arrowRight1 } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1)

  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col xl:flex-row justify-center max-container gap-10"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-poppins text-[#4a4e69]">
          Our Summer Collection
        </p>
        <h1 className="mt-10 text-8xl font-palanquin text-[#22223b] max-sm:text-[72px] font-bold max-sm:leading-[1] max-lg:text-[80px] max-lg:leading-[1] z-10">
          <span className="xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-[#4a4e69] inline-block mt-3">
            BranPort
          </span>{" "}
          Shoes
        </h1>
        <p className="font-poppins text-[#4A4E69] mt-6 mb-14 text-lg text-[17px] leading-8 sm:max-w-sm">
          Discover stylish BP arrivals, quality, comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight1} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((item) => (
            <div key={item.label}>
              <p className="text-4xl font-palanquin font-bold text-[#22223b]">
                {item.value}
              </p>
              <p className="leading-7 font-poppins text-[#4A4E69]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImage} alt="Shoe Collection"
        height={500} width={610} className="object-contain relative z-10" />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image) => (
            <div key= {image}>
              <ShoeCard 
              imageURL= {image}
              changeBigShoeImage= {(image) => {
                setBigShoeImage(image)
              }}
              bigShoeImage= {bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

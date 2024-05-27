import { arrowRight1 } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin text-[#22223b] font-bold capitalize lg:max-w-lg">
          <span className="text-[#4a4e69] inline-block">Special</span> Offer
        </h2>
        <p className="mt-6 info-text lg:max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label="Shop now" iconURL={arrowRight1} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-[#4a4e69]"
            textColor="text-[#4a4e69]"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;

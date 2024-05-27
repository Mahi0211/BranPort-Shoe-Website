import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={20} height={20} />
        <p className="font-poppins text-[#4A4E69] text-xl leading-none">{`(${rating}/5)`}</p>
      </div>
      <h3 className="font-palanquin mt-3 text-xl text-[#22223b] font-semibold leading-normal">{name}</h3>
      <p className="font-palanquin mt-2 text-[#4A4E69] text-xl font-semibold leading-normal">{price}</p>
    </div>
  );
};

export default PopularProductCard;

import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="image"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="text-center info-text mt-6 max-w-sm">{feedback}</p>
      <div className="flex gap-2.5 font-palanquin mt-3 justify-center items-center">
        <img
          src={star}
          alt=""
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="font-poppins text-xl text-[#4a4e69]">({rating})</p>
      </div>
      <h3 className="mt-2 font-palanquin text-3xl font-bold text-[#22223b]">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;

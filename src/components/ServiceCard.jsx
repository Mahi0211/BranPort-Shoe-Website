const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex flex-1 flex-col sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-[#4A4E69] rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-4 font-palanquin text-3xl leading-normal font-bold text-[#22223B]">{label}</h3>
      <p className="mt-3 break-words font-poppins text-lg leading-normal text-[#4A4E69]">{subtext}</p>
    </div>
  );
};

export default ServiceCard;

import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-center font-palanquin font-bold text-4xl text-[#22223b]">
        What Our <span className="text-[#4a4e69]">Customers</span> Say?
      </h3>
      <p className="mt-4 info-text m-auto max-w-lg text-center">Here genuine stories from our satisfied customers about their exceptional experience with us.</p>
      <div className="flex flex-1 mt-24 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.imgURL} {...review}/>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;

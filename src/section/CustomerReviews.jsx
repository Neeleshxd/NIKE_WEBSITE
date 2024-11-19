import ReviewCard from "../Components/ReviewCard"
import { reviews } from "../Constants"
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl text-bold">What Our
        <span className="text-coral-red">Customers</span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Hear genuine stories from our 
        satisfied customers about there exceptional experience with us.</p>
        <div className="flex mt-24 flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review) =>(
            <ReviewCard key={review.customerName}
            imgURL={review.imgURL} customerName={review.customerName} rating={review.rating}feedback={review.feedback}/>
          ))}
        </div>
    </section>
  )
}

export default CustomerReviews;

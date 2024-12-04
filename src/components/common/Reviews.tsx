import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Review } from "../../types";
import ReviewForm from "./ReviewForm";

const reviews: Review[] = [
  { id: 1, username: "John Doe", rating: 4, comment: "Great movie!" },
  { id: 2, username: "Jane Doe", rating: 5, comment: "Awesome movie!" },
];

type ReviewsProps = {
  movieId: number;
  reviewsEndpoint: string; // Pass the API endpoint for reviews
};

const Reviews: React.FC<ReviewsProps> = ({ movieId, reviewsEndpoint }) => {
  const [page, setPage] = useState(1);
  const [newReview, setNewReview] = useState({
    username: "",
    rating: 0,
    comment: "",
  });

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold sm:text-xl">Reviews</h2>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews?.map((review) => (
          <Card key={review.id} className="border-0 bg-gray-900">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-800 sm:h-12 sm:w-12">
                  <img
                    src="/placeholder.svg"
                    alt="User Avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">{review.username}</div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                    <span className="text-sm text-gray-400">
                      {review.rating}
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-300 sm:text-base">
                {review.comment}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="btn"
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="text-gray-400">Page {page}</span>
        <button onClick={() => setPage((prev) => prev + 1)} className="btn">
          Next
        </button>
      </div>

      <ReviewForm movieId={movieId} reviewsEndpoint="asd"></ReviewForm>
    </div>
  );
};

export default Reviews;

import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Pankaj Singh',
    location: 'Pune, Maharashtra',
    rating: 5,
    date: '20-March-25',
    product: 'Greenhouse Shading',
    comment: 'Very satisfied with the quality and delivery.'
  },
  {
    name: 'Paresh',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    date: '16-November-24',
    product: 'Agro Shade Net',
    comment: 'Excellent product and prompt response.'
  }
];


const RatingsReviews: React.FC = () => (
  <section className="py-16 bg-gray-50 border-t border-b">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Ratings & Reviews</h2>
      {/* Overall rating and breakdown */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-yellow-500 font-bold text-3xl">4.1</span>
            <span className="text-gray-700 font-medium text-lg">/ 5</span>
            <span className="flex ml-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-6 w-6 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
              ))}
            </span>
          </div>
          <div className="text-gray-600 text-sm">18 Ratings</div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          {/* Star breakdown */}
          {[
            { star: 5, percent: 56 },
            { star: 4, percent: 11 },
            { star: 3, percent: 11 },
            { star: 2, percent: 5 },
            { star: 1, percent: 17 },
          ].map(({ star, percent }) => (
            <div key={star} className="flex items-center gap-2">
              <span className="w-8 text-sm text-gray-700 font-medium">{star} star</span>
              <div className="flex-1 bg-gray-200 rounded h-2 overflow-hidden">
                <div className={`bg-yellow-400 h-2`} style={{ width: `${percent}%` }}></div>
              </div>
              <span className="w-10 text-right text-sm text-gray-600">{percent}%</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 min-w-[160px]">
          <div className="font-semibold text-gray-700 mb-1">User Satisfaction</div>
          <div className="flex items-center justify-between text-sm">
            <span>Response</span>
            <span className="font-bold text-blue-700">50%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Quality</span>
            <span className="font-bold text-blue-700">100%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Delivery</span>
            <span className="font-bold text-blue-700">100%</span>
          </div>
        </div>
      </div>
      {/* Most Relevant Reviews */}
      <div className="space-y-8">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-blue-700">{review.name}</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600 text-sm">{review.location}</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
              ))}
            </div>
            <div className="text-gray-500 text-xs mb-1">{review.date} | Product Name : {review.product}</div>
            <div className="text-gray-800 font-medium">{review.comment}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RatingsReviews;

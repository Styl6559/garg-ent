import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sai Krishna',
    location: 'Sindhnur, Karnataka',
    rating: 5,
    date: '10-February-23',
    product: 'Outdoor Shade Net'
  },
  {
    name: 'Anil Jain',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    date: '22-November-22',
    product: 'Shade Net'
  },
  {
    name: 'Surajkumar Kharat',
    location: 'Dahivadi, Maharashtra',
    rating: 5,
    date: '07-September-21',
    product: 'Shade Net'
  },
  {
    name: 'Rajesh Kumar Gupta',
    location: 'Vapi, Gujarat',
    rating: 5,
    date: '31-August-21',
    product: 'Reprocessed HDPE Granules'
  },
  {
    name: 'Pravin kumar',
    location: 'Godawari, Andhra Pradesh',
    rating: 2,
    date: '12-October-22',
    product: 'Shade Net'
  },
  {
    name: 'Vijay',
    location: 'Nashik, Maharashtra',
    rating: 5,
    date: '10-June-22',
    product: 'Agro Shade Net'
  },
  {
    name: 'Roshan Lal',
    location: 'Bilaspur, Himachal Pradesh',
    rating: 1,
    date: '20-September-22',
    product: 'Greenhouse Shading'
  }
];



import { useState } from 'react';

const RatingsReviews: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Ratings & Reviews
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Trusted by customers across India for quality products and reliable service
        </p>
      </div>

      {/* Overall rating and breakdown */}
      <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Overall Rating */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
              <span className="text-4xl font-bold text-gray-900">4.1</span>
              <span className="text-xl text-gray-600">/ 5</span>
            </div>
            <div className="flex justify-center lg:justify-start mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-6 w-6 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
              ))}
            </div>
            <div className="text-gray-600">Based on 18 ratings</div>
          </div>

          {/* Rating Breakdown */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900 mb-4">Rating Breakdown</h3>
            {[
              { star: 5, percent: 56 },
              { star: 4, percent: 11 },
              { star: 3, percent: 11 },
              { star: 2, percent: 5 },
              { star: 1, percent: 17 },
            ].map(({ star, percent }) => (
              <div key={star} className="flex items-center gap-3">
                <span className="w-12 text-sm text-gray-700 font-medium">{star} star</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-lime-500 h-2.5 rounded-full transition-all duration-300" style={{ width: `${percent}%` }}></div>
                </div>
                <span className="w-12 text-right text-sm text-gray-600 font-medium">{percent}%</span>
              </div>
            ))}
          </div>

          {/* Satisfaction Metrics */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Customer Satisfaction</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Response Rate</span>
                <span className="font-bold text-lime-600">50%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Product Quality</span>
                <span className="font-bold text-lime-600">100%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Delivery Performance</span>
                <span className="font-bold text-lime-600">100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Customer Reviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((review, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">{review.name}</h4>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-2">{review.location}</p>
              <div className="text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                <div className="font-medium text-gray-700 mb-1">Product: {review.product}</div>
                <div>Reviewed on {review.date}</div>
              </div>
            </div>
          ))}
        </div>

        {reviews.length > 3 && (
          <div className="text-center mt-10">
            <button
              className="px-8 py-3 bg-lime-600 hover:bg-lime-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-100 shadow-lg"
              onClick={() => setShowAll((v) => !v)}
            >
              {showAll ? 'Show Less Reviews' : 'Show More Reviews'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RatingsReviews;

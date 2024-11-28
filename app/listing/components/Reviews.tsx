import React from 'react';

interface Review {
  author: string;
  date: string;
  content: string;
  rating: number;
}

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="bg-white p-6 rounded-lg space-y-4">
      <div className="flex items-center gap-4">
        <img 
          src="/api/placeholder/60/60" 
          alt={`${review.author} profile`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-[#4f4f4f] font-semibold">{review.author}</h3>
          <p className="text-[#4f4f4f] text-sm">{review.date}</p>
        </div>
      </div>
      <p className="text-[#4f4f4f] line-clamp-3">
        {review.content}
      </p>
      <button className="text-[#4f4f4f] font-semibold underline">
        Show more
      </button>
    </div>
  );
};

const Reviews = () => {
  const reviews = [
    {
      author: 'Rodrigo',
      date: 'November 2023',
      content: 'Highly recommend! The indoor and outdoor spaces are beautiful! Wonderful for little kids. Lots of room to run around and play outside. The food was delicious and lots of it. The hospitality was...',
      rating: 5
    },
    {
      author: 'Rodrigo',
      date: 'November 2023',
      content: 'Highly recommend! The indoor and outdoor spaces are beautiful! Wonderful for little kids. Lots of room to run around and play outside. The food was delicious and lots of it. The hospitality was...',
      rating: 5
    },
    {
      author: 'Rodrigo',
      date: 'November 2023',
      content: 'Highly recommend! The indoor and outdoor spaces are beautiful! Wonderful for little kids. Lots of room to run around and play outside. The food was delicious and lots of it. The hospitality was...',
      rating: 5
    },
    {
      author: 'Rodrigo',
      date: 'November 2023',
      content: 'Highly recommend! The indoor and outdoor spaces are beautiful! Wonderful for little kids. Lots of room to run around and play outside. The food was delicious and lots of it. The hospitality was...',
      rating: 5
    },
    {
      author: 'Rodrigo',
      date: 'November 2023',
      content: 'Highly recommend! The indoor and outdoor spaces are beautiful! Wonderful for little kids. Lots of room to run around and play outside. The food was delicious and lots of it. The hospitality was...',
      rating: 5
    },
    {
      author: 'Rodrigo',
      date: 'November 2023',
      content: 'Highly recommend! The indoor and outdoor spaces are beautiful! Wonderful for little kids. Lots of room to run around and play outside. The food was delicious and lots of it. The hospitality was...',
      rating: 5
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Reviews Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-[#4f4f4f]">
          4.99 (99 reviews)
        </h2>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>

      {/* Show All Reviews Button */}
      <div className="flex justify-center">
        <button className="flex items-center gap-2 px-6 py-4 bg-[#f4f3e8] rounded-full border border-[#928f8c]/30 hover:bg-[#eae9dd] transition-colors">
          <img 
            className="w-5 h-5" 
            src="/api/placeholder/22/22" 
            alt="Reviews icon"
          />
          <span className="text-[#4f4f4f] font-semibold">
            Show all reviews
          </span>
        </button>
      </div>
    </section>
  );
};

export default Reviews;

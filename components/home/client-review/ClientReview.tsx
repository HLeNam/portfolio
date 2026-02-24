"use client";

import Carousel from "react-multi-carousel";

import { SectionHeading } from "@/components/helper";
import { userReviewData } from "@/data";

import "react-multi-carousel/lib/styles.css";
import { ReviewCard } from "./ReviewCard";

const ClientReview = () => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1324,
      },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: {
        max: 1324,
        min: 764,
      },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: {
        max: 764,
        min: 0,
      },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="w-[80%] mx-auto">
        <SectionHeading
          title_1="Our Client"
          title_2="Review"
          description="Checkout our client reviews"
        />
        <div className="mt-14">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            arrows={true}
          >
            {userReviewData.map((review) => (
              <div key={review.id} className="h-full p-3">
                <ReviewCard review={review} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default ClientReview;

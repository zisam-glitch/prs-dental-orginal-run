import React from "react";
import ClearAlignersBaner from "./ClearAlignersBaner";
import ClrarContent from "./ClrarContent";
import Faq from "./Faq";
import ContactInfo from "./ContactInfo";
import HomeBanner from "../../home/HomeBanner";

const ClearAligners = () => {
  return (
    <>
      <ClearAlignersBaner />
      <ClrarContent />
      <Faq />
      <section className="container mx-auto px-10 py-12">
        <div className="tab1 py-6">
          <h1 className="blue text-3xl	py-4">Conclusion</h1>
          <p>
            Cosmetic Dentistry is more than just superficial enhancements; it's
            about restoring both function and confidence in your smile. Whether
            you're seeking a subtle change or a dramatic transformation,
            cosmetic dentistry offers versatile solutions to meet your needs.
          </p>
        </div>
      </section>
      <ContactInfo />
      <div className="mb-5">
        <HomeBanner />
      </div>
    </>
  );
};

export default ClearAligners;

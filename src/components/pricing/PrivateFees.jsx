import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import SectionHeader from "../global/SectionHeader";
import PrivateFeeFiltered from "./PrivateFeeFiltered";

const PrivateFees = () => {
  const data = useStaticQuery(graphql`
    query PrivateFeeQuery {
      contentfulPages(title: { eq: "Pricing" }) {
        id
        blocks {
          ... on ContentfulSections {
            id
            mainTitle
            subtitle
            description {
              description
            }
          }
        }
      }
    }
  `);

  const header = data?.contentfulPages?.blocks[4];

  return (
    <>
      <section className="w-full bg-white">
        <div className="py-24 mx-auto container px-10 ">
          <h2 className="text-center text-5xl my-2 capitalize font-semibold text-primary">
            Parish Dental Pricing
          </h2>
          <h2 className="text-center text-xl my-2 capitalize text-primary">
            Special Announcement from Parish Dental <br /> At Parish Dental, we
            take immense pride in being recognized as the market leader in
            dental pricing. Our dedication to offering top-notch dental services
            at the most competitive rates is unwavering. <br />
            Our Price Match Promise <br />
            We're committed to providing not only the best dental care but also
            the best value. Therefore, we guarantee to beat the price of any
            dental treatment offered by our competitors. Just present us with a
            written quote from another provider, and we will offer you a better
            price.
            <br />
            Choose Parish Dental for:
            <br />
            Affordable Excellence: We ensure that superior dental care is
            accessible to everyone.
            <br />
            Comprehensive Care: From routine check-ups to advanced treatments,
            we offer a wide range of dental services.
            <br />
            Trusted Expertise: Our team of skilled dental professionals is
            dedicated to your oral health.
            <br />
          </h2>

          <div className="mt-3">
            <div>
              <h3 className="text-primary font-semibold text-2xl mt-8 mb-2">
                Periodontal / Gum Treatment{" "}
              </h3>

              <div
                className="flex justify-between items-center"
              >
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                  Scale & Polish                    </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £50
                  </p>
                </div>
                <div
                className="flex justify-between items-center"
              >
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                  Scale & Polish                    </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £50
                  </p>
                </div>
              </div>
            </div>
            <PrivateFeeFiltered category={null} />
            <PrivateFeeFiltered category="White Filling" />
            <PrivateFeeFiltered category="Root Canal" />
            <PrivateFeeFiltered category="Extractions" />
            {/* <PrivateFeeFiltered category="Restorative" />
            <PrivateFeeFiltered category="Root Canal Treatment" />
            <PrivateFeeFiltered category="Extractions" />
            <PrivateFeeFiltered category="Crown & Bridge" />
            <PrivateFeeFiltered category="Dentures" />
            <PrivateFeeFiltered category="Prevention" /> */}
            <div>
              <h3 className="text-primary font-semibold text-2xl mt-8 mb-2">
                Aesthetics
              </h3>
              <div className="pla">
                <details>
                  <summary>
                    <h3 className="text-primary font-semibold text-xl	 mt-8 mb-2">
                      Dermal Fillers
                    </h3>
                  </summary>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        0.5ML
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £100
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        0.7ML
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £150
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        1ML
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £250
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        2ML
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £350
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        3ML
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £400
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        4ML
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £450
                      </p>
                    </div>
                  </div>
                </details>
                <details>
                  <summary>
                    <h3 className="text-primary font-semibold text-xl mt-8 mb-2">
                      Botox{" "}
                    </h3>
                  </summary>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        1 AREA
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £180
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        2 AREAS
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £240
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        3 AREAS
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £300
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        4 AREAS
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £400
                      </p>
                    </div>
                  </div>
                </details>
                <details>
                  <summary>
                    <h3 className="text-primary font-semibold text-xl mt-8 mb-2">
                      Others
                    </h3>
                  </summary>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        PROFHILO FIRST DOSE
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £249
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        SOSUM BOOSTER
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £160
                      </p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            <PrivateFeeFiltered category="Other Items" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivateFees;

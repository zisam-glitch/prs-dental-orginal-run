import React from "react";
import Logo from "./Logo";
import { FiInstagram, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { navPages, policyPages } from "../../common/constant";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allContentfulGlobal {
        nodes {
          socials
          phone
          email
          logoWhite {
            url
            title
          }
          logo {
            url
            title
          }
          address
          footerDescription
          mapPicture {
            title
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
      }
      allContentfulSchedule(sort: { order: ASC, fields: scheduleId }) {
        nodes {
          day
          contentful_id
          time
        }
      }
    }
  `);

  const footerData = data?.allContentfulGlobal?.nodes[0];

  const socials = [
    // { id: 1, icon: FiFacebook, href: socialLinks.facebookLink },
    { id: 2, icon: FiInstagram, href: footerData?.socials[0] },
    // { id: 3, icon: FiTwitter, href: socialLinks.twitterLink },
  ];

  return (
    <footer className="w-full bg-primary py-20">
      <div className="container mx-auto px-10 grid-cols-1 sm:grid-cols-2 grid lg:grid-cols-4 gap-16 text-white mb-12">
        <div>
          <Logo isFooter />
          <p className="my-10 font-light">{footerData?.footerDescription}</p>
          <div className="flex items-center my-5 gap-2.5	">
            <a
              href="https://instagram.com/parish.dental?igshid=MzRlODBiNWFlZA=="
              className="icon"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100094065880755&mibextid=V3Yony"
              className="icon"
            >
              <BsInstagram />
            </a>
          </div>

          <div className="mt-10 flex items-center">
            <div className="font-light mr-2 text-sm">Website Built By:</div>
            <a
              target="_blank"
              href="https://instagram.com/grow_with_sayed"
              rel="noreferrer"
            >
              <StaticImage
                width={35}
                alt="Unimax"
                className="rounded-full"
                src="../../images/IMG_20210907_002730_422.jpg"
              />
            </a>
          </div>
        </div>

        <div className="">
          <h3 className="font-medium text-xl mb-7">Quick Links</h3>
          <div className="flex justify-between gap-x-5">
            <div>
              {navPages.map((item) => (
                <Link
                  key={item.id}
                  className="font-light block mb-3"
                  to={item.route}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div>
              {policyPages.map((item) => (
                <Link
                  key={item.id}
                  className="font-light block mb-3"
                  to={item.route}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* {scheduleData?.map((item, index) => (
              <div className="flex justify-between my-2" key={index}>
                <span className="font-light">{item.day}</span>
                <span className="font-light">{item.time}</span>
              </div>
            ))} */}
          </div>
        </div>
        <div className="">
          <h3 className="font-medium text-xl mb-7">Contact Info</h3>

          <div className="flex items-center mb-7">
            <FiMapPin className="mr-2 w-1/12 text-xl" />{" "}
            <span className="w-11/12 font-light">{footerData?.address}</span>
          </div>

          <a
            href="mailto:hello@parishdental.co.uk"
            className="flex items-center  mb-7"
          >
            <FiMail className="mr-2 w-1/12 text-xl" />{" "}
            <span className="font-light">hello@parishdental.co.uk</span>
          </a>

          <a
            href="tel:01133228354"
            className="flex items-center footer-back mb-4 mr-8"
          >
            <FiPhone className="mr-2 w-1/12 text-xl" />{" "}
            <span className="font-light">0113 322 8354 - PVT.</span>
          </a>
          <a
            href={`tel:${footerData?.phone}`}
            className="flex items-center footer-back-blue mb-7 mr-8"
          >
            <FiPhone className="mr-2 w-1/12 text-xl" />{" "}
            <span className="font-light">0113 263 8509 - NHS</span>
          </a>
        </div>
        <div>
          <a
            href="https://www.google.com/maps/place/Parish+Dental+Practise,+7-9+Branch+Rd,+Armley,+Leeds+LS12+3AQ,+UK/@53.7977826,-1.5875803,19.7z/data=!4m5!3m4!1s0x48795ec462f517e1:0xad3e66b54778e8ef!8m2!3d53.7978077!4d-1.5874348?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <GatsbyImage
              image={footerData?.mapPicture?.gatsbyImageData}
              className="h-full w-full"
              imgClassName="w-full h-full object-cover rounded"
              alt={footerData?.mapPicture?.title}
            />
          </a>
        </div>
      </div>
      <div className="text-center text-white">
        Copyright @ {new Date().getFullYear()} Parish Dental
      </div>
    </footer>
  );
};

export default Footer;

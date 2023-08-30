/** @format */

import Footer from "@/components/Footer";
import HeadComponent from "@/components/HeadComponent";
import Header from "@/components/Header";
import axios from "axios";
import React from "react";

const PrivacyPolicyPage = ({ data, header, footer }) => {
  return (
    <>
      <HeadComponent
        data={data?.attributes?.seo}
        // title={data?.attributes?.Banner?.Title}
      />
      <Header data={header} />

      <section className="dynamic__content__block">
        <div className="container-fluid">
          <h1>Privacy policy</h1>
          <h3>Who we are</h3>
          <p>Our website address is: https://pixelflames.com/.</p>
          <p>
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </p>
          <p>
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy. This Privacy
            Policy has been created with the help of the Privacy Policy
            Template.
          </p>
          <h3>Interpretation and Definitions</h3>
          <h4>Interpretation</h4>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>
          <h4>Definitions</h4>
          <p>For the purposes of this Privacy Policy:</p>
          <ul>
            <li>
              Company (referred to as either “the Company”, “We”, “Us” or “Our”
              in this Agreement) refers to PIXELFLAMES TECHNOLOGIES PVT LTD.
            </li>
            <li>
              Cookies are small files that are placed on Your computer, mobile
              device or any other device by a website, containing the details of
              Your browsing history on that website among its many uses.
            </li>
          </ul>
        </div>
      </section>
      <Footer data={footer} />
    </>
  );
};

export default PrivacyPolicyPage;
export async function getServerSideProps(context) {
  const data = await axios
    .get(`${process.env.DOMAIN_URL}/api/privacypage`)
    .then(function (response) {
      // handle success
      return response?.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  return {
    props: {
      data:
        Object.keys(data).length > 0
          ? data?.data && data?.data !== null
            ? data?.data
            : null
          : null,
      header:
        Object.keys(data).length > 0
          ? data?.header && data?.header !== null
            ? data?.header
            : null
          : null,
      footer:
        Object.keys(data).length > 0
          ? data?.footer && data?.footer !== null
            ? data?.footer
            : null
          : null,
    }, // will be passed to the page component as props
  };
}

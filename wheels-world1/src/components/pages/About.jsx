import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import OurMembers from "../UI/OurMember";
import bg from "../../assets/car/bg1.png";
import img from "../../assets/slider-img/11.jpg";
import img2 from "../../assets/car/about.jpg";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

export default function About() {
  return (
    <main className="overflow-hidden w-full flex flex-col">
    {/* Section 1 */}
    <section className="relative">
      <div className="flex justify-center items-center font-Alegreya gap-5 h-[489px] relative z-0 w-full">
        <img src={bg} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="absolute top-0 flex justify-center items-baseline font-sans gap-5 h-[489px] w-full z-2">
        <div className="flex flex-col justify-center items-center gap-10 m-4 sm:m-10">
          <span className="text-5xl font-medium text-slate-50">ABOUT US</span>
        </div>
      </div>
    </section>

    {/* Section 2 */}
    <section className="flex flex-col justify-center items-center bg-zinc-950">
      <div className="flex flex-col sm:flex-row gap-x-10 p-6 sm:p-12">
        <div className="w-full sm:w-1/2">
          <img src={img} className="object-cover w-full h-auto" alt="" />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col justify-center items-start text-slate-100">
          <span className="text-lg font-mono text-red-700 mt-3">1. HISTORY</span>
          <div className="flex flex-col gap-4 py-6 sm:py-24 px-6 sm:px-48">
            <span className="font-normal text-4xl space-x-3">
              THE FOUNDATION OF THE WHEELS WORLD
            </span>
            <span className="font-normal text-lg">
              Our Story Officially begins in 1992 when the first car was sold
              under the Wheels World. Embarking on a journey that began with a
              simple vision to redefine the car-rental experience, we've
              traversed milestones and set new standards in the industry.
            </span>
            <span className="font-light text-sm">June 17, 2024</span>
          </div>
        </div>
      </div>
    </section>

    {/* Section 3 */}
    <section className="flex flex-col justify-center items-center p-6 sm:p-12">
      <div className="flex flex-col gap-6 sm:gap-10 px-6 sm:px-12">
        <span className="text-lg font-mono text-red-700 mt-3">2. AREAS OF BUSINESS</span>
        <div className="flex flex-col gap-4 py-6 sm:py-20 px-6 sm:px-12">
          <span className="font-normal text-4xl space-x-3">AREAS OF BUSINESS</span>
          <span className="font-normal text-lg">
            The Wheels symbolizes exclusivity, performance, and quality all over the world. Our prestige is built upon decades of sporting success and the inimitable style of our cars, which are unique in their innovation, technology, and driving pleasure. We craft exclusive, authentic, and memorable experiences for our clients in everything we do.
          </span>
          <span className="font-light text-sm">June 17, 2024</span>
        </div>
      </div>
    </section>

    {/* Section 4 */}
    <section className="flex flex-col items-center bg-gray-50 p-6 sm:p-12">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        <div className="w-full lg:w-1/2">
          <img src={img2} alt="" className="w-full rounded-3" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="section__title text-2xl sm:text-3xl mb-4">
            We Are Committed To Provide Safe Ride Solutions
          </h2>
          <p className="section__description mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet veniam assumenda aperiam accusantium ex autem perferendis repellendus nostrum delectus. Nemo et dolore est tempore rem minima adipisci magni dolorum ipsam.
          </p>
          <p className="section__description mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet veniam assumenda aperiam accusantium ex autem perferendis repellendus nostrum delectus. Nemo et dolore est tempore rem minima adipisci magni dolorum ipsam.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-xl">
              <i className="ri-phone-line"></i>
            </span>
            <div>
              <h6 className="section__subtitle text-lg">Need Any Help?</h6>
              <h4 className="text-2xl">+00123456789</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section 5 */}
    <section className="bg-white py-12 p-6 sm:p-12">
      <div className="flex flex-col gap-6 sm:gap-10 px-6 sm:px-12">
      <span className="text-lg font-mono text-red-700 mt-3 mb-8">3. OUR EXPERTS</span>
      </div>
      <OurMembers />
    </section>
  </main>
  );
}

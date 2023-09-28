import React from 'react';

const AboutUs = () => {
  return (
    <section className=" py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full lg:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-4 uppercase">Why Choose MastermindFX? </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              We are a team of passionate individuals dedicated to providing top-notch services and solutions to our clients.
              With years of experience in the industry, we have successfully delivered numerous projects and have built a strong reputation for our expertise and professionalism.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              At our core, we believe in the power of collaboration and innovation. We understand that every client is unique,
              and we strive to tailor our solutions to meet their specific needs and goals.
              Our team of talented designers, developers, and marketers work closely with our clients to ensure that we deliver exceptional results that exceed their expectations.
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <img className="rounded-lg shadow-lg" src="\images\formal-man-late-for-work.jpg" alt="About Us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

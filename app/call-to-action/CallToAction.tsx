import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-gray-800 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Call to Action Section
        </h2>
        <p className="text-gray-400 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CallToAction;

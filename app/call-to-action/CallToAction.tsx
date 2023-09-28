import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-gray-800 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4 capitalize">
          Master the art of trading
        </h2>
        <p className="text-gray-400 mb-8">
          Unlock the secret of trading by taking the right action now, Join us as mastermindfx and share your own testimony
        </p>
        <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded">
          Get Started Now...
        </button>
      </div>
    </section>
  );
};

export default CallToAction;

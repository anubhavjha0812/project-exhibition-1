import React from 'react';

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-8 lg:items-center lg:gap-16">
                  {/* Image Section */}
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://img.freepik.com/free-vector/okey-hand-user-people-icon_530521-1366.jpg"
                          alt="Sign Language Symbol"
                          className="rounded-md shadow-lg"
                      />
                  </div>

                  {/* Content Section */}
                  <div className="md:7/12 lg:w-7/12 text-center md:text-left">
                      <h2 className="text-3xl text-gray-900 font-bold md:text-4xl leading-snug">
                          Empowering Communication <br /> Through Sign Language Detection
                      </h2>
                      <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                          Our project bridges the gap in communication by translating sign language into meaningful text using cutting-edge technology. It's a step towards creating a more inclusive world.
                      </p>
                      <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                          With real-time recognition powered by AI, we’re enabling effortless and accurate interactions for everyone.
                      </p>
                      <div className="mt-8">
                          <button className="px-6 py-3 text-white bg-orange-600 hover:bg-orange-700 rounded-lg shadow-md transition duration-300">
                              Learn More
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

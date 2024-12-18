import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Hero Section */}
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 py-12">
                <div className="relative z-10 max-w-screen-xl px-6 py-12 sm:py-20 mx-auto text-center sm:text-right sm:px-8">
                    {/* Text Content */}
                    <div className="max-w-xl sm:ml-auto space-y-6 sm:space-y-8">
                        <h1 className="text-4xl font-bold sm:text-5xl">
                            Experience the Future with
                            <span className="block text-orange-700">SignLink</span>
                        </h1>
                        <p className="text-gray-600 text-lg sm:text-xl">
                            Unlock seamless communication through real-time sign language recognition.
                        </p>
                        <Link
                            className="inline-flex items-center px-6 py-3 text-white font-medium bg-orange-700 rounded-lg hover:opacity-90"
                            to="/"
                        >
                            <svg
                                fill="currentColor"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-2"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            Download Now
                        </Link>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="absolute inset-0 flex justify-center items-center sm:right-0 sm:w-1/2">
                    <img
                        className="w-full max-w-sm sm:max-w-md"
                        src="https://i.ibb.co/5BCcDYB/Remote2.png"
                        alt="SignLink Illustration"
                    />
                </div>
            </aside>

            {/* Features Section */}
            <div className="grid place-items-center sm:mt-20 mt-16">
                <img
                    className="sm:w-96 w-64"
                    src="https://i.ibb.co/2M7rtLk/Remote1.png"
                    alt="Features Illustration"
                />
                <h2 className="mt-8 text-center text-2xl sm:text-4xl font-semibold text-gray-900">
                    Bridging Communication Gaps
                </h2>
                <p className="mt-4 px-4 text-center text-lg sm:text-xl text-gray-600">
                    Our advanced AI ensures that no one gets left behind. Simple, effective, and truly empowering!
                </p>
            </div>

            {/* Footer Tagline */}
            <h1 className="text-center text-2xl sm:text-4xl font-medium py-12 text-gray-900">
                Simplifying Connections for All
            </h1>
        </div>
    );
}

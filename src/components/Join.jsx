import { useState } from "react";

export const Join = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <section
      id="join"
      className="h-fit w-full bg-white bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url('./h.jpg')` }}
      aria-labelledby="join-heading"
    >
      <div className="w-4/6 mx-auto py-12 flex flex-col lg:flex-row gap-8 items-center">
        <article className="flex flex-col gap-6 text-left">
          <div>
            <h2
              id="join-heading"
              className="text-xl lg:text-2xl text-gray-800 font-bold"
            >
              Join Us
            </h2>
            <hr className="w-12 h-0.5 bg-gray-800 " />
          </div>
          <p className="text-gray-800 text-lg leading-relaxed">
            When you Sign Up with us, you get access to all our amazing
            products, both for your personal use and for resale as a
            vendor/agent.
            <br />
            <br />
            We particularly invite you to go from just a regular user to a
            vendor and earn as much as you can with revolutionary training and
            marketing support from our team of experts to ensure you outdo your
            competitors and maximize market opportunities.
          </p>

          <button
            onClick={handleToggle}
            aria-expanded={isExpanded}
            aria-controls="vendor-privileges"
            className="text-white w-fit bg-primary font-bold px-4 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {isExpanded
              ? "Click to Close Privileges -"
              : "Click to View Vendors Privileges +"}
          </button>
          <div
            id="vendor-privileges"
            className={`toggle-item transition-all duration-300 overflow-hidden ${
              isExpanded ? "max-h-screen" : "max-h-0"
            }`}
            aria-live="polite"
          >
            {isExpanded && (
              <ul className=" text-gray-800 space-y-2 pl-6 list-disc">
                <li>FREE Promotional Flyer design</li>
                <li>FREE Ads/Sales Copy</li>
                <li>60% Discount on optional branding of business accounts</li>
                <li>Weekly Webinars on BUSINESS, MARKETING & INVESTMENT</li>
                <li>
                  24/7 WhatsApp Community for Updates, Support, and Interactions
                </li>
                <li>Monthly Cash Gift for top 3 Vendors</li>
                <li>20% Discounts on registration of business name with CAC</li>
              </ul>
            )}
          </div>

          {/* Call to Action Button */}
          <a
            href="#join"
            className="text-white w-fit bg-secondary px-6 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 mx-auto lg:mx-0"
            aria-label="Join Us to explore subscription services"
          >
            Get Started
          </a>
        </article>

        {/* Image */}
        <img
          src="./join 1.png"
          alt="Promotional image for VTU services"
          className="h-48 lg:h-62 w-auto object-cover rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export const Banner = () => {
  return (
    <section
      className="h-fit w-full bg-white bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url('./bann.jpg')` }}
      role="banner"
    >
      <div className="w-11/12 lg:w-4/6 mx-auto flex flex-col lg:flex-row items-center gap-6">
        {/* Banner Image */}
        <img
          src="./Banner.png"
          alt="Person using a phone with online subscription services"
          className="h-48 lg:h-96 mt-6 lg:mt-0 w-auto object-cover"
        />

        {/* Banner Content */}
        <div className="flex flex-col items-start text-center lg:text-left gap-4">
          <h1 className="text-4xl w-full lg:text-6xl text-secondary font-bold ">
            Stay Connected
          </h1>
          <p className="text-gray-800 text-lg lg:text-xl">
            With instant data, airtime, TV, electricity bill subscriptions, and
            more...
          </p>
          <a
            href="#join"
            className="text-white mb-12 lg:mb-0 lg:mx-0 mx-auto bg-secondary px-6 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            aria-label="Join Us to explore subscription services"
          >
            Join Us
          </a>
        </div>
      </div>
    </section>
  );
};

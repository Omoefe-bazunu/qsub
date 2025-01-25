export const About = () => {
  return (
    <section
      id="about"
      className="w-full h-auto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('./abtbg.jpg')` }}
      aria-labelledby="about-heading"
    >
      <div className="wrapper flex flex-col lg:flex-row items-center mx-auto w-4/6 py-12 gap-8">
        {/* Text Content */}
        <article className="flex flex-col gap-4 text-left">
          <div>
            <h2
              id="about-heading"
              className="text-xl lg:text-2xl text-white font-bold"
            >
              About Us
            </h2>
            <hr className="w-12 h-0.5 bg-white" />
          </div>
          <p className="text-white text-lg leading-relaxed ">
            We are a value-driven start-up committed to simplifying your
            everyday needs by providing instant and reliable services for
            airtime top-ups, internet subscriptions, cable TV payments, and
            electricity bill settlements.
            <br />
            <br />
            Our platform is designed to offer convenience, security, and
            efficiency, ensuring you can complete all your transactions anytime,
            anywhere, with speed.
          </p>
        </article>

        {/* YouTube Embed */}
        <iframe
          className="h-48 lg:h-62 w-auto rounded-lg shadow-md"
          src="https://www.youtube.com/embed/u8yjBqzH52A"
          title="About Us Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

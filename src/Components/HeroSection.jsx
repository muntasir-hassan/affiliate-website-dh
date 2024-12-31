function HeroSection() {
  return (
    <div className="sm:h-screen flex flex-col px-5 mt-10 sm:px-8 md:flex-row-reverse md:items-center md:mt-0 lg:mx-40 lg:px-0 max-sm:mb-10">
      <div className="md:w-2/4 flex justify-center items-center">
        <img
          src="/download.png"
          className="w-full max-w-[450px]"
          alt="A men explaining which something"
        ></img>
      </div>
      <div className="flex flex-col gap-2 md:w-2/4">
        <h1 className="text-white selection:bg-white">
          Buy domain and hosting in bangladesh with bkash
        </h1>
        <h2 className="text-4xl font-sans lg:text-5xl xl:text-6xl">
          Get the Perfect Domain and Hosting
        </h2>
        <p className="font-serif lg:text-lg">
          Secure a premium domain and reliable hosting to boost your online
          presence. Start or grow your brand with ease.
        </p>
        <a
          href="https://www.hostseba.com/aff.php?aff=1074"
          className="bg-[#1062fe] text-white w-24 px-2 py-3 font-mono font-semibold rounded-md"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}

export default HeroSection;

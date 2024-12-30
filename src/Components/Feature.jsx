function Feature() {
  return (
    <div className=" mb-20 mt-10 flex flex-col px-5 gap-4 md:grid grid-cols-2 lg:grid-cols-3 md:items-center md:justify-center md:px-10 lg:px-14">
      <div className="w-[300px] ">
        <div className="w-64 h-64 flex justify-center items-center">
          {" "}
          <img
            src="/customer-service.png"
            alt="A women is on call with a domain buyer from bangladesh"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold">Live support</h3>
          <p>
            We provide office hours live chat support via facebook messenger,
            whatsapp, live chat, Call Support. Speak to our staff live in
            (GMT+6) 10AM - 9PM, 24/7 Ticket support and they will be happy to
            help.
          </p>
        </div>
      </div>

      <div className="w-[300px]">
        <div className="w-64 h-64 flex justify-center items-center">
          <img
            src="/a-person-searching-best-domain-and-hosting-in-bd.png"
            alt="A man explaining his client which hosting to buy"
          ></img>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            Best Domain and Hosting Provider in BD
          </h3>
          <p>
            We provide high quality hosting also. Buy domain and you can pair up
            with hosting also.
          </p>
        </div>
      </div>

      <div className="w-[300px]">
        <div className="w-64 h-64 flex justify-center items-center">
          <img
            src="/ebkash.png"
            alt="This image is reffering to you can buy domain and hosting with bkash and nagad"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold">Pay on Bkash</h3>
          <p>
            We also accept payment trough Baksh and Rocket. Which are most used
            money trasition method used in Bangladesh.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feature;

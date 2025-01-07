function Contact() {
  const handleWhatsappClick = () => {
    window.location.href = "https://wa.link/dmv3hy";
  };

  const handleImessageClick = () => {
    window.location.href = "sms:+19293770976";
  };

  return (
    <div class="flex flex-row w-full items-center md:justify-center gap-5 py-3">
      <article>
        <div class="flex flex-col items-center justify-center gap-5 px-9 py-5 max-w-md">
          <h2 class="text-black text-xl font-medium font-Poppins">
            Amazing benefits!
          </h2>
          <p class="text-justify items-center text-sm font-Poppins text-wrap md:text-md">
            Choose us for exceptional cleaning tailores to New Yorkes. Our
            trained and professional team ensure a spotless, safe home. Enjoy
            flexible scheduling, customized plans, same-day cleaning and
            reliable services. Trust us to transform your space.
          </p>
          <div class="flex flex-row items-start gap-3 text-xl font-semibold text-[#aae858] font-Poppins">
            <h3>Send us a message!</h3>
            <div
              onClick={handleWhatsappClick}
              class="bg-[url('/Users/gabrielgonzales/Documents/sparkle-cleaners/sparklecleanersnyc/src/assets/whatsapp_logo.png')] bg-cover bg-no-repeat size-7"
            ></div>
            <div
              onClick={handleImessageClick}
              class="bg-[url('/Users/gabrielgonzales/Documents/sparkle-cleaners/sparklecleanersnyc/src/assets/messages_logo.jpeg')] bg-cover bg-no-repeat size-7"
            ></div>
          </div>
        </div>
      </article>
      <div class="bg-[url('/Users/gabrielgonzales/Documents/sparkle-cleaners/sparklecleanersnyc/src/assets/man.jpg')] bg-cover bg-no-repeat h-72 w-64 hidden md:block"></div>
    </div>
  );
}

export default Contact;

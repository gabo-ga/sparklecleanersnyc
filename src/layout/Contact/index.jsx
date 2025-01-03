function Contact() {
  return (
    <article>
      <div class="flex flex-col items-center justify-center gap-5 px-9 py-5">
        <h2 class="text-black text-xl font-medium font-Poppins">
          Amazing benefits!
        </h2>
        <p class="text-justify items-center text-sm font-Poppins">
          Choose us for exceptional cleaning tailores to New Yorkes. Our trained
          and professional team ensure a spotless, safe home. Enjoy flexible
          scheduling, customized plans, same-day cleaning and reliable services.
          Trust us to transform your space.
        </p>
        <div class="flex flex-row items-start gap-5 text-xl font-semibold text-[#aae858] font-Poppins">
          <h3>Send us a message!</h3>
          <img
            src="/Users/gabrielgonzales/Documents/sparkle-cleaners/sparklecleanersnyc/src/assets/whatsapp_logo.png"
            alt="whatsapp logo"
            width="30"
            height="30"
          />

          <img
            src="./images/messages_logo.jpeg"
            alt="messages logo"
            width="30"
            height="30"
          />
        </div>
      </div>
    </article>
  );
}

export default Contact;

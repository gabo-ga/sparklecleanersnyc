function Contact() {
  return (
    <article>
      <div class="flex flex-col items-center justify-center gap-5 px-9 py-5">
        <h2 class="text-black text-3xl font-medium">Amazing benefits!</h2>
        <p class="text-justify items-center text-lg">
          Choose us for exceptional cleaning tailores to New Yorkes. Our trained
          and professional team ensure a spotless, safe home. Enjoy flexible
          scheduling, customized plans, same-day cleaning and reliable services.
          Trust us to transform your space.
        </p>
        <div class="flex flex-row items-start gap-5 text-2xl font-semibold text-[#aae858]">
          <h3>Send us a message!</h3>
          <img
            src="./images/whatsapp_logo.png"
            alt="whatsapp logo"
            width="50"
            height="50"
          />

          <img
            src="./images/messages_logo.jpeg"
            alt="messages logo"
            width="50"
            height="50"
          />
        </div>
      </div>
    </article>
  );
}

export default Contact;

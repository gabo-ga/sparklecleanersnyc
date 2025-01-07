function Footer() {
  return (
    <footer>
      <div class="px-11 py-3 flex flex-col items-start bg-sky-900 w-screen">
        <div class="flex flex-row items-center gap-2 text-white text-md">
          <div class="stroke-white bg-[url('/Users/gabrielgonzales/Documents/sparkle-cleaners/sparklecleanersnyc/src/assets/Logo.svg')] bg-cover bg-no-repeat h-8 w-5 md:h-10 md:w-8"></div>
          <h2 class="text-sm font-Poppins md:text-lg">Sparkle Cleaners nyc</h2>
        </div>
        {/*<h3 class="text-white text-md font-normal">Sparkle Cleaners nyc</h3>*/}
        <h3 class="text-slate-300 text-xs font-Poppins md:text-lg">
          50-28 61st Street
        </h3>
        <h3 class="text-slate-300 text-xs font-Poppins md:text-lg">
          Woodside, NY 11377
        </h3>
        <p class="text-slate-400 text-xs font-Poppins md:text-lg">
          (929) 377-0976
        </p>
      </div>
    </footer>
  );
}

export default Footer;

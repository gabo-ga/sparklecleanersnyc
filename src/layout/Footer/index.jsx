function Footer() {
  return (
    <footer>
      <div class="px-11 py-3 flex flex-col items-start bg-sky-900 w-screen">
        <div class="flex flex-row gap-2 text-white text-md">
          <img src="./images/Logo.svg" alt="logo" />
          <h2 class="text-md font-Poppins">Sparkle Cleaners nyc</h2>
        </div>
        {/*<h3 class="text-white text-md font-normal">Sparkle Cleaners nyc</h3>*/}
        <h3 class="text-slate-300 text-xs font-Poppins">50-28 61st Street</h3>
        <h3 class="text-slate-300 text-xs font-Poppins">Woodside, NY 11377</h3>
        <p class="text-slate-400 text-xs font-Poppins">(929) 377-0976</p>
      </div>
    </footer>
  );
}

export default Footer;

function Logo() {
  return (
    <div class="flex items-start">
      <div class="flex items-center gap-2 py-0 px-2.5 h-9" id="logo">
        <img
          src="../src/assets/Logo.svg"
          alt="logo"
          width="70"
          height="100"
          class="header__nav-bar__logo"
        />
        <h1 class="text-white text-base font font-medium">
          Spark Cleaners nyc
        </h1>
      </div>
    </div>
  );
}

export default Logo;

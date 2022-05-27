function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-wrapper flex justify-between items-center min-h-[70px] ">
        <div className="nav-logo text-white">
          <a href="#" className="main-logo__link text-[28px]">
            CONCERT CLUB
          </a>
        </div>
        <div className="nav-menu flex justify-between 2xl:w-[44%] text-xl xl:w-[40%]">
          <a
            href="#"
            className="nav-menu__links 2xl:py-[11px] px-[37px] bg-white hover:scale-[90%] text-[18px] transition-transform ease-linear xl:py-[10px] px-[30px] text-[14px]"
          >
            Версия для слабовидящих
          </a>
          <a
            href="#"
            className="nav-menu__links 2xl:py-[11px] px-[37px] bg-white hover:scale-[90%] text-[18px] transition-transform ease-linear xl:py-[10px] px-[30px] text-[14px]"
          >
            Мой профиль
          </a>
        </div>
      </div>
    </nav>
  );
}

export { NavBar };

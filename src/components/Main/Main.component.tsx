import { NavBar } from "../NavBar/NavBar.component";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import PageBg from "../../assets/images/bg/main-bg.svg";
import "./Main.style.sass";
function Main() {
  return (
    <main className="main min-h-screen relative z-10 2xl: flex justify-end flex-col xl:">
      <div className="container main-content flex flex-col justify-between text-white pb-[45px] basis-[437px]">
        <div className="">
          <h1 className="main-content__title text-center text-[50px]">
            <strong>Twenty One Pilots </strong>
          </h1>
          <p className="main-content__time text-center text-[30px]">
            <strong>22.02.23 в 21:00</strong>
          </p>
        </div>
        <div className="main-form flex justify-between items-center">
          <button className="main-form__left scroll-btns  ease-linear duration-400 hover:active-content__btn">
            <BsChevronLeft />
          </button>
          <button className="main-form__book book__btn hover:scale-[1.2] ease-linear duration-200">
            Купить билет
          </button>
          <button className="main-form__right scroll-btns  ease-linear duration-400 hover:active-content__btn  ">
            <BsChevronRight />
          </button>
        </div>
      </div>
      <img
        src={PageBg}
        alt=""
        className="absolute z-[-1] w-[100%] max-h-[100%] object-cover aspect-video"
      />
    </main>
  );
}

export { Main };

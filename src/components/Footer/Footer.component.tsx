import "./Footer.style.sass";
import { BtnTemplate } from "../Templates/Templates.component";

function Footer() {
  return (
    <footer className="footer pb-[38px]">
      <div className="container ">
        <div className="flex justify-between flex-wrap text-black items-start my-14 ">
          <div className="footer-about">
            <h4 className="footer-about__header text-[35px]">
              <strong>О площадке</strong>
            </h4>
            <div className="footer-full border-r-slate-600 border-l-2 pl-[45px] max-w-md mt-4">
              <p className="footer-full__concept mb-5">
                <strong>
                  Современная площадка для проведения концертов и других
                  мероприятий любой сложности.
                </strong>
              </p>
              <div
                className="footer-full__capability text-gray-400 text-lg
              "
              >
                <strong>
                  Мы предоставляем всю необходимую для организаторов
                  инфраструктуру и готовые решения под все основные задачи
                  любого события, а также современное оборудование,
                  соответствующее самым высоким мировым стандартам.
                </strong>
              </div>
            </div>
          </div>
          <form
            className="footer-contact border-2 border-gray-400 min-w-[300px] w-[560px] py-[13px] px-[26px] flex flex-col items-start justify-between"
            action="#"
          >
            <h4 className="footer-contact__header text-lg">
              <strong>Оставить заявку на проведение концерта</strong>
            </h4>
            <textarea
              name="form-contact__textarea"
              className="footer-contact__field border-[1px] border-black my-[25px] py-1 px-1 max-w-full block"
              id="get-in-touch"
              rows={6}
              cols={100}
              placeholder="Расскажите о вашем предложении"
            />
            <BtnTemplate className="footer-contact__submit self-end">
              Отправить
            </BtnTemplate>
          </form>
        </div>
        <div className="footer-copyright flex justify-between flex-wrap">
          <h4 className="footer-copyright__header text-4xl">
            <strong>О группе</strong>
          </h4>
          <p className="footer-copyright__subtitle text-gray-400 text-xl gap-x-4 max-w-[80%]">
            Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо.
            Группа образовалась в 2009 году и на данный момент состоит из
            Тайлера Джозефа и Джоша Дана. Коллектив самостоятельно выпустил два
            альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

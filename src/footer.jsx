import React from "react";
import logo from "./assets/logo.svg";
import image5 from "./assets/image5.png";

function Footerr() {
  return (
    <div>
      <footer className="px-[10px] md:px-[40px] lg:px-[90px] xl:px-[129px] py-[20px] xl:pb-[110px] xl:pt-[34px] bg-[#F8F8F9] flex flex-col md:flex-row md:justify-between gap-[20px]">
        <div className="flex flex-col gap-[20px] items-start md:w-[290px] xl:w-[332px]">
          <img src={logo} alt="" />
          <p>
            SMMFLOW - ведущий сервис на рынке продвижения в социальных сетях. За
            счет низких цен и высокого качества выполнения услуг сервис является
            незаменимым для большинства наших клиентов со всего мира.
          </p>
          <img src={image5} alt="" />
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-[30px] xl:gap-[107px]">
          <div className="flex flex-col gap-[12px]">
            <p>Каталог услуг</p>
            <p>Преимущества</p>
            <p>Отзывы</p>
          </div>
          <div className="flex flex-col gap-[12px]">
            <p>Политика конфиденциальности</p>
            <p>Публичная оферта</p>
            <p>Пользовательское соглашение</p>
            <p>Правила сервиса</p>
            <p>Контакты</p>
          </div>
          <div className=" flex flex-col gap-[12px]">
            <p className="text-base font-medium">Нужна помощь?</p>
            <a className="w-[140px] h-[48px] bg-[#EBEBEB] flex justify-center items-center">
              Онлайн-чат
            </a>
            <p>support@smmflow.net</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footerr;

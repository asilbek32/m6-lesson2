import React from "react";
import insta from "./assets/instagram.svg";
import right from "./assets/right.png";
import eee from "./assets/73x73.png";
import ddd from "./assets/div.png";
import image5 from "./assets/image6.png";
import saly2 from "./assets/Saly-2.png";
import vector from "./assets/Vector.png";
import './sections.css'

function Sections() {
  return (
    <div>
      <section className="bg-[#0058FF] px-[10px] py-[30px] md:px-[40px] lg:px-[90px] xl:px-[129px] mb-[40px]">
        <h2 className="text-[22px] xl:text-4xl text-[#FFFFFF] text-center font-semibold mb-[30px]">
          Быстрый заказ
        </h2>
        <div className="scrol_hidden flex items-center justify-between gap-6 xl:gap-x-[20px] bg-white p-2 rounded-lg max-w-full mb-[8px]">
          <button className="flex items-center gap-1 pr-[10px]">
            <img src={insta} alt="" className="w-5 h-5" />
            <span>Instagram</span>
          </button>

          <button className="flex items-center gap-1 pr-[10px]">
            <img src={insta} alt="" className="w-5 h-5" />
            <span>VK</span>
          </button>
          <button className="flex items-center gap-1 pr-[10px]">
            <img src={insta} alt="" className="w-5 h-5" />
            <span>Telegram</span>
          </button>

          <button className="flex items-center gap-1 pr-[10px]">
            <img src={insta} alt="" className="w-5 h-5" />
            <span>TikTok</span>
          </button>

          <button className="flex items-center gap-1 pr-[10px]">
            <img src={insta} alt="" className="w-5 h-5" />
            <span>YouTube</span>
          </button>

          <button className="flex items-center gap-1 pr-[10px]">
            <img src={insta} alt="" className="w-5 h-5" />
            <span>TikTok</span>
          </button>

          <button className="flex items-center gap-1 pr-[10px]">
            <img src={insta} alt="" className="w-5 h-5" />
            <span>YouTube</span>
          </button>

          <button className="flex items-center gap-1 pr-[10px]">
            <img src={insta} alt="" className="w-5 h-5" />
            <span>YouTube</span>
          </button>
          <button className="flex items-center gap-1 pr-[10px]">
            <img src={insta} alt="" className="w-5 h-5" />
            <span>YouTube</span>
          </button>

          <img src={right} className="w-4 h-4 ml-2" alt="Arrow Right" />
        </div>
        <div className="className_grid grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5  gap-[8px]">
          <div className="flex flex-col items-center justify-center gap-[6px] lg:gap-[12px]   w-[118px] md:w-[140px] lg:w-[160px] lg:h-[130px] xl:w-[220px] xl:h-[170px] rounded-lg bg-white py-[29px]">
            <img src={insta} alt="" />
            <span>Подписчики</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-[6px] lg:gap-[12px]   w-[118px] md:w-[140px] lg:w-[160px] lg:h-[130px] xl:w-[220px] xl:h-[170px] rounded-lg bg-white py-[29px]">
            <img src={insta} alt="" />
            <span>Подписчики</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-[6px] lg:gap-[12px]   w-[118px] md:w-[140px] lg:w-[160px] lg:h-[130px] xl:w-[220px] xl:h-[170px] rounded-lg bg-white py-[29px]">
            <img src={insta} alt="" />
            <span>Подписчики</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-[6px] lg:gap-[12px]   w-[118px] md:w-[140px] lg:w-[160px] lg:h-[130px] xl:w-[220px] xl:h-[170px] rounded-lg bg-white py-[29px]">
            <img src={insta} alt="" />
            <span>Подписчики</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-[6px] lg:gap-[12px]   w-[118px] md:w-[140px] lg:w-[160px] lg:h-[130px] xl:w-[220px] xl:h-[170px] rounded-lg bg-white py-[29px]">
            <img src={insta} alt="" />
            <span>Подписчики</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-[6px] lg:gap-[12px]   w-[118px] md:w-[140px] lg:w-[160px] lg:h-[130px] xl:w-[220px] xl:h-[170px] rounded-lg bg-white py-[29px]">
            <img src={insta} alt="" />
            <span>Подписчики</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-[6px] lg:gap-[12px]   w-[118px] md:w-[140px] lg:w-[160px] lg:h-[130px] xl:w-[220px] xl:h-[170px] rounded-lg bg-white py-[29px]">
            <img src={insta} alt="" />
            <span>Подписчики</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-[6px] lg:gap-[12px]   w-[118px] md:w-[140px] lg:w-[160px] lg:h-[130px] xl:w-[220px] xl:h-[170px] rounded-lg bg-white py-[29px]">
            <img src={insta} alt="" />
            <span>Подписчики</span>
          </div>
          <div className="xl:flex flex-col items-center justify-center gap-[6px] lg:gap-[12px]   w-[118px] md:w-[140px] lg:w-[160px] lg:h-[130px] xl:w-[220px] xl:h-[170px] rounded-lg bg-white py-[29px] hidden">
            <img src={insta} alt="" />
            <span>Подписчики</span>
          </div>
        </div>
      </section>

      <section className="mb-[40px]">
            <h2 className="text-[22px] xl:text-4xl text-[#000000] font-semibold text-center mb-[30px]">Отзывы клиентов</h2>
            <div className="scrol_hidden flex  gap-[16px] lg:gap-x-[24px] xl:gap-x-[30px] ">
                <div className=" min-w-[260px] xl:w-[323px]  px-[16px] pt-[30px] pb-[12px] xl:p-[30px] bg-[#F8F8F9]">
                    <div className="flex gap-x-[10px] mb-[14px] lg:mb-[20px] xl:mb-[28px]">
                        <img src={eee} alt=""/>
                        <div className="flex flex-col gap-[6px]">
                            <h5>Анна</h5>
                            <img src={ddd} alt=""/>
                        </div>
                    </div>
                    <p className="text-base xl:text-[18px] text-[#5F5F66] font-normal">Я не ожидала, что продвижение в
                        Instagram может быть таким простым. Заказала подписчиков через
                        SMMFLOW и очень довольна результатом.</p>
                </div>
                <div className=" min-w-[260px] xl:w-[323px]  px-[16px] pt-[30px] pb-[12px] xl:p-[30px] bg-[#F8F8F9]">
                    <div className="flex gap-x-[10px] mb-[14px] lg:mb-[20px] xl:mb-[28px]">
                        <img src={eee} alt=""/>
                        <div className="flex flex-col gap-[6px]">
                            <h5>Анна</h5>
                            <img src={ddd} alt=""/>
                        </div>
                    </div>
                    <p className="text-base xl:text-[18px] text-[#5F5F66] font-normal">Я не ожидала, что продвижение в
                        Instagram может быть таким простым. Заказала подписчиков через
                        SMMFLOW и очень довольна результатом.</p>
                </div>
                <div className=" min-w-[260px] xl:w-[323px]  px-[16px] pt-[30px] pb-[12px] xl:p-[30px] bg-[#F8F8F9]">
                    <div className="flex gap-x-[10px] mb-[14px] lg:mb-[20px] xl:mb-[28px]">
                        <img src={eee} alt=""/>
                        <div className="flex flex-col gap-[6px]">
                            <h5>Анна</h5>
                            <img src={ddd} alt=""/>
                        </div>
                    </div>
                    <p className="text-base xl:text-[18px] text-[#5F5F66] font-normal">Я не ожидала, что продвижение в
                        Instagram может быть таким простым. Заказала подписчиков через
                        SMMFLOW и очень довольна результатом.</p>
                </div>
                <div className=" min-w-[260px] xl:w-[323px]  px-[16px] pt-[30px] pb-[12px] xl:p-[30px] bg-[#F8F8F9]">
                    <div className="flex gap-x-[10px] mb-[14px] lg:mb-[20px] xl:mb-[28px]">
                        <img src={eee} alt=""/>
                        <div className="flex flex-col gap-[6px]">
                            <h5>Анна</h5>
                            <img src={ddd} alt=""/>
                        </div>
                    </div>
                    <p className="text-base xl:text-[18px] text-[#5F5F66] font-normal">Я не ожидала, что продвижение в
                        Instagram может быть таким простым. Заказала подписчиков через
                        SMMFLOW и очень довольна результатом.</p>
                </div>
                <div className=" min-w-[260px] xl:w-[323px]  px-[16px] pt-[30px] pb-[12px] xl:p-[30px] bg-[#F8F8F9]">
                    <div className="flex gap-x-[10px] mb-[14px] lg:mb-[20px] xl:mb-[28px]">
                        <img src={eee} alt=""/>
                        <div className="flex flex-col gap-[6px]">
                            <h5>Анна</h5>
                            <img src={ddd} alt=""/>
                        </div>
                    </div>
                    <p className="text-base xl:text-[18px] text-[#5F5F66] font-normal">Я не ожидала, что продвижение в
                        Instagram может быть таким простым. Заказала подписчиков через
                        SMMFLOW и очень довольна результатом.</p>
                </div>
                <div className=" min-w-[260px] xl:w-[323px]  px-[16px] pt-[30px] pb-[12px] xl:p-[30px] bg-[#F8F8F9]">
                    <div className="flex gap-x-[10px] mb-[14px] lg:mb-[20px] xl:mb-[28px]">
                        <img src={eee} alt=""/>
                        <div className="flex flex-col gap-[6px]">
                            <h5>Анна</h5>
                            <img src={ddd} alt=""/>
                        </div>
                    </div>
                    <p className="text-base xl:text-[18px] text-[#5F5F66] font-normal">Я не ожидала, что продвижение в
                        Instagram может быть таким простым. Заказала подписчиков через
                        SMMFLOW и очень довольна результатом.</p>
                </div>
                <div className=" min-w-[260px] xl:w-[323px]  px-[16px] pt-[30px] pb-[12px] xl:p-[30px] bg-[#F8F8F9]">
                    <div className="flex gap-x-[10px] mb-[14px] lg:mb-[20px] xl:mb-[28px]">
                        <img src={eee} alt=""/>
                        <div className="flex flex-col gap-[6px]">
                            <h5>Анна</h5>
                            <img src={ddd} alt=""/>
                        </div>
                    </div>
                    <p className="text-base xl:text-[18px] text-[#5F5F66] font-normal">Я не ожидала, что продвижение в
                        Instagram может быть таким простым. Заказала подписчиков через
                        SMMFLOW и очень довольна результатом.</p>
                </div>
                <div className=" min-w-[260px] xl:w-[323px]  px-[16px] pt-[30px] pb-[12px] xl:p-[30px] bg-[#F8F8F9]">
                    <div className="flex gap-x-[10px] mb-[14px] lg:mb-[20px] xl:mb-[28px]">
                        <img src={eee} alt=""/>
                        <div className="flex flex-col gap-[6px]">
                            <h5>Анна</h5>
                            <img src={ddd} alt=""/>
                        </div>
                    </div>
                    <p className="text-base xl:text-[18px] text-[#5F5F66] font-normal">Я не ожидала, что продвижение в
                        Instagram может быть таким простым. Заказала подписчиков через
                        SMMFLOW и очень довольна результатом.</p>
                </div>
                <div className=" min-w-[260px] xl:w-[323px]  px-[16px] pt-[30px] pb-[12px] xl:p-[30px] bg-[#F8F8F9]">
                    <div className="flex gap-x-[10px] mb-[14px] lg:mb-[20px] xl:mb-[28px]">
                        <img src={eee} alt=""/>
                        <div className="flex flex-col gap-[6px]">
                            <h5>Анна</h5>
                            <img src={ddd} alt=""/>
                        </div>
                    </div>
                    <p className="text-base xl:text-[18px] text-[#5F5F66] font-normal">Я не ожидала, что продвижение в
                        Instagram может быть таким простым. Заказала подписчиков через
                        SMMFLOW и очень довольна результатом.</p>
                </div>
                
                
            </div>
        </section>

        <section className="md:px-[40px] lg:px-[90px] xl:px-[129px] mb-[40px]">
            <div
                className="bg-[#0058FF] px-[10px] flex justify-between items-center py-[24px] relative sm:px-[25px] md:px-[45px] lg:px-[80px] xl:px-[105px] md:rounded-[40px]">
                <div>
                    <h2
                        className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white font-semibold mb-[18px] lg:mb-[20px] max-w-[236px] md:max-w-[380px] lg:max-w-[499px]">
                        Скидки до 50%
                        в нашем телеграм-канале</h2>
                    <p
                        className="text-base md:text-lg font-normal text-[#FFFFFF] mb-[18px] lg:mb-[30px] max-w-[277px] md:max-w-[380px] lg:max-w-[499px]">
                        Раздаем промокоды в Telegram
                        каждую неделю</p>
                    <button className="w-[207px] h-[48px] bg-[#2C75FF] text-[#FFFFFF] rounded-[10px]">Получить
                        промокод</button>
                </div>

                <img src={image5} alt="" className=" sm:static absolute right-0 bottom-0 md:hidden"/>
                <img src={saly2} alt="" className="hidden md:block"/>
            </div>
        </section>

      <section className="px-[10px] mb-[60px] lg:mb-[80px] md:px-[40px] lg:px-[90px] xl:px-[129px]">
            <h2 className="text-[22px] xl:text-4xl text-[#000000] font-semibold text-center mb-[30px]">Частые вопросы</h2>
            <div className="grid grid-cols-1 gap-[6px] lg:grid-cols-2  lg:gap-x-[30px] lg:gap-y-[14px]">
                <div className="flex justify-between items-center px-[14px] py-[17px] bg-[#F8F8F9] rounded-[10px]">
                    <h5 className="text-base font-medium">Почему цены на ваши услуги ниже, чем у конкурентов?</h5>
                    <img src={vector} alt=""/>
                </div>
                <div className="flex justify-between items-center px-[14px] py-[17px] bg-[#F8F8F9] rounded-[10px]">
                    <h5 className="text-base font-medium">Как вы гарантируете качество услуг?</h5>
                    <img src={vector} alt=""/>
                </div>
                <div className="flex justify-between items-center px-[14px] py-[17px] bg-[#F8F8F9] rounded-[10px]">
                    <h5 className="text-base font-medium">Как я могу узнать о статусе моего заказа?</h5>
                    <img src={vector} alt=""/>
                </div>
                <div className="flex justify-between items-center px-[14px] py-[17px] bg-[#F8F8F9] rounded-[10px]">
                    <h5 className="text-base font-medium">Как быстро выполняется заказ?</h5>
                    <img src={vector} alt=""/>
                </div>
                <div className="flex justify-between items-center px-[14px] py-[17px] bg-[#F8F8F9] rounded-[10px]">
                    <h5 className="text-base font-medium">Какие способы оплаты вы принимаете?</h5>
                    <img src={vector} alt=""/>
                </div>
                <div className="flex justify-between items-center px-[14px] py-[17px] bg-[#F8F8F9] rounded-[10px]">
                    <h5 className="text-base font-medium">Меня не заблокируют?</h5>
                    <img src={vector} alt=""/>
                </div>
                <div className="flex justify-between items-center px-[14px] py-[17px] bg-[#F8F8F9] rounded-[10px]">
                    <h5 className="text-base font-medium">Как я могу связаться с вами?</h5>
                    <img src={vector} alt=""/>
                </div>
                <div className="flex justify-between items-center px-[14px] py-[17px] bg-[#F8F8F9] rounded-[10px]">
                    <h5 className="text-base font-medium">Что произойдет, если мои подписчики или лайки уйдут?</h5>
                    <img src={vector} alt=""/>
                </div>
            </div>

        </section>
    </div>
  );
}

export default Sections;

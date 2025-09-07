import React from 'react'
import slay from './assets/saly.png'
import mobileslay from './assets/mobileslay.png'
function Hero() {
  return (
    <div>
        <main
            class="flex flex-col items-center md:flex-row md:justify-between py-[60px] md:py-[50px] md:px-[40px] lg:px-[90px] xl:px-[129px]">
            <div class="max-w-[508px]">
                <h1
                    class="text-[28px] md:text-3xl lg:text-4xl xl:text-[46px] font-semibold text-center md:text-start lg:w-[629px] mb-[20px] md:mb-[25px]">
                    Продвижение во всех соцсетях за пару кликов
                </h1>
                <div class="flex justify-center md:justify-start mb-[20px] md:mb-[35px]">
                    <p class="text-base md:text-[xl] text-center md:text-start w-[302px] lg:w-[685px] sm:w-[420px] ">
                        Получайте
                        подписчиков, лайки,
                        репосты, просмотры,
                        прослушивания и любую другую активность на свои
                        профили в социальных сетях по самым низким ценами на рынке и в самые быстрые сроки!</p>
                </div>
                <button class="w-[249px] h-[48px] rounded-md bg-[#1D4ED8] text-[#FFFFFF] md:block hidden">Начать
                    продвижение</button>
            </div>
           <img src={mobileslay} alt="" class="md:hidden"/>
            <div class="max-w-[508px] hidden md:block">
                <img src={slay} alt="" />
            </div>
            <button class="w-[219px] h-[48px] rounded-md bg-[#1D4ED8] text-[#FFFFFF] md:hidden">Начать
                продвижение</button>
        </main>
    </div>
  )
}

export default Hero
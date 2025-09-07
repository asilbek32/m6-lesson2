import React from 'react'
import logo from './assets/logo.svg'
import menu from './assets/menu.png'

function Header() {
  return (
    <div>
        <div class="shadow md:hidden flex justify-between h-[60px] items-center px-[10px]">
            <img src={logo} alt="" />
            <div class="flex gap-x-[20px]">

                <img src={menu} alt="" />
            </div>
        </div>

        <nav
            class="shadow md:flex justify-between items-center h-[80px] md:px-[40px] lg:px-[90px] xl:px-[129px] hidden">
            <div class="flex md:gap-x-[29px] lg:gap-x-[38px] items-center">
                <img src={logo} alt="" />
                <div class="flex gap-x-[20px] items-center">
                    <p class="text-base font-normal text-[#000000]">Услуги</p>
                    <p class="text-base font-normal text-[#000000]">Преимущества</p>
                    <p class="text-base font-normal text-[#000000]">Отзывы</p>
                </div>
            </div>
            <div class="flex gap-x-[30px] items-center">
                <a href="" class="text-base font-normal text-[#000000]">Войти</a>
                <button class="md:w-[140px] lg:w-[169px] h-[48px] bg-[#1D4ED8] text-[#FFFFFF] rounded-md">Быстрый
                    заказ</button>
            </div>
        </nav>
    </div>
  )
}

export default Header
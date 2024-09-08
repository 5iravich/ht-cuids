import React from 'react'
import { HT_MainNavBar } from "../components/HT_MainNavBar";

function HT_404() {
  return (
    <div className=''>
        <div className='fixed top-0 left-0 right-0 bottom-0 font-Prompt h-screen scroll-smooth overflow-y-auto bg-gradient-to-b from-white to-teal-100 dark:from-dark-main-stbg dark:to-dark-main-ndbg'>
            <HT_MainNavBar tabtitle ="" tabbg="" tabicon="" cicon=""/>
            <div className="flex flex-col items-center justify-center animate-fade-up animate-once">
              <div class="absolute top-0 left-64 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div class="absolute top-0 right-64 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div class="absolute -bottom-24 left-52 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <h1 className="text-[320px] font-bold animate-pulse animate-infinite animate-ease-in-out
                              bg-clip-text text-transparent bg-gradient-to-r from-light-main-stfont to-light-main-ndbg">404</h1>
                <p className="font-bold text-2xl -mt-14 mb-4 text-light-second-stfont dark:text-gray-400">PAGE NOT FOUND</p>
                <div className='p-4 w-[560px] mb-12 backdrop-blur-sm bg-teal-500/10 rounded-2xl'>
                  <a className="text-justify text-md text-light-second-stfont dark:text-gray-200">
                                <a className='font-bold'>ขออภัย !</a> ไม่พบหน้าที่คุณต้องการ โปรดตรวจสอบการสะกดลิงก์ URL และอื่น ๆ
                  </a>
                </div>
                <a href="/" className="px-5 py-2 text-sm font-bold text-white bg-light-main-stfont hover:bg-light-main-stfonthover rounded-full">
                    <i className='fas fa-arrow-left'/> กลับไปหน้าแรก
                </a>
            </div>

        </div>
    </div>
  )
}

export default HT_404
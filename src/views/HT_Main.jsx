import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import { HT_MainNavBar } from "../components/HT_MainNavBar";
import { HT_MainFooter } from "../components/HT_MainFooter";

function HT_Main() {

    return (
      <div className="">
        <div className='fixed top-0 left-0 right-0 bottom-0 font-Prompt h-screen scroll-smooth overflow-y-auto bg-gradient-to-b from-white to-teal-100 dark:from-dark-main-stbg dark:to-dark-main-ndbg'>
            <HT_MainNavBar tabtitle ="" tabbg="" tabicon="" cicon=""/>
            <div className="relative isolate px-3 lg:px-4">
              <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
              </div>
              <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-6 sm:flex sm:justify-center animate-fade animate-once animate-duration-[1800ms] animate-ease-in-out">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 dark:text-white/70 dark:hover:text-white/90 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-teal-700/30 dark:hover:ring-teal-700/50">
                    เตรียมจิตใจให้พร้อม ติดตามกิจกรรมต่อไปของเราในอนาคต <a href="#" className="font-semibold text-light-main-stfont dark:text-teal-400/50 dark:hover:text-teal-400/90">
                      <span className="absolute inset-0" aria-hidden="true"></span>อ่านเพิ่มเติม 
                      <span aria-hidden="true">&rarr;</span></a>
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="m-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white/90 sm:text-6xl
                                animate-fade-down animate-once animate-duration-[900ms] animate-ease-in-out">สุขภาพจิตเป็นสิ่งสำคัญ</h1>
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white/90 sm:text-6xl
                                animate-fade-down animate-once animate-duration-[1800ms] animate-ease-in-out">ให้เราเป็น <a> </a>
                    <TypeAnimation
                      sequence={[
                        'คนดูแลคุณ', 2000,
                        'ที่ระบายของคุณ', 2000,
                        'เราที่เข้าใจคุณ', 2000,
                        'ที่พึ่งให้แก่คุณ', 2000,
                        'คุณ', 2000,
                        'HT-CUID', 2000
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{ fontSize: '1em', display: 'inline-block', color: "teal" }}
                      repeat={Infinity}
                    />
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 animate-fade-down animate-once animate-duration-[3600ms] animate-ease-in-out">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a href="#" className="rounded-md bg-light-main-stfont px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-light-main-stfonthover
                                            animate-fade-up animate-once animate-duration-[600ms] animate-ease-in-out
                                            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">เริ่มต้นใช้งาน</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-500 hover:text-gray-900 dark:text-teal-400/50 dark:hover:text-teal-400/90
                                            animate-fade-up animate-once animate-duration-[1600ms] animate-ease-in-out">เรียนรู้เพิ่มเติม <span aria-hidden="true">→</span></a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            </div>
          </div>
            
            <div className='flex justify-between space-x-2'>
              <p></p>
            </div>
            <HT_MainFooter/>
        </div>
        </div>
    )
  }
  
  export default HT_Main
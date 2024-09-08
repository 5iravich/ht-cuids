import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { HT_MainNavBar } from "../components/HT_MainNavBar";

function HT_Devices() {

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 font-Prompt h-screen scroll-smooth overflow-y-auto bg-gradient-to-b from-white to-teal-100 dark:from-dark-main-stbg dark:to-dark-main-ndbg'>
            <HT_MainNavBar tabtitle ="" tabbg="" tabicon="" cicon=""/>
            <div>HT_Devices</div>
        </div>
    )
  }

export default HT_Devices
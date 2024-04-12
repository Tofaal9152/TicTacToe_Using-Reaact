import React from 'react'
import { useState } from 'react';
const TictacButton = ({ props,handlebtnClick }) => {
    
    return (
        <>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white w-[100px] h-[100px] text-[24px] border border-blue-500 hover:border-transparent rounded"
                onClick={handlebtnClick}
            ><span className='text-black'>.</span>{props}</button>


        </>
    )
}

export default TictacButton

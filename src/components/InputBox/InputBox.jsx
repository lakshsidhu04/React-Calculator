import React, { useState } from 'react'
import { useInputContext } from '../../contexts/inputContext'
function InputBox() {
    let { input } = useInputContext();
    return (
        <>
            <div className="">
                <input type="text" value={input || ''} className='bg-[#130A59] rounded-t-lg rounded-tr-lg h-14 min-w-80 text-white text-2xl text-right' readOnly />
            </div>
        </>
    )
}

export default InputBox
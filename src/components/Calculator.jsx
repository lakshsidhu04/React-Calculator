import React, { useState } from 'react'
import InputBox from './InputBox/InputBox'
import Input from './Button/Input';
import { InputContextProvider } from '../contexts/inputContext'
function Calculator() {

    let [input, setinput] = useState("0");



    return (
        <InputContextProvider value={{ input, setinput }}>
            <div className="flex w-fit rounded-lg h-full items-center justify-center bg-slate-500">
                <div className='flex flex-col items-center justify-normal'>
                    <InputBox />

                    <div className=" flex items-center justify-normal">
                        <Input type='button' label={"Clear"} hex={"bg-[#010101]"} />
                        <Input type='button' label={"Delete"} hex={"bg-[#010101]"} />
                        <Input type='button' label={"."} hex={"bg-[#010101]"} />
                        <Input type='button' label={"/"} hex={"bg-[#F6B327]"} />
                    </div>
                    <div className=" flex items-center justify-normal">
                        <Input type='button' label={"7"} hex={"bg-[#010101]"} />
                        <Input type='button' label={"8"} hex={"bg-[#010101]"} />
                        <Input type='button' label={"9"} hex={"bg-[#010101]"} />
                        <Input type='button' label={"*"} hex={"bg-[#F6B327]"} />
                    </div>
                    <div className=" flex items-center justify-normal">
                        <Input type='button' label={"4"} hex={'bg-[#010101]'} />
                        <Input type='button' label={"5"} hex={"bg-[#010101]"} />
                        <Input type='button' label={"6"} hex={"bg-[#010101]"} />
                        <Input type='button' label={"-"} hex={"bg-[#F6B327]"} />
                    </div>
                    <div className=" flex items-center justify-normal">
                        <Input type='button' label={"1"} hex={"bg-[#010101]"} />
                        <Input type='button' label={"2"} hex={"bg-[#010101]"} />
                        <Input type='button' label={"3"} hex={"bg-[#010101]"} />
                        <Input type='button' label={"+"} hex={"bg-[#F6B327]"} />
                    </div>
                    <div className=" flex items-center justify-normal">
                        <Input type='button' label={"0"} hex={"bg-[#010101]"} />
                        <Input type='button' label={"="} hex={"bg-[#244242]"} />
                    </div>
                </div>
            </div>
        </InputContextProvider>

    )
}

export default Calculator
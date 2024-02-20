import React from 'react'
import { useInputContext } from '../../contexts/inputContext'

function Input({ hex, label }) {
    let { input, setinput } = useInputContext()
    const handleClick = (e) => {
        let curr = e.target.value;
        switch (curr) {
            case '=': {
                setinput(eval(input));
                console.log(input)
                break;
            }

            case "Clear": {
                setinput("");
                console.log(input)
                break;
            }

            case "Delete": {
                setinput((prev) => prev.length === 0 ? "" : prev.substring(0, prev.length - 1))
                console.log(input)
                break;
            }

            default: {
                setinput((prev) => prev === "0" ? curr : prev + curr);
                console.log(input)
            }


        }
    }
    return (
        <input type="button" value={label} onClick={handleClick} className={`text-white rounded-full m-2 cursor-pointer flex w-12 h-12 min-w-fit items-center justify-center ${hex}`} />
    )
}

export default Input
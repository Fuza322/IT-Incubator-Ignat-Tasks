import React, {useState} from "react"
import {SuperRange} from "./common/c7-SuperRange/SuperRange"
import {SuperDoubleRange} from "./common/c8-SuperDoubleRange/SuperDoubleRange"
import style from "./HW11.module.css"

export function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    let value = [value1, value2]

    const onChangeRangeHandler = (newValue: number | number[]): void => {
        if (typeof newValue === "object") {
            setValue1(newValue[0])
            setValue2(newValue[1])
        }
    }

    return (
        <div>
            <hr/>
            homeworks 11:
            <div>
                <span>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    value={value1}
                    onChangeRange={setValue1}
                />
            </div>

            <div className={style.superDoubleRangeContainer}>
                <span>{value1}</span>
                <SuperDoubleRange
                    value={value}
                    onChangeRange={onChangeRangeHandler}
                />
                <span>{value2}</span>
            </div>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
        </div>
    )
}
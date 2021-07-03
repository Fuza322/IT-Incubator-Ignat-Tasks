import React, {useState} from "react"
import {SuperSelect} from "./common/c5-SuperSelect/SuperSelect"
import {SuperRadio} from "./common/c6-SuperRadio/SuperRadio"

const arr: Array<string> = ["x", "y", "z"]

export function HW7() {

    const [value, onChangeOption] = useState(arr[0])

    return (
        <div>
            <hr/>
            homeworks 7:
            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={"radio"}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
        </div>
    )
}
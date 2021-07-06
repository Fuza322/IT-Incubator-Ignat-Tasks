import React, {useState} from "react"
import {SuperEditableSpan} from "./common/c4-SuperEditableSpan/SuperEditableSpan"
import {SuperButton} from "../h4/common/c2-SuperButton/SuperButton"
import {saveState, restoreState} from "./localStorage/localStorage"
import style from "./HW6.module.css"

export function HW6() {

    const [value, setValue] = useState<string>(restoreState("editable-span-value", ""))

    const save = () => {
        /*const saveValue = */saveState<string>("editable-span-value", value)
        // setValue(saveValue)
    }

    const restore = () => {
        const restoreValue = restoreState("editable-span-value", value)
        setValue(restoreValue)
    }

    return (
        <div>
            <hr/>
            homeworks 6:
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : "enter text..."}}
                    className={style.inputSize}
                />
            </div>
            <SuperButton
                onClick={save}
                className={style.buttonSize}
            >save</SuperButton>
            <SuperButton
                onClick={restore}
                className={style.buttonSize}
            >restore</SuperButton>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
        </div>
    )
}
import React, {ChangeEvent, useState} from "react"
import {SuperInputText} from "./common/c1-SuperInputText/SuperInputText"
import {SuperButton} from "./common/c2-SuperButton/SuperButton"
import {SuperCheckbox} from "./common/c3-SuperCheckbox/SuperCheckbox"
import style from "./HW4.module.css"

export function HW4() {

    const [text, setText] = useState<string>("")
    const [checked, setChecked] = useState<boolean>(false)

    let red: boolean
    text ? red = false : red = true

    const error = text ? "" : "error"

    const showAlert = () => {
        if (error) {
            alert("введите текст...")
        } else {
            alert(text)
        }
    }

    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>
            <hr/>
            homeworks 4:
            <div className={style.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    className={style.inputSize}
                />
                <br/>
                <SuperButton
                    red={red}
                    onClick={showAlert}
                    className={style.buttonSize}
                >
                    delete
                </SuperButton>
                <br/>
                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    Some text
                </SuperCheckbox>
                <br/>
                <SuperCheckbox
                    checked={checked}
                    onChange={testOnChange}
                />
            </div>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    )
}
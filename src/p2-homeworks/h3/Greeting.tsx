import React from "react"
import {SuperButton} from "../h4/common/c2-SuperButton/SuperButton"
import {SuperInputText} from "../h4/common/c1-SuperInputText/SuperInputText"
import style from "./Greeting.module.css"

type GreetingPropsType = {
    name: string
    setNameCallback: (name: string) => void
    addUser: () => void
    error: boolean
    totalUsers: number
}

export const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {

    const errorMessage = error ? "Error!" : ""

    return (
        <div>
            <SuperInputText
                value={name}
                onChangeText={setNameCallback}
                onEnter={addUser}
                className={style.inputSize} // проверьте, рабоет ли смешивание классов
            />
            <SuperButton
                onClick={addUser}
                className={style.buttonSize}
            >
                add
            </SuperButton>
            <span>Total Users: {totalUsers}</span>
            <span className={style.errorMessage}>{errorMessage}</span>
        </div>
    )
}
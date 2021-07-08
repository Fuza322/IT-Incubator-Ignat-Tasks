import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {AppStoreType} from "../store/store"
import {changeThemeAC} from "./bll/themeReducer"
import {SuperSelect} from "../h7/common/c5-SuperSelect/SuperSelect"
import style from "./HW12.module.css"

const themes: Array<string> = ["dark", "red", "some"]

export function HW12() {

    const dispatch = useDispatch()
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)

    const onChangeCallback = (option: string) => {
        dispatch(changeThemeAC(option))
    }

    return (
        <div className={style[theme]} style={{height: "120px"}}>
            <hr/>
            <div>
                <span className={style[theme + "-text"]}>
                    homeworks 12:
                </span>
            </div>
            <SuperSelect
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}
            />
        </div>
    )
}

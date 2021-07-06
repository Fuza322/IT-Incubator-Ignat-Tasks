import React, {useState} from "react"
import moment from "moment"
import {SuperButton} from "../../h4/common/c2-SuperButton/SuperButton"
import style from "./Clock.module.css"

export function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<string>(moment().format('LTS'))
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(moment().format('LTS'))
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date
    const stringDate = moment().format("MMM Do YY")

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>
            {show && (
                <div>
                    {stringDate}
                </div>
            )}
            <SuperButton
                onClick={start}
                className={style.buttonSize}
            >start</SuperButton>
            <SuperButton
                onClick={stop}
                className={style.buttonSize}
            >stop</SuperButton>
        </div>
    )
}
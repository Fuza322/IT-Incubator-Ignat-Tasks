import React from "react"
import {AffairType} from "./HW2"
import {SuperButton} from "../h4/common/c2-SuperButton/SuperButton"
import style from "./Affair.module.css"

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

export function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div>
            {`${props.affair.name} ${props.affair.priority}`}
            <SuperButton
                onClick={deleteCallback}
                className={style.buttonSize}
            >X
            </SuperButton>
        </div>
    )
}
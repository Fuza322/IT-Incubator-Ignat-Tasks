import React from "react"
import {AffairType, FilterType} from "./HW2"
import {Affair} from "./Affair"
import {SuperButton} from "../h4/common/c2-SuperButton/SuperButton"
import style from "./Affairs.module.css"

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

export  function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('All')
    }
    const setHigh = () => {
        props.setFilter('High')
    }
    const setMiddle = () => {
        props.setFilter('Middle')
    }
    const setLow = () => {
        props.setFilter('Low')
    }

    return (
        <div>

            {mappedAffairs}

            <SuperButton
                onClick={setAll}
                className={style.buttonSize}
            >
                All
            </SuperButton>
            <SuperButton
                onClick={setHigh}
                className={style.buttonSize}
            >
                High
            </SuperButton>
            <SuperButton
                onClick={setHigh}
                className={style.buttonSize}
            >High
            </SuperButton>
            <SuperButton
                onClick={setMiddle}
                className={style.buttonSize}
            >Middle
            </SuperButton>
            <SuperButton
                onClick={setLow}
                className={style.buttonSize}
            >Low
            </SuperButton>
        </div>
    )
}
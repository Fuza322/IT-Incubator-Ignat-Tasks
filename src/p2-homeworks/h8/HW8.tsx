import React, {useState} from "react"
import {homeWorkReducer} from "./bll/homeWorkReducer"
import {SuperButton} from "../h4/common/c2-SuperButton/SuperButton"
import style from "./HW8.module.css"

export type PeopleType = {
    _id: number,
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55}
]

export function HW8() {
    const [people, setPeople] = useState<Array<PeopleType>>(initialPeople)

    const finalPeople = people.map(p => (
        <div key={p._id}>
            {p.name}, {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))
    const check = () => setPeople(homeWorkReducer(initialPeople, {type: "check", payload: 18}))

    return (
        <div>
            <hr/>
            homeworks 8:
            {finalPeople}
            <div className={style.buttonContainer}>
                <div>
                    <SuperButton
                        onClick={sortUp}
                        className={style.buttonSize}
                    >sort up</SuperButton>
                </div>
                <div>
                    <SuperButton
                        onClick={sortDown}
                        className={style.buttonSize}
                    >sort down</SuperButton>
                </div>
                <div>
                    <SuperButton
                        onClick={check}
                        className={style.buttonSize}
                    >check 18</SuperButton>
                </div>
            </div>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
        </div>
    )
}
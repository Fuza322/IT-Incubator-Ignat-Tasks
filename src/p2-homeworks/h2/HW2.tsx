import React, {useState} from "react"
import {Affairs} from "./Affairs"

export type AffairPriorityType = "High" | "Low" | "Middle"
export type AffairType = {
    _id: number
    name: string
    priority: string
}

export type FilterType = "All" | AffairPriorityType

const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: "React", priority: "High"},
    {_id: 2, name: "anime", priority: "Low"},
    {_id: 3, name: "games", priority: "Low"},
    {_id: 4, name: "work", priority: "High"},
    {_id: 5, name: "html & css", priority: "Middle"},
    {_id: 6, name: "porn", priority: "Low"},
]

export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === "All") return affairs
    else if (filter === "High") return affairs.filter(a => a.priority === "High")
    else if (filter === "Low") return affairs.filter(a => a.priority === "Low")
    else if (filter === "Middle") return affairs.filter(a => a.priority === "Middle")
    else return affairs
}

export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return affairs.filter(a => a._id !== _id)
}

export function HW2() {

    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>("All")
    const filteredAffairs = filterAffairs(affairs, filter)

    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
            homeworks 2:
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
            {/*<AlternativeAffairs/>*/}
        </div>
    )
}
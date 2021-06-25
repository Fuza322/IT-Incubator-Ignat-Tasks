import React from "react"
import {AffairType, filterAffairs} from "../HW2"

let initialState: AffairType[]

beforeEach(() => {
    initialState = [
        {_id: 1, name: "React", priority: "High"},
        {_id: 2, name: "anime", priority: "Low"},
        {_id: 3, name: "games", priority: "Low"},
        {_id: 4, name: "work", priority: "High"},
        {_id: 5, name: "html & css", priority: "Middle"},
        {_id: 6, name: "porn", priority: "Low"},
    ]
})

test("filter by all", () => {
    const newState = filterAffairs(initialState, "All")
    expect(newState.length).toBe(6)
})

test("filter by high", () => {
    const newState = filterAffairs(initialState, "High")
    expect(newState.length).toBe(2)
})

test("filter by middle", () => {
    const newState = filterAffairs(initialState, "Middle")
    expect(newState.length).toBe(1)
})

test("filter by low", () => {
    const newState = filterAffairs(initialState, "Low")
    expect(newState.length).toBe(3)
})
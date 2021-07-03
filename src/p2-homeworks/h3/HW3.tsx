import React, {useState} from "react"
import {v1} from "uuid"
import {GreetingContainer} from "./GreetingContainer"

export type UserType = {
    _id: string
    name: string
}

export function HW3() {
    const [users, setUsers] = useState <Array<UserType>>([
        // { _id: v1(), name: "Ignat" }
    ])

    const addUserCallback = (name: string) => {
        const newUser = {_id: v1(), name: name}
        setUsers([...users, newUser])
    }

    return (
        <div>
            <hr/>
            homeworks 3:
            <GreetingContainer
                users={users}
                addUserCallback={addUserCallback}
            />
            {/*<AlternativeGreeting/>*/}
        </div>
    )
}
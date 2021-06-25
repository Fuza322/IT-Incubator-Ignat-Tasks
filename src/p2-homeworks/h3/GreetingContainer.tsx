import React, {useState} from "react"
import {UserType} from "./HW3"
import {Greeting} from "./Greeting"


type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

export const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {

    const [name, setName] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    let totalUsers = users.length

    const addUser = () => {
        if (name === "") {
            setError(true)
        } else {
            setError(false)
            addUserCallback(name)
            setName("")
            alert(`Hello  ${name}!`)
        }
    }

    return (
        <Greeting
            name={name}
            setNameCallback={setName}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}
import React, {ChangeEvent, useState} from 'react';
import Greeting from "./Greeting";
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {

    const [name, setName] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    let totalUsers = users.length;

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };

    const addUser = () => {
        if (name == '') {
            setError(true)
        } else {
            setError(false)
            addUserCallback(name)
            setName('')
            alert(`Hello  ${name}!`);
        }
    };

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
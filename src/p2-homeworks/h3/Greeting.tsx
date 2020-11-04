import React, {ChangeEvent} from 'react';
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: boolean
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {

    const inputClass = s.error;
    const errorMessage = error ? 'Error! This field cannot be empty. ' : ''
    return (
        <div>
            <input value={name} onChange={setNameCallback} className={error ? inputClass : ''}/>
            <span>{errorMessage}</span>
            <button onClick={addUser}>add</button>
            <span>Total Users: {totalUsers}</span>
        </div>
    );
}

export default Greeting;
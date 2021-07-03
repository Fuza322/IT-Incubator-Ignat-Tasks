import React from "react"
import {HW5} from "../../../p2-homeworks/h5/HW5"
import style from "./App.module.css"
import {HashRouter} from "react-router-dom"

function App() {
    return (
        <HashRouter>
            <div className={style.App}>
                <div>react homeworks:</div>
                <HW5/>
            </div>
        </HashRouter>
    )
}

export default App
import React from "react"
import {HW5} from "../../../p2-homeworks/h5/HW5"
import style from "./App.module.css"
import {HashRouter} from "react-router-dom"
import store from "../../../p2-homeworks/store/store";
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <div className={style.App}>
                    <div>react homeworks:</div>
                    <HW5/>
                </div>
            </HashRouter>
        </Provider>
    )
}

export default App
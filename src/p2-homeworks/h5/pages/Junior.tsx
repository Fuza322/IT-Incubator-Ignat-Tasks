import React from "react"
import {Provider} from "react-redux"
import store from "../../h10/bll/store"
import {HW6} from "../../h6/HW6"
import {HW7} from "../../h7/HW7"
import {HW8} from "../../h8/HW8"
import {HW9} from "../../h9/HW9"
import {HW10} from "../../h10/HW10"
import {HW11} from "../../h11/HW11"
import "../HW5.css"


export function Junior() {
    return (
        <div className="size">
            <HW6/>
            <HW7/>
            <HW8/>
            <HW9/>
            <Provider store={store}>
                <HW10/>
            </Provider>
            <HW11/>
        </div>
    )
}
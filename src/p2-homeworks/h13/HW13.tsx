import React, {useState} from "react"
import {requestAPI} from "./requestAPI"
import {SuperCheckbox} from "../h4/common/c3-SuperCheckbox/SuperCheckbox"
import style from "./HW13.module.css"

export function HW13() {

    const [checkboxStatus, setCheckboxStatus] = useState(false)
    const [requestRes, setRequestRes] = useState("no result")

    function sendRequestRes(checkboxStatus: boolean) {
        requestAPI.post(checkboxStatus)
            .then(res => {
                setRequestRes(res.data.errorText)
            })
            .catch(error => {
                setRequestRes(error.response.data.errorText)
        })
    }

    return (
        <div>
            <hr/>
            <div className={style.wrapperHW13}>
                <SuperCheckbox
                    checked={checkboxStatus}
                    onChangeChecked={setCheckboxStatus}
                    className={style.checkboxStyle}
                >
                    Checkbox for request
                </SuperCheckbox>
                <button onClick={() => sendRequestRes(checkboxStatus)}>Request</button>
                Result: {requestRes}
            </div>
            <hr/>
        </div>
    )
}
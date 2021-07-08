import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {AppStoreType} from "../store/store"
import {loadingAC} from "./bll/loadingReducer"
import {SuperButton} from "../h4/common/c2-SuperButton/SuperButton"
import "./HW10.css"

export function HW10() {

    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(false)), 5000)
    }

    return (
        <div>
            <hr/>
            homeworks 10:
            <div className="HW10">
                {loading
                    ? (
                        <div className="windows8-wrapper">
                            <div className="windows8">
                                <div className="wBall" id="wBall_1">
                                    <div className="wInnerBall"></div>
                                </div>
                                <div className="wBall" id="wBall_2">
                                    <div className="wInnerBall"></div>
                                </div>
                                <div className="wBall" id="wBall_3">
                                    <div className="wInnerBall"></div>
                                </div>
                                <div className="wBall" id="wBall_4">
                                    <div className="wInnerBall"></div>
                                </div>
                                <div className="wBall" id="wBall_5">
                                    <div className="wInnerBall"></div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <SuperButton
                                onClick={setLoading}
                                className="buttonSize"
                            >set loading...</SuperButton>
                        </div>
                    )
                }
                {/*для личного творчества, могу проверить*/}
                {/*<Alternative/>*/}
            </div>
        </div>
    )
}
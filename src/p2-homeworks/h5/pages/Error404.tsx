import React from "react"
import "./../HW5.css"

export function Error404() {
    return (
        <div className='wrapper'>
            <div className="mainBox">
                <div className="err">404</div>
                <div className="msg">
                    Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
                </div>
            </div>
        </div>
    )
}
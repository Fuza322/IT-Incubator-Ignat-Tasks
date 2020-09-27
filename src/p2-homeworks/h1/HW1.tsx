import React from "react";
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

export type MessageDataPropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

const messageData : MessageDataPropsType = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "User_Name",
    message: "some_text",
    time: "22:00",
};

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
                <AlternativeMessage/>
            <hr/>
        </div>
    );
}

export default HW1;

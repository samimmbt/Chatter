export default function MessageBox({ Data, onPress, onLongPress, me }) {
    onPress = () => {

    }
    onLongPress = () => {

    }
    return (
        <div className={me ?("messageBox right") : ("messageBox") }>
            <div className="messageSender">
                {Data.name}
            </div>
            <div className="messageContent">
                <p>
                    {Data.message}
                </p>
            </div>
            <div className="message_bottom" >
                <div className="messageTime">
                    {Data.time}
                </div>
                <div className={Data.seen?"":"notSeen"}>
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="20" width="20">
                    <rect width="256" height="256" fill="none"></rect>
                    <path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" fill="none" stroke="#585563" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" id="mainIconPathAttribute"></path>
                    <circle cx="128" cy="128" r="40" fill="none" stroke="#585563" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></circle>
                </svg>
                </div>
            </div>

        </div>
    )
}
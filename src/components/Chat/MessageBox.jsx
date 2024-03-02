export default function MessageBox({ Data, onPress, onLongPress, me}) {
    onPress = () => {

    }
    onLongPress = () => {
        
    }
    return (
        <div className={me?("messageBox"):("messageBox right")}>
            <div className="messageSender">
                {Data.name}
            </div>
            <div className="messageContent">
                <p>
                    {Data.message}
                </p>
            </div>
            <div className="messageTime">
                {Data.time}
            </div>
        </div>
    )
}
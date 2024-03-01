import MessageBox from "../Chat/MessageBox"
import UserBox from "./UserBox"

export default function ChatList({list}) {
    const openChat = ()=>{
        
    }
    return(
        <div id="chatList">
            {list.map(message=>{
                <UserBox key={message.id} data={message} click={openChat}/>
            })}
        </div>
    )
}
import MessageBox from "../Chat/MessageBox"
import UserBox from "./UserBox"

export default function ChatList({list}) {
    const openChat = ()=>{
        
    }
    return(
        <div id="chatList">
            {list.map((user)=>{
                return <UserBox key={user.id} data={user} click={openChat}/>
            })}
        </div>
    )
}
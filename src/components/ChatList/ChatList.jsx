import MessageBox from "../Chat/MessageBox"
import UserBox from "./UserBox"
import { useState } from "react"
export default function ChatList({list,chatBox}) {
    const [selectedUser, setSelectedUser] = useState(null)

    const openChat = (userName)=>{
        setSelectedUser(userName)
        chatBox(userName)
    }
    return(
        <div id="chatList">
            {list.map((user)=>{
                return <UserBox key={user.id} data={user} click={openChat} selected={user.name === selectedUser}/>
            })}
        </div>
    )
}
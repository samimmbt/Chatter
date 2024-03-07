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
            <UserBox key='00' data={{name:'Saved Messages'}} click={openChat} selected={'Saved Messages' === selectedUser}/>
            {list.map((user)=>{
                return <UserBox key={user.id} data={user} click={openChat} selected={user.name === selectedUser}/>
            })}
        </div>
    )
}
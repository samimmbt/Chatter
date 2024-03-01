import Chat from "./components/Chat/Chat";
import ChatFooter from "./components/Chat/ChatFooter";
import ChatList from "./components/ChatList/ChatList";

export default function ChatContainer() {
    const userListArray = [
        {
            name:"Saved Message",
            userid:"me",
            id:0
        },
        {
            name:"Ali",
            userid:"ali",
            id:1
        }
    ]
    return(
        <div className="chatContainerBox">
        <ChatList list={userListArray}/>  
        <Chat/>
        </div>
    )
}
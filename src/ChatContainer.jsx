import Chat from "./components/Chat/Chat";
import ChatFooter from "./components/Chat/ChatFooter";
import ChatList from "./components/ChatList/ChatList";
import { useEffect, useState } from "react";
export default function ChatContainer({ socket }) {
    const [messages, setMessages] = useState([]);
    const [userlist, setUserList] = useState([]);
    const [selected,setSelected] = useState();
    // useEffect(() => {
    //     // Set up the socket event listener for 'messageResponse'
    //     // socket.on('messageResponse', (data) => setMessages([...messages, data]));

    //     // Initialize user list and messages
    //     const msg = [
    //         { "from": { userid: "1227uid", name: "samim" }, "time": "12:12:12.2", "seen": true, "msg": "HI" },
    //         { "from": { userid: "ali123", name: "ali" }, "time": "12:15:19.1", "seen": false, "msg": "hello" },
    //         { "from": { userid: "ali123", name: "ali" }, "time": "12:19:1.9", "seen": false, "msg": "dssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss" }
    //     ]
    //     setMessages(msg);
        // setUserList(prevUserList => [...prevUserList, ...userListArray]);
    // }, [socket]);
    const userListArray = [
        {
            name: "Saved Message",
            userid: "1227uid",
            id: 0
        },
        {
            name: "ali",
            userid: "ali123",
            id: 1
        }
    ];

    const msg = {"ali":[
        { "from": { userid: "1227uid", name: "samim" }, "time": "12:12:12.2", "seen": true, "msg": "HI" },
        { "from": { userid: "ali123", name: "ali" }, "time": "12:15:19.1", "seen": false, "msg": "hello" },
        { "from": { userid: "ali123", name: "ali" }, "time": "12:19:1.9", "seen": false, "msg": "dssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss" },
        { "from": { userid: "1227uid", name: "samim" }, "time": "12:12:12.2", "seen": true, "msg": "HI" },
        { "from": { userid: "ali123", name: "ali" }, "time": "12:19:1.9", "seen": false, "msg": "????????????" },   
        { "from": { userid: "1227uid", name: "samim" }, "time": "12:12:12.2", "seen": true, "msg": "HI" }
    ],
    "Saved Message":[
        { "from": { userid: "1227uid", name: "samim" }, "time": "12:12:12.2", "seen": true, "msg": "HI" }
    ]
}
    const setSelectedChat = (selected)=>{
        setSelected(selected)
        console.log(selected);
    }

    return (
        <div className="chatContainerBox">
            <ChatList list={userListArray} chatBox={setSelectedChat}/>
            <Chat socket={socket} messages={msg[`${selected}`]}/>
        </div>
    )
}
import Alert from "./components/Bubble/Alert";
import Chat from "./components/Chat/Chat";
import ChatList from "./components/ChatList/ChatList";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import { currentTime } from "./components/Timer/Timer";
import { useEffect, useState, useRef } from "react";
export default function ChatContainer({ socket }) {
    const [messages, setMessages] = useState([]);
    const [userlist, setUserList] = useState([]);
    const [selected, setSelected] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);
    const usr = localStorage.getItem('usr');
    const userObj = JSON.parse(usr);
    const lastMessageRef = useRef(null);

    useEffect(() => {
        // Set up the socket event listener for 'messageResponse'
        socket.on('messageResponse', (data) => {
            // if (condition) {

            // }
            console.log(data);
            setMessages([...messages, data])
            lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
        });
        socket.on('userlist',(users)=>{
            setUserList([...userlist, userlist])
        })
    }, [socket, messages, userlist]);

    const setSelectedChat = (selected) => {
        setSelected(selected)
        console.log(selected);
    }
    const handelMessage = (message) => {
        const timearr = currentTime()
        const time = `${timearr.hour.toString().padStart(2, '0')}:${timearr.minute.toString().padStart(2, '0')}`
        if (message.trim() && userObj.logged && selected) {
            socket.emit('message', {
                "from": {
                    userid: userObj.userid,
                    name: userObj.name
                },
                "to": {
                    name: selected
                },
                "time": time,
                "seen": false,
                "msg": message
            });
        } else {
            setAlertMessage("Select a chat");

        }
    }
    const removeError = (erorr) => {
        if (erorr) {
            setAlertMessage(null)
        }
    }
    const openMenu = () => {
        setIsOpen(isOpen ? false : true)
    }, clicked = (e) => {
        console.log(e);
    }
    return (
        <div className="chatContainerBox">
            {isOpen && <Menu menuEvent={openMenu} itemEvent={clicked} />}
            <Header menuEvent={openMenu} />
            <ChatList list={userlist} chatBox={setSelectedChat} />
            <Chat messages={messages} msg={handelMessage} selected={selected} lastMessageRef={lastMessageRef} />
            {alertMessage && <Alert title='Error' message={alertMessage} duration={10} timeout={removeError} />}
        </div>
    )
}
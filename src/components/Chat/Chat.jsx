import ChatFooter from "./ChatFooter";
import MessageBox from "./MessageBox";

export default function Chat({ socket, messages }) {
    const usr = localStorage.getItem('usr');
    const userObj = JSON.parse(usr);
    return (
        <div id="chatsContainer">
            {messages === undefined ? <p> Nothing Here</p> :
                messages.map((msg) => {
                    const data = myData(msg, [])
                    return (data.name === userObj.name ?
                        <MessageBox Data={data} me={true} key={`${data.name}${Math.random()}`} />
                        :
                        <MessageBox Data={data} key={`${data.name}${Math.random()}`} />
                    )
                })}
            <br />
            <br />
            <ChatFooter />
        </div>
    )

    function myData(msg, data) {
        data.name = msg.from.name;
        data.message = msg.msg;
        data.time = msg.time;
        data.seen = msg.seen
        return data
    }
}
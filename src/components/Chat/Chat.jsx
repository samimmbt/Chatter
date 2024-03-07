import ChatFooter from "./ChatFooter";
import MessageBox from "./MessageBox";
export default function Chat({ messages, msg, selected, lastMessageRef }) {
    const usr = localStorage.getItem('usr');
    const userObj = JSON.parse(usr);
    let recipientName
    if (messages.length > 0) {
        recipientName = messages[0].to.name;
        console.log(recipientName);
    }
    const handelMsg = (message) => {
        msg(message)
    }
    return (
        <div id="chatsContainer">
            {
                messages.length === 0 && !selected ? <p> Nothing Here</p> :
                    // recipientName === selected ? (
                        messages.map((msg) => {
                            const data = myData(msg, [])
                            return (data.name === userObj.name ?
                                <MessageBox Data={data} me={true} key={`${data.name}${Math.random()}`} />
                                :
                                <MessageBox Data={data} key={`${data.name}${Math.random()}`} />
                            )
                        })
                    // ) : {

                    // }
            }

            <br />
            <br ref={lastMessageRef} />
            {selected && <ChatFooter msg={handelMsg} />}
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
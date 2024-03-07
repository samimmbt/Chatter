import Button from "./Button/Button";
import MyInput from "./Input/MyInput";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
export default function SetUserData({ socket }) {
    const navigate = useNavigate();
    const location = useLocation();
    const value = location.state;
    // console.log(value);
    const [name, setname] = useState('');
    const [userId, setUserId] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (!localStorage.getItem('profile')) {
            navigate('/')
        }
    }, [])

    useEffect(() => {
        socket.on('loginRes', (data) => {
                localStorage.setItem('usr', `{ "logged": ${data.logged}, "name": "${data.name}","userid":"${data.userId}"}`)
                navigate("../app")
            
        })
    }, [socket])

    const inpData = {
        name: {
            type: "text",
            id: 'name',
            placeholder: "Name",
            labell: "Name"
        },
        userid: {
            type: "text",
            id: 'userid',
            placeholder: "Userid",
            labell: "Userid"
        },
        email: {
            type: "email",
            id: 'email',
            placeholder: "Email",
            labell: "Email"
        }
    }, setData = () => {
        return (inpData.name)
    }, setData2 = () => {
        return (inpData.userid)
    }, setData3 = () => {
        return (inpData.email)
    }, getnameVal = (inp) => {
        setname(inp)
    }, getUserIdVal = (inp) => {
        setUserId(inp)
    }, getEmailVal = (inp) => {
        setEmail(inp)
    }, saveEvent = () => {
        // console.log(socket.id);
        const data = {
            email: email,
            name: name,
            userId: userId,
            token: socket.id,
            logged: true
        }
        socket.emit('login', data)
    }
    const style = {
        h1: {
            textAlign: "center",
            fontSize: "6em"
        },
        h6: {
            marginLeft: "8%"
        }
    }
    return (
        <>
            <h1 style={style.h1}>CHATTER</h1>
            <MyInput inpData={setData} val={getnameVal} />
            <MyInput inpData={setData2} val={getUserIdVal} />
            <MyInput inpData={setData3} val={getEmailVal} />
            <Button id="saveBtn" value='Save' click={saveEvent} />
        </>
    )
}
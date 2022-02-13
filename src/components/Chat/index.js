import React, { useState, useRef, useEffect } from 'react';
import './styles.css'

const Chat = () => {
    const [active, setActive] = useState(false)
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const scrollDown = useRef();

    const submitForm = (e) => {
        e.preventDefault();
        if(message.length > 0){
            setMessages([...messages, message])
            setMessage('');
        }
    }

    useEffect(()=>{
        if(messages.length>0){
            scrollDown.current.scrollIntoView()
        }
    },[messages])

    return(<>
        <div className={`chatWrapper ${active && "fulfill"}`}>
            {
                active && 
                <div className="chatBox">
                    <div className="messagesBox">
                    {
                        messages.length > 0? messages.map((msg, index)=><div className="msg">{msg}</div>):"No messages"
                    }
                    <div ref={scrollDown}></div>
                    </div>
                    <form onSubmit={submitForm} className="sendMsgForm">
                        <input value={message} onChange={(e)=> setMessage(e.target.value)} type="text" placeholder="Type your message..."/>
                        <button type="submit">
                        <img className="icon-middle" src={require('../../icons/send.png')} />
                        </button>
                    </form>
                </div>
            }
           
        </div>
        <div className="btnWrapper">
                <button onClick={()=>setActive(!active)} className="btnOpenClose">
                    {active?
                    <img className="icon-small" src={require('../../icons/close.png')} />:
                    <img className="icon-big" src={require('../../icons/chat.png')} />
                    }
                 </button>
        </div>
    </>)
}

export default Chat

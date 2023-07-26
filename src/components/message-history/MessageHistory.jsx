/* eslint-disable react/prop-types */
import "./message-history.scss"
const MessageHistory = ({msg}) => {
    if(!msg) return <></>
    return msg.map((message,index)=>{
        return (
            <div 
            className={`message-history mt-3  ${message.messageBy==="operator" && "operator-message" }`} 
            key={index} >
                <div className="send fw-bold text-secondary">
                    <div className="sender">{message.messageBy}</div>
                    <div className="date">{message.date}</div>
                </div>
                <div className="message">{message.message}</div>
            </div>)
    })
}

export default MessageHistory
/* eslint-disable react/prop-types */
import "./message-history.scss"
const MessageHistory = ({msg}) => {
    if(!msg) return <></>
    return msg.map((message,index)=>{
        return (
            <div 
            className={`message-history mt-3  ${message.sender==="admin" && "operator-message" }`} 
            key={index} >
                
                <div className="message">{message.message}</div>
                <div className="send fw-bold text-secondary">
                    <div className="sender">{message.sender}</div>
                    <div className="date">{new Date(message.msgAt).toLocaleString()}</div>
                </div>
            </div>)
    })
}

export default MessageHistory
import "./chatBox.css"

// eslint-disable-next-line react/prop-types
const ChatBox = ({img, nameSurname, description, date, isPassed,isPassedBrd,isPassedK}) => {
  return (
    <div className={`chat-box ${isPassed == true ? "passed" : ""}`}>
      
      
        <div className="chat-img">
            <img src={img} alt="chat" />
            <div className={`chat-img-brd ${isPassedBrd == true ? "passed-brd" : ""} ${isPassedK == true ? "passed-brd-k" : ""}`}></div>
        </div>
        <div className="chat-box-text">
            <div className="header-text">
                <span className="name-surname">{nameSurname}</span>
                <span className="date-text">{date}</span>
            </div>
            <div className="subtext">
                <span>{description}</span>
            </div>
            
            
        
        
        </div>
      
    </div>
  )
}

export default ChatBox

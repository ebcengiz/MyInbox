import "./box.css"
import Avatar1 from "../../assets/avatarE1.svg" 
import Avatar2 from "../../assets/avatarE2.svg" 
import Avatar3 from "../../assets/avatarK2.svg" 
import Avatar4 from "../../assets/avatarK3.svg" 
import ChatBox from "../chat-box/ChatBox"


const Box = () => {
  return (
    <div className="box">
      <p className="main-text">Your messages</p>
      <button className="button-box"><span className="button-box-text">Compose</span> <img src="../../../public/Pencil.svg" alt="pencil" className="btn-icon" /></button>
      <ChatBox img={Avatar1} nameSurname="Rafel Jay" description="Hi there, how are you?" date="4 days ago" />
      <ChatBox img={Avatar2} nameSurname="Frank  Johnson" description="How was the trip?" date="5 days ago" />
      <ChatBox img={Avatar3} nameSurname="Ashley Pierce" description="I hope you are well." date="Mar 3, 2022" />
      <ChatBox img={Avatar4} nameSurname="Nancy Meyer" description="Thank you for answering." date="Feb 3, 2022" />
    </div>
  )
}

export default Box

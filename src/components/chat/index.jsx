import ChatContent from "./chatContent";
import ChatList from "./chatList";

const Chat = () => {
    return(
        <div className="container mx-auto pt-24">
            <div className="grid grid-cols-12">
                <div className="md:col-span-4 col-span-2">
                   <ChatList /> 
                </div>
                <div className="md:col-span-8 col-span-10">
                    <ChatContent />
                </div>
            </div>
        </div>
    )
}
export default Chat;
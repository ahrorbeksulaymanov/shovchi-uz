import { Avatar, Input } from "antd";
import user from '../../assets/images/user.png'

const ChatList = () => {

    const data = [1,1,1,1,11,1,1,1,11,1];

    return(
        <div>
            <h2 className="text-[18px] mx-3 mb-6">Xabarlar</h2>
            {/* <Input className="rounded-xl mb-2" size="large" type="text" placeholder="Qidirish"  prefix={<svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_iconCarrier"> <circle cx="11" cy="11" r="5.5" stroke="#000000"></circle> <path d="M15 15L19 19" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>} /> */}
            <div className="pt-3 h-[73vh] overflow-y-auto overflow-x-hidden filter-scroll pr-2 md:pr-0">
                <div className="flex md:justify-between justify-center py-3 bg-cyan-50 md:border-l-4 border-x-cyan-200 rounded-md px-3 mb-2 cursor-pointer">
                    <div className="md:flex justify-start">
                        <Avatar size={44} icon={<img src={user} alt='user' />} />
                        <p className="font-semibold mb-0 md:hidden">Pena</p>
                        <div className="ml-3 hidden md:block">
                            <p className="font-semibold mb-0">Eleanor Pena</p>
                            <p className="mb-0 ">Assalomu aleykum rahmat!</p>
                        </div>
                    </div>
                    <span className="font-semibold text-neutral-500 hidden md:block">18:31</span>
                </div>
                {
                    data.map((item, index) => (
                        <div key={index} className="flex md:justify-between justify-center py-3 md:border-l-4 rounded-md border-x-white px-3 mb-2 cursor-pointer hover:bg-neutral-50 ">
                            <div className="md:flex">
                                <Avatar size={44} icon={<img src={user} alt='user' />} />
                                <p className="font-semibold mb-0 md:hidden">Eleanor</p>
                                <div className="ml-3 hidden md:block">
                                    <p className="font-semibold mb-0">Eleanor Pena</p>
                                    <p className="mb-0 ">Assalomu aleykum rahmat!</p>
                                </div>
                            </div>
                            <span className="font-semibold text-neutral-500 hidden md:block">18:31</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default ChatList;
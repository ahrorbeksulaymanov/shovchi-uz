import { Avatar } from "antd";
import { useEffect, useRef } from "react";
import user from '../../assets/images/user.png'

const ChatContent = () => {

    const chatRef = useRef()

    useEffect(() => {
        if(chatRef.current){
            chatRef.current?.scrollTo(0, 10000000000)
        }
    }, [])

    return(
        <div>
            <div className="flex justify-between py-3 px-3 border rounded-tl-xl rounded-tr-xl" style={{alignItems:"center"}}>
                <div className="flex">
                    <Avatar size={44} icon={<img src={user} alt='user' />} />
                    <div className="ml-3">
                        <p className="font-semibold mb-0">Eleanor Pena</p>
                        <p className="mb-0 ">Assalomu aleykum rahmat!</p>
                    </div>
                </div>
                <span className="font-semibold text-neutral-500">
                    <svg width={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="miter"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_iconCarrier"><line x1="11.99" y1="6" x2="12" y2="6" strokeLinecap="round" strokeWidth="2"></line><line x1="11.99" y1="12" x2="12" y2="12" strokeLinecap="round" strokeWidth="2"></line><line x1="11.99" y1="18" x2="12" y2="18" strokeLinecap="round" strokeWidth="2"></line></g></svg>
                </span>
            </div>
                <div className="h-[65vh] overflow-y-auto overflow-x-hidden filter-scroll px-2 border-r">
            <div ref={chatRef} className='h-[65vh]'>
                    {/* her message */}
                    <div className="">
                        <div className="flex" style={{alignItems:"center"}}>
                            <Avatar size={35} icon={<img src={user} alt='user' />} />
                            <div className="ml-3">
                                <p className="font-semibold mb-0">Eleanor Pena</p>
                                <p className="mb-0 ">16:25</p>
                            </div>
                        </div>
                        <div className="bg-cyan-50 rounded-r-2xl rounded-bl-2xl inline-block px-4 py-3 mt-3 max-w-[50%]">
                            <p className="inline-block mb-0">Assalomu aleykum, menga yordam berolaszmi?</p>
                        </div>
                        <br />
                        <div className="bg-cyan-50 rounded-r-2xl rounded-bl-2xl inline-block px-4 py-3 mt-3 max-w-[50%]">
                            <p className="inline-block mb-0">Tizimda negadir nosozlik holati kuzatilmoqda, agar qo’lizdan kelsa yordam berolaszmi?</p>
                        </div>
                    </div>
                    {/* my message */}
                    <div className="text-right">
                        <div className="flex justify-end" style={{alignItems:"center"}}>
                            <div className="mr-3">
                                <p className="font-semibold mb-0 text-right">Siz</p>
                                <p className="mb-0 ">16:27</p>
                            </div>
                            <Avatar size={35} icon={<img src={user} alt='user' />} />
                        </div>
                        <div className="bg-emerald-600 text-white rounded-l-2xl rounded-br-2xl inline-block px-4 py-3 mt-3 text-right max-w-[50%]">
                            <p className="inline-block mb-0">Vaaleykum assalom muammo haqida to’liqroq ma’lumot bera olasizmi?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between rounded-full p-2 border shadow shadow-slate-100 drop-shadow-2xl ml-3" style={{alignItems:"center"}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 24C8.79469 24 5.78123 22.7518 3.51469 20.4853C1.24823 18.2188 0 15.2053 0 12C0 8.79469 1.24823 5.78123 3.51469 3.51469C5.78123 1.24823 8.79469 0 12 0C15.2053 0 18.2188 1.24823 20.4853 3.51469C22.7518 5.78123 24 8.79469 24 12C24 15.2053 22.7518 18.2188 20.4853 20.4853C18.2188 22.7518 15.2053 24 12 24ZM12 1.875C6.41705 1.875 1.875 6.41705 1.875 12C1.875 17.583 6.41705 22.125 12 22.125C17.583 22.125 22.125 17.583 22.125 12C22.125 6.41705 17.583 1.875 12 1.875ZM16.3939 14.0713C15.9571 13.7933 15.3776 13.9221 15.0997 14.3589C15.0881 14.3771 13.9214 16.1747 11.9531 16.1747C9.98484 16.1747 8.81812 14.3771 8.80655 14.3589C8.52858 13.9221 7.94916 13.7933 7.51233 14.0713C7.0755 14.3493 6.94673 14.9288 7.2247 15.3655C7.29445 15.4751 8.96714 18.0497 11.9531 18.0497C14.9391 18.0497 16.6118 15.4752 16.6815 15.3655C16.9595 14.9287 16.8307 14.3493 16.3939 14.0713ZM7.875 7.73438C8.5222 7.73438 9.04688 8.25905 9.04688 8.90625C9.04688 9.55345 8.5222 10.0781 7.875 10.0781C7.2278 10.0781 6.70312 9.55345 6.70312 8.90625C6.70312 8.25905 7.2278 7.73438 7.875 7.73438ZM14.9062 8.90625C14.9062 9.55345 15.4309 10.0781 16.0781 10.0781C16.7253 10.0781 17.25 9.55345 17.25 8.90625C17.25 8.25905 16.7253 7.73438 16.0781 7.73438C15.4309 7.73438 14.9062 8.25905 14.9062 8.90625Z" fill="#85A0CB"/>
                    </svg>
                    <input className="border-none inline-block w-[80%] bg-transparent chat-input" placeholder="Habarni kiriting..." type="text" />
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.8734 8.00761L9.6927 19.0642C7.84013 20.8964 4.83624 20.8964 2.98366 19.0642C1.13109 17.232 1.13109 14.2619 2.98366 12.4298L13.0468 2.47895C14.2822 1.25775 16.284 1.25775 17.5193 2.47895C18.7546 3.70011 18.7546 5.68073 17.5193 6.90189L7.45609 16.8527C6.83883 17.4638 5.83753 17.4638 5.21948 16.8527C4.60222 16.2426 4.60222 15.2523 5.21948 14.6413L14.1644 5.79614L13.0461 4.69042L4.10199 13.5363C2.86668 14.7575 2.86668 16.7381 4.10199 17.9593C5.3373 19.1805 7.3391 19.1805 8.57441 17.9593L18.6376 8.0084C20.4902 6.17626 20.4902 3.20616 18.6376 1.37398C16.785 -0.458157 13.7812 -0.458157 11.9286 1.37398L1.30622 11.8777L1.34471 11.9161C-0.584848 14.3695 -0.415218 17.9161 1.86538 20.1707C4.14597 22.4254 7.73097 22.5942 10.2126 20.6851L10.2511 20.7236L21.9909 9.11412L20.8734 8.00761Z" fill="#85A0CB"/>
                </svg>
                <div className="rounded-full bg-teal-500 ml-4">
                    <svg className="m-2 " width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.4354 0.581983C18.9352 0.0685981 18.1949 -0.122663 17.5046 0.0786645L1.408 4.75952C0.679698 4.96186 0.163487 5.54269 0.0244302 6.28055C-0.117628 7.0315 0.378575 7.98479 1.02684 8.38342L6.0599 11.4768C6.57611 11.7939 7.24239 11.7144 7.66956 11.2835L13.4329 5.4843C13.723 5.18231 14.2032 5.18231 14.4934 5.4843C14.7835 5.77623 14.7835 6.24935 14.4934 6.55134L8.71999 12.3516C8.29181 12.7814 8.21178 13.4508 8.52691 13.9702L11.6022 19.0538C11.9623 19.6577 12.5826 20 13.2628 20C13.3429 20 13.4329 20 13.513 19.9899C14.2933 19.8893 14.9135 19.3558 15.1436 18.6008L19.9156 2.52479C20.1257 1.84028 19.9356 1.09537 19.4354 0.581983" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}
export default ChatContent;
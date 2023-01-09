import React from "react";

const MenuMobile = () => {

    return(
        <div className="fixed sm:hidden bottom-0 left-0 right-0 px-5 py-2 bg-slate-50 border-t">
            <div className="container">
                <div className="flex justify-center" style={{alignItems:"center"}}>
                    <div className="border-2 text-center rounded-xl px-3 py-2 cursor-pointer hover:bg-zinc-100">
                        <svg className="mx-auto" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 9.5L.5 13H3v9h7v-6h4v6h7v-9h2.5L12 1.5l-4 4V3H4zM5 4h2v3.914l5-5L21.086 12H20v9h-5v-6H9v6H4v-9H2.914L5 9.914z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
                        <p className="mb-0 text-[12px]">Asosiy</p>
                    </div>
                    <div className="border-2 text-center rounded-xl px-3 py-2 cursor-pointer hover:bg-zinc-100 mr-3 ml-6">
                        <svg className="mx-auto" fill="#000000" width="25px" height="25px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M962.56 839.68c11.309 0 20.48-9.171 20.48-20.48V204.8c0-11.309-9.171-20.48-20.48-20.48H61.44c-11.309 0-20.48 9.171-20.48 20.48v614.4c0 11.309 9.171 20.48 20.48 20.48h901.12zm0 40.96H61.44C27.509 880.64 0 853.131 0 819.2V204.8c0-33.931 27.509-61.44 61.44-61.44h901.12c33.931 0 61.44 27.509 61.44 61.44v614.4c0 33.931-27.509 61.44-61.44 61.44z"/><path d="M971.909 165.158L519.608 538.099c-5.467 4.505-15.877 4.505-21.348-.004L43.752 163.325c-8.727-7.196-21.634-5.955-28.83 2.772s-5.955 21.634 2.772 28.83l454.513 374.774c20.605 16.979 52.854 16.979 73.454.004L997.967 196.76c8.727-7.196 9.968-20.103 2.772-28.83s-20.103-9.968-28.83-2.772z"/><path d="M415.464 496.633L22.176 819.07c-8.747 7.171-10.024 20.075-2.853 28.822s20.075 10.024 28.822 2.853l393.288-322.437c8.747-7.171 10.024-20.075 2.853-28.822s-20.075-10.024-28.822-2.853zm596.665 327.461L614.735 498.298c-8.747-7.171-21.651-5.894-28.822 2.853s-5.894 21.651 2.853 28.822L986.16 855.769c8.747 7.171 21.651 5.894 28.822-2.853s5.894-21.651-2.853-28.822z"/></svg>
                        <p className="mb-0 text-[12px]">Xabarlar</p>
                    </div>
                    <div className="border-2 text-center rounded-xl px-3 py-2 cursor-pointer hover:bg-zinc-100 mr-6 ml-3">
                         <svg className="mx-auto" fill="#000000" width="25px" height="25px" viewBox="0 0 30.586 30.586" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(-546.269 -195.397)"> <path d="M572.138,221.245a15.738,15.738,0,0,0-21.065-.253l-1.322-1.5a17.738,17.738,0,0,1,23.741.28Z"></path> <path d="M561.464,204.152a4.96,4.96,0,1,1-4.96,4.96,4.966,4.966,0,0,1,4.96-4.96m0-2a6.96,6.96,0,1,0,6.96,6.96,6.96,6.96,0,0,0-6.96-6.96Z"></path> <path d="M561.562,197.4a13.293,13.293,0,1,1-13.293,13.293A13.308,13.308,0,0,1,561.562,197.4m0-2a15.293,15.293,0,1,0,15.293,15.293A15.293,15.293,0,0,0,561.562,195.4Z"></path> </g> </g></svg>
                         <p className="mb-0 text-[12px]">Profile</p>
                    </div>
                    <div className="border-2 text-center rounded-xl px-3 py-2 cursor-pointer hover:bg-zinc-100">
                        <svg className="mx-auto" width="25px" height="25px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_iconCarrier"> <title>help-circle</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2Zm0,40A18,18,0,1,1,42,24,18.1,18.1,0,0,1,24,42Z"></path> <path d="M24,38h-.4l-.4-.2h-.3l-.3-.3-.3-.3c0-.1-.1-.2-.2-.3s0-.3-.1-.4v-.8c.1-.1.1-.2.1-.4s.2-.2.2-.3l.3-.3a1.9,1.9,0,0,1,1.8-.6h.4l.3.2.3.3.3.3c0,.1.1.2.1.3s.1.3.2.4v.8c-.1.1-.1.2-.2.4s-.1.2-.1.3l-.3.3-.3.3h-.3l-.4.2Z"></path> <path d="M24.4,30h-.8a2,2,0,0,1-1.1-2.6,7.3,7.3,0,0,1,3.6-3.9A4.9,4.9,0,0,0,25,14.1a5.3,5.3,0,0,0-4.2,1A5.3,5.3,0,0,0,19,18.9a2,2,0,0,1-4,0,8.8,8.8,0,0,1,3.3-6.8,8.8,8.8,0,0,1,7.5-1.9,8.9,8.9,0,0,1,2,16.8,3.7,3.7,0,0,0-1.6,1.7A1.9,1.9,0,0,1,24.4,30Z"></path> </g> </g> </g></svg>
                        <p className="mb-0 text-[12px]">Yordam</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MenuMobile;
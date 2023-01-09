import ToBackBtn from "../toBackBtn";

const UserView = () => {

    // {
    //     image: user,
    //     name: "Hakimov Javohir",
    //     age: 21,
    //     millat:"O'zbek",
    //     isMarried:"Uylanmagan",
    //     job:"Haydovchi",
    //     live:"Germaniya",
    //     payment: true
    // },

    return(
        <div className="container mx-auto pt-24 pb-14">
            <ToBackBtn />
            <div className="grid grid-cols-11 gap-4">
                <div className="lg:col-span-3 sm:col-span-5 col-span-11">
                    <div className="bg-slate-500 w-[100%] h-[350px] rounded-lg">

                    </div>
                    <p className="mb-2 text-center font-bold text-stone-700 mt-3 text-[18px]">Hakimov Javohir</p>
                    <div className="flex justify-between">
                        
                    </div>
                    <button className="bg-green-600 w-[45%] mr-[10%] hover:bg-green-700 text-white rounded-md px-3 py-2 text-[17px]">Do'stlashish</button>
                    <button className="bg-blue-600 w-[45%] hover:bg-blue-700 text-white rounded-md px-3 py-2 text-[17px]">
                        <svg className="inline-block mr-2" fill="#fff" width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M962.56 839.68c11.309 0 20.48-9.171 20.48-20.48V204.8c0-11.309-9.171-20.48-20.48-20.48H61.44c-11.309 0-20.48 9.171-20.48 20.48v614.4c0 11.309 9.171 20.48 20.48 20.48h901.12zm0 40.96H61.44C27.509 880.64 0 853.131 0 819.2V204.8c0-33.931 27.509-61.44 61.44-61.44h901.12c33.931 0 61.44 27.509 61.44 61.44v614.4c0 33.931-27.509 61.44-61.44 61.44z"/><path d="M971.909 165.158L519.608 538.099c-5.467 4.505-15.877 4.505-21.348-.004L43.752 163.325c-8.727-7.196-21.634-5.955-28.83 2.772s-5.955 21.634 2.772 28.83l454.513 374.774c20.605 16.979 52.854 16.979 73.454.004L997.967 196.76c8.727-7.196 9.968-20.103 2.772-28.83s-20.103-9.968-28.83-2.772z"/><path d="M415.464 496.633L22.176 819.07c-8.747 7.171-10.024 20.075-2.853 28.822s20.075 10.024 28.822 2.853l393.288-322.437c8.747-7.171 10.024-20.075 2.853-28.822s-20.075-10.024-28.822-2.853zm596.665 327.461L614.735 498.298c-8.747-7.171-21.651-5.894-28.822 2.853s-5.894 21.651 2.853 28.822L986.16 855.769c8.747 7.171 21.651 5.894 28.822-2.853s5.894-21.651-2.853-28.822z"/></svg>
                        Chat
                    </button>
                </div>
                <div className="lg:col-span-4 sm:col-span-6 col-span-11 bg-stone-50 rounded-2xl p-4">
                    <div className="flex justify-between">
                        <p className="font-bold text-stone-700 mt-3 text-[18px]">Millati</p>
                        <p className="font-semibold text-stone-400 mt-3 text-[18px]">O'zbek</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold text-stone-700 mt-3 text-[18px]">Yoshi</p>
                        <p className="font-semibold text-stone-400 mt-3 text-[18px]">25</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold text-stone-700 mt-3 text-[18px]">Bo'y uzunligi</p>
                        <p className="font-semibold text-stone-400 mt-3 text-[18px]">175 sm</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold text-stone-700 mt-3 text-[18px]">Vazn og’irligi</p>
                        <p className="font-semibold text-stone-400 mt-3 text-[18px]">70 kg</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold text-stone-700 mt-3 text-[18px]">Oilaviy holati</p>
                        <p className="font-semibold text-stone-400 mt-3 text-[18px]">Uylanmagan</p>
                    </div>
                </div>
                <div className="lg:col-span-4 col-span-11 bg-stone-50 rounded-2xl p-4">
                    <div className="flex justify-between">
                        <p className="font-bold text-stone-700 mt-3 text-[18px]">Viloyat</p>
                        <p className="font-semibold text-stone-400 mt-3 text-[18px]">Toshkent</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold text-stone-700 mt-3 text-[18px]">Tuman</p>
                        <p className="font-semibold text-stone-400 mt-3 text-[18px]">Yunusobod</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold text-stone-700 mt-3 text-[18px]">Germaniyadagi status</p>
                        <p className="font-semibold text-stone-400 mt-3 text-[18px]">Ko'k karta</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold text-stone-700 mt-3 text-[18px]">Kasbi, mutahasislik va hobbi</p>
                        <p className="font-semibold text-stone-400 mt-3 text-[18px]">Haydovchi</p>
                    </div>
                </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-4 mt-4">
                <p className="mb-0 font-bold text-stone-700 mt-3 text-[18px]">Qanday umr yo’ldosh xohlaydi</p>
                <p className="mb-0 text-stone-400 mt-3 text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, rem? Odio quo veniam magni nostrum quia tempore eos eius placeat ratione. Culpa fuga accusamus eum voluptatem. Assumenda molestiae atque pariatur!</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-4 mt-4">
                <p className="mb-0 font-bold text-stone-700 mt-3 text-[18px]">Turmush, oila tasavvurida</p>
                <p className="mb-0 text-stone-400 mt-3 text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, rem? Odio quo veniam magni nostrum quia tempore eos eius placeat ratione. Culpa fuga accusamus eum voluptatem. Assumenda molestiae atque pariatur!</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-4 mt-4">
                <p className="mb-0 font-bold text-stone-700 mt-3 text-[18px]">Talab va shartlari</p>
                <p className="mb-0 text-stone-400 mt-3 text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, rem? Odio quo veniam magni nostrum quia tempore eos eius placeat ratione. Culpa fuga accusamus eum voluptatem. Assumenda molestiae atque pariatur!</p>
            </div>
        </div>
    )
}
export default UserView;
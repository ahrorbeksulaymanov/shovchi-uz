import React from "react";
import AllUsers from "../allUsers";
import FilterDesctop from "../desctop-filter";
import MenuMobile from "../mobileMenu";

const MainPage = () => {

    return(
        <div>
            
            <div className="container mx-auto pt-24">
                <div className="grid grid-cols-12">
                    <div className="xl:col-span-3 lg:col-span-2 lg:block hidden">
                        <FilterDesctop />
                    </div>
                    <div className="xl:col-span-9 lg:col-span-10 col-span-12">
                        <AllUsers />
                    </div>
                </div>
            </div>
            <MenuMobile />
        </div>
    )
}
export default MainPage;
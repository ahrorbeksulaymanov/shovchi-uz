import React from "react";
import Header from "../header";

const ClientLayout = ({children}) => {

    return(
        <div>
            <Header />
            {children}
        </div>
    )
}
export default ClientLayout;
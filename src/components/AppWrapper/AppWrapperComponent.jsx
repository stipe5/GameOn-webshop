import { Outlet } from "react-router-dom";
import { FooterComponent } from "../footer/Footer";
import { HeaderComponent } from "../header/Header";
import { Toaster } from "react-hot-toast";

function AppWrapperComponent() {
    return(
        <>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </>
        
    )
}

export {AppWrapperComponent};
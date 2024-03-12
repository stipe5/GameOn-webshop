import { Outlet } from "react-router-dom";
import { FooterComponent } from "../footer/Footer";
import { HeaderComponent } from "../header/Header";

function AppWrapperComponent() {
    return(
        <>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </>
        
    )
}

export {AppWrapperComponent};
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AppSpinner from "./AppSpinner";



export default function Layout(){
    const navigation = useNavigation();
    return(
        <>
          {navigation.state === "loading" && <AppSpinner />}
            <Navbar />
            <main className="" >
               <Outlet />
            </main>
            <Footer/>
        </>
    )
}
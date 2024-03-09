import Header from "../../widgets/Header/Header";
import Footer from "../../widgets/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function PageWrap() {
    return(
        <>
            <Header />
            <main>
                <div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </main>            
            <Footer />
        </>
    )
}
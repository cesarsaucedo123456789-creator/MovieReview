import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "./Layout.css";

export default function Layout({ children }){

    return(

        <>

            <Navbar />

            <main className="layout">

                {children}

            </main>

            <Footer />

        </>

    )
}

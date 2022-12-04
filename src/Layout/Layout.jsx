import "./layout.css"
import {Header} from "../components/Header/Header"
import {UserInfo} from "../components/UserInfo/UserInfo";
import {Footer} from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import {RoutesWrapper} from "../Routes/Routes"


export const Layout = () => {
    return (
        <>
            <Header/>
            <Navbar />
            <main>
                <div className="container">
                    <div className="wrapper">
                        <UserInfo />

                        <RoutesWrapper/>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}
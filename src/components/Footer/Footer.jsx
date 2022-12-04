import "./footer.css"
import Logo from "../../assets/images/logo.svg"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <a className="footer__logo-link" href="#">
                    <img className="footer__logo-img" src={Logo} alt="Logo" width={32} height={32} />
                </a>

                <p className="footer__desc">© {new Date().getFullYear()} GitHub, Inc.</p>

                <ul className="footer__link-list">
                    <li className="footer__link-item">
                        <a className="footer__link" href="#">Terms</a>
                    </li>

                    <li className="footer__link-item">
                        <a className="footer__link" href="#">Privacy</a>
                    </li>

                    <li className="footer__link-item">
                        <a className="footer__link" href="#">Security</a>
                    </li>

                    <li className="footer__link-item">
                        <a className="footer__link" href="#">Status</a>
                    </li>

                    <li className="footer__link-item">
                        <a className="footer__link" href="#">Docs</a>
                    </li>

                    <li className="footer__link-item">
                        <a className="footer__link" href="#">Contact GitHub</a>
                    </li>

                    <li className="footer__link-item">
                        <a className="footer__link" href="#">Pricing</a>
                    </li>

                    <li className="footer__link-item">
                        <a className="footer__link" href="#">API</a>
                    </li>

                    <li className="footer__link-item">
                        <a className="footer__link" href="#">Training</a>
                    </li>

                    <li className="footer__link-item">
                        <a className="footer__link" href="#">Blog</a>
                    </li>

                    <li className="footer__link-item">
                        <a className="footer__link" href="#">About</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
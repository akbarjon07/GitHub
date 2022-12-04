import "./packages.css"
import img from "../../assets/images/package.png"

export const Packages = () => {
    return (
        <section className="packages-section">
            <div className="container">
                <div className="packages-wrapper">
                    <img className="packages-img mb-3" src={img} alt="Package" width={56} height={56} />
                    <h2 className="packages-title">Get started with GitHub Packages</h2>
                    <p className="packages-desc">Safely publish packages, store your packages alongside your code, and share your packages privately with your team.</p>
                </div>
            </div>
        </section>
    )
}
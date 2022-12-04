import "./navbar.css"
import { NavLink } from "react-router-dom"


export const Navbar = () => {

    return (
            <section className="navbar-section">
                <div className="container">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to={"/overview"} className={({isActive}) => {
                                return (
                                    isActive ? " nav-item-link active" : "nav-item-link"
                                )
                            }}>
                                <button className="btn btn-light nav-btn">
                                    <i className="bi bi-book icon"></i>
                                    Overview
                                </button>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to={"/repositories"} className={({isActive}) => {
                                return (
                                    isActive ? " nav-item-link active" : "nav-item-link"
                                )
                            }}>
                                <button className="btn btn-light nav-btn">
                                    <i className="bi bi-journal-bookmark icon"></i>
                                    Repositories
                                </button>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to={"/projects"} className={({isActive}) => {
                                return (
                                    isActive ? " nav-item-link active" : "nav-item-link"
                                )
                            }}>
                                <button className="btn btn-light nav-btn">
                                    <i className="bi bi-kanban icon"></i>
                                    Projects
                                </button>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to={"/packages"} className={({isActive}) => {
                                return (
                                    isActive ? " nav-item-link active" : "nav-item-link"
                                )
                            }}>
                                <button className="btn btn-light nav-btn">
                                    <i className="bi bi-box icon"></i>
                                    Packages
                                </button>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to={"/stars"} className={({isActive}) => {
                                return (
                                    isActive ? " nav-item-link active" : "nav-item-link"
                                )
                            }}>
                                <button className="btn btn-light nav-btn">
                                    <i className="bi bi-star icon"></i>
                                    Stars
                                </button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </section>
    )
}
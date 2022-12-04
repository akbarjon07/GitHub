import "./header.css"
import Logo from "../../assets/images/git-logo.png"
import { useState, useEffect } from "react"

export const Header = () => {

    const [userName, setUserName] = useState("");
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        async function searchData() {
            const res = await fetch(`https://api.github.com/search/users?q=${userName}`)
            const result = await res.json()
            setItemList(result.items);
            console.log(result);
        }
        searchData()
    }, [])

    const style = {
        fontSize: "1rem",
        color: "white"
    }

    return (
        <header className="header">
            <div className="container header__container">
                <a href="#">
                    <img src={Logo} alt="Logo" width={32} height={32} />
                </a>

                <div className="dropdown">

                    <input value={userName} className="header__search-input form-control dropdown-toggle" type="text" placeholder="Search or jump to..." data-bs-toggle="dropdown" onChange={(e) => {
                        setUserName(e.target.value)
                    }}/>

                    <ul className="dropdown-menu">
                        {
                            itemList?.length > 0 ? itemList.map((item) => {
                                return (
                                    <li><a class="dropdown-item" href={item.html_url}>{item.login}</a></li>
                                )
                            }) : <li className="dropdown-item"></li>
                        }
                    </ul>
                </div>



                <ul className="header__link-list">
                    <li className="header__link-item">
                        <a href="#" className="header__link">Pull request</a>
                    </li>

                    <li className="header__link-item">
                        <a href="#" className="header__link">Issues</a>
                    </li>

                    <li className="header__link-item">
                        <a href="#" className="header__link">Codespaces</a>
                    </li>

                    <li className="header__link-item">
                        <a href="#" className="header__link">Marketplace</a>
                    </li>

                    <li className="header__link-item">
                        <a href="#" className="header__link">Explore</a>
                    </li>
                </ul>

                <div className="header__btn-wrapper">
                    <button className="header__note-btn btn btn-secondary"><i className="bi bi-bell" style={style}></i></button>

                    <div className="dropdown">
                        <button className="header__repo-btn btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-plus" style={style}></i></button>

                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">New repository</a></li>
                            <li><a className="dropdown-item" href="#">Import repository</a></li>
                            <li><a className="dropdown-item" href="#">New codespace</a></li>
                            <li><a className="dropdown-item" href="#">New gist</a></li>
                            <li><a className="dropdown-item" href="#">New organization</a></li>
                            <li><a className="dropdown-item" href="#">New project</a></li>
                        </ul>
                    </div>

                    <div className="dropdown">
                        <button className="header__prof-btn btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-person-circle"></i></button>

                        <ul className="dropdown-menu">
                            <li><p className="dropdown-item">Signed as <br /> <strong>akbarjon07</strong></p></li>
                            <hr/>
                            <li><a className="dropdown-item" href="#">Your profile</a></li>
                            <li><a className="dropdown-item" href="#">Your repositories</a></li>
                            <li><a className="dropdown-item" href="#">Your projects</a></li>
                            <li><a className="dropdown-item" href="#">Your stars</a></li>
                            <li><a className="dropdown-item" href="#">Your gists</a></li>
                            <hr/>
                            <li><a className="dropdown-item" href="#">Upgrade</a></li>
                            <li><a className="dropdown-item" href="#">Try Enterprice</a></li>
                            <li><a className="dropdown-item" href="#">Feature preview</a></li>
                            <li><a className="dropdown-item" href="#">Help</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <hr/>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
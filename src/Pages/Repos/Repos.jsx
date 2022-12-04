import { useState, useEffect } from "react";
import moment from "moment/moment";
import "./repos.css"

export const Repos = () => {

    const [repo, setRepo] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://api.github.com/users/akbarjon07/repos");
            const result = await res.json()
            setRepo(result);
        }
        fetchData()
    }, [])
    console.log(repo);


    return (
        <section className="repos-section">
            <div className="container">
                <div className="d-flex align-items-center mt-4">
                <input className="form-control search" type="text" placeholder="Find a repository..." />

                <select className="form-select ms-2 in" aria-label="Default select example">
                    <option selected>Type</option>
                    <option defaultValue="1">Public</option>
                    <option defaultValue="2">Private</option>
                    <option defaultValue="3">Sources</option>
                    <option defaultValue="4">Forks</option>
                    <option defaultValue="5">Archieved</option>
                </select>

                <select className="form-select ms-1 in" aria-label="Default select example">
                    <option selected>Language</option>
                    <option defaultValue="1">All</option>
                    <option defaultValue="2">HTML</option>
                    <option defaultValue="3">SCSS</option>
                    <option defaultValue="4">JavaScript</option>
                </select>

                <select className="form-select ms-1 in" aria-label="Default select example">
                    <option selected>Sort</option>
                    <option defaultValue="1">Last updated</option>
                    <option defaultValue="2">Name</option>
                    <option defaultValue="3">Stars</option>
                </select>

                <button className="btn btn-success ms-2"><i class="bi bi-journal-bookmark me-1"></i>New</button>
                </div>

                <ul className="repos-list mt-4">
                    {
                        repo.length > 0 ? repo.map((item) => {
                            return (
                                <li className="repos-item d-flex justify-content-between">
                                    <div>
                                        <div className="d-flex align-items-center mb-3">
                                            <a className="repos-item-link fw-bold" href={item.html_url}>{item.name}</a>
                                            <p className="repos-item-visibility ms-5">{item.visibility}</p>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <span className="repos-item-span"></span>
                                            <p className="font ms-2 fs-6">{item.language}</p>
                                            <p className="font ms-5">Updated on {moment(item.updated_at).format('LL')}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <select className="form-select in" aria-label="Default select example">
                                            <option selected>Star</option>
                                            <option defaultValue="1">Last updated</option>
                                            <option defaultValue="2">Name</option>
                                            <option defaultValue="3">Stars</option>
                                        </select>
                                    </div>
                                </li>
                            )

                        }) : <p>loading</p>
                    }
                </ul>
            </div>
        </section>
    )
}
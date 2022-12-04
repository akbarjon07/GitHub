import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./followers.css"


export function Followers() {

  const [data, setData] = useState([])

  useEffect(() => {
    async function getFollowers() {
      const res = await fetch("https://api.github.com/users/akbarjon07/followers")
      const result = await res.json()
      setData(result)
    }
    getFollowers()
  }, [])

  return (
    <section className="followers-section">
        <div className="container">

            <ul className="followers-list">
              {
                data.length > 0 ? data.map((item) => {
                  return (
                    <li key={item.node_id} className="followers-item">
                      <a href={item.html_url} className="d-flex text-decoration-none">
                        <img className="followers-img" src={item.avatar_url} alt="avatar" width={50} height={50} />

                        <h6 className="followers-login ms-5">{item.login}</h6>
                      </a>

                      <button className="btn btn-light btn-sm">Unfollow</button>
                    </li>
                  )
                }) : "Loading..."
              }
            </ul>
        </div>
    </section>
  )
}

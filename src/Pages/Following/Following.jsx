import "./following.css"
import { useState, useEffect } from "react"

export function Following() {

  const [data, setData] = useState([])

  useEffect(() => {
    async function getFollowers() {
      const res = await fetch("https://api.github.com/users/akbarjon07/following")
      const result = await res.json()
      setData(result)
    }
    getFollowers()
  }, [])


    return (
      <section className="following-section">
          <div className="container">

              <ul className="following-list">
              {
                data.length > 0 ? data.map((item) => {
                  return (
                    <li key={item.node_id} className="following-item">
                      <a href={item.html_url} className="d-flex text-decoration-none">
                        <img className="following-img" src={item.avatar_url} alt="avatar" width={50} height={50} />

                        <h6 className="following-login ms-5">{item.login}</h6>
                      </a>

                      <button className="btn btn-light">Unfollow</button>
                    </li>
                  )
                }) : "Loading..."
              }
            </ul>
          </div>
      </section>
    )
  }
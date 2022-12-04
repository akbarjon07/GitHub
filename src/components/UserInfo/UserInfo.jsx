import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import moment from "moment/moment"
import "./userInfo.css"

export const UserInfo = () => {

    const [info, setinfo] = useState([])

    useEffect(() => {
        async function getData () {
            const res = await fetch("https://api.github.com/users/akbarjon07");
            const data = await res.json()
            setinfo(data)
        }
        getData()
    }, [])





    return (
        <section className="user-info-section">
            <div className="container">
            <div className="info-wrapper">

                <img className="user-info-img" src={info.avatar_url} alt="" width={300} height={300}/>

                <h3 className="user-info-title">{info.name}</h3>

                <p className="user-info-login">{info.login}</p>

                <p className="user-info-bio">{info.bio}</p>

                <button className="user-info-btn btn btn-light">Edit profile</button>



                <div className="user-info-follow">

                    <i className="bi bi-people"></i>

                    <Link to={"/followers"} className='f-link d-flex'>

                        <span className="user-info-num span"><strong>{info.followers}</strong></span>

                        <p className="user-info-followers p">followers</p>

                    </Link>

                    <span className="span">·</span>

                    <Link to={"/following"} className='f-link d-flex'>

                    <span className="user-info-num span"><strong>{info.following}</strong></span>

                    <p className="user-info-following p">following</p>

                    </Link>

                </div>



                <div className="company wrapper">
                    <i className="bi bi-building"></i>
                    <p className="user-info-company desc">{info.company}</p>
                </div>

                <div className="location wrapper">
                    <i className="bi bi-geo-alt"></i>
                    <p className="user-info-location desc">{info.location}</p>
                </div>

                <div className="time wrapper">
                    <i className="bi bi-clock"></i>
                    <p className="user-info-time desc">{moment(info.updated_at).format('LT')} (UTC +05:00)</p>
                </div>

                <div className="blog wrapper">
                    <i className="bi bi-link-45deg"></i>
                    <p className="user-info-blog desc">{info.blog}</p>
                </div>

                <div className="twitter wrapper">
                    <i className="bi bi-twitter"></i>
                    <p className="user-info-twitter desc">{info.twitter_username}</p>
                </div>

            </div>
            </div>
        </section>
    )
}
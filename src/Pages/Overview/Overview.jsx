import './overview.css'
import { useState, useEffect } from 'react'

export const Overview = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://api.github.com/users/akbarjon07/repos");
            const result = await res.json()
            setData(result.slice(1,7));
        }
        fetchData()
    }, [])


  return (
    <section className='overview-section'>
        <div className="container">
            <div className='overview-wrapper'>
                <div className='overview-title-wrapper d-flex align-items-center justify-content-between'>
                    <h6 className='overview-title'>Popular repositories</h6>

                    <p className='overview-desc'>Customize your pins</p>
                </div>

                <ul className='overview-repos-list'>
                {
                    data.length > 0 ? data.map((item) => {
                        return (
                            <li key={item.url} className='overview-repos-item my-2'>
                                <div className='overview-repos-wrapper'>
                                    <a className='overview-repos-link' href={item.url} target="_blank">{item.name}</a>
                                    <p className='overview-repos-visibility'>{item.visibility}</p>
                                </div>

                                <div className='d-flex'>
                                    <div>
                                        <p className='overview-repos-description mb-2'>{item.description}</p>
                                        <div className='d-flex align-items-center'>
                                            <span className='d-span'></span>
                                            <p className='overview-repos-language ms-2'>{item.language}</p>
                                        </div>
                                    </div>

                                    <span></span>
                                </div>

                            </li>
                        )
                    }) : <p>loading...</p>
                }
                </ul>
            </div>
        </div>
    </section>
  )
}

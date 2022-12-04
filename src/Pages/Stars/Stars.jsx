import "./stars.css"

export const Stars = () => {
    return (
        <section className="stars-section">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <p>List(0)</p>

                    <div className="d-flex align-items-center">
                        <select className="form-select select-input" aria-label="Default select example">
                            <option selected>Sort</option>
                            <option defaultValue="1">Name ascending(A-Z)</option>
                            <option defaultValue="2">Name descending(Z-A)</option>
                            <option defaultValue="3">Newest</option>
                            <option defaultValue="3">Oldest</option>
                            <option defaultValue="3">Last updated</option>
                        </select>

                        <button className="btn btn-success ms-3">Create list</button>
                    </div>

                </div>

                <div className="star-wrapper">
                    <i className="bi bi-star mb-2"></i>

                    <h2 className="mb-2">Create your first list</h2>

                    <p className="mb-2">Lists make it easier to organize and curate repositories that you have starred. Create your first list.</p>
                </div>
            </div>
        </section>
    )
}
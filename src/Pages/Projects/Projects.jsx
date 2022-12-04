import "./projects.css"
export const Projects = () => {
    return (
        <section className="projects-section">
            <div className="container">
                <div className="project-wrapper">
                    <i class="bi bi-kanban mb-5"></i>

                    <h2 className="mb-2">Create your first GitHub project</h2>

                    <p className="mb-3">Projects are a customizable, flexible tool for planning and tracking your work.</p>

                    <button className="btn btn-success">New project</button>
                </div>
            </div>
        </section>
    )
}
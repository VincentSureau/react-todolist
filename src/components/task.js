const Task = ({task, toggleStatus, deleteTask}) => (
    <div className="card shadow border-0 mb-3 app-list__item p-3">
        <div className="row g-0">
            <div className="col-8">
                <h5 className={`card-title ${task.done ? 'text-decoration-line-through':''}`}>{task.title}</h5>
            </div>
            <div className="col-4 text-end">
                <button
                    className="btn btn-sm btn-primary mx-1"
                    onClick={() => toggleStatus(task.id)}
                >
                    <i className="bi bi-x"></i>
                </button>
                <button
                className="btn btn-sm btn-danger mx-1"
                onClick={() => deleteTask(task.id)}
                >
                <i className="bi bi-trash"></i>
                </button>
            </div>
        </div>
    </div>
)

export default Task;


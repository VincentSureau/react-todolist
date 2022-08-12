const TaskForm = ({addTask, newTask, setNewTask}) => (
    <form
        className="container mb-3 p-3"
        onSubmit={(e) => {
            e.preventDefault();
            addTask();
        }}
    >
        <div className="mb-3">
            <label htmlFor="task" className="form-label h3">Tâche</label>
            <input
                type="text"
                className="form-control shadow border-0"
                id="task"
                onChange={(e) => setNewTask(e.target.value)}
                value={newTask}
            />
        </div>
        <button type="submit" className="btn btn-primary w-100">Ajouter</button>
    </form>
);

export default TaskForm;
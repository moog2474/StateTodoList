import React from "react"
export default function todolist({
    tasks,
    onDoneTask,
    handleEdit,
    handleDelete
}) {
    return (
        <div className="col-md-4 w-50">
            {
                tasks.map((e) => {
                    return (
                        <div className="d-flex justify-content-between align-items-center ">
                            <div className="d-flex one1">
                                <input
                                    type="checkbox"
                                    checked={e.isDone}
                                    onChange={() => onDoneTask(e.id)} />
                                <h4>{e.title}</h4>
                            </div>
                            <button
                                className="btn btn-warning"
                                onClick={() => handleEdit(e.id, e.title, e.isDone)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(e.id)}
                            >
                                Delete
                            </button>
                        </div>
                    )
                }
                )}

        </div>
    )
}
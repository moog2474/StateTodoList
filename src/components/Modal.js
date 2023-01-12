import React from "react";

export default function Modal({ modal, setModal, id, setTask, task, addTask }) {
    const dn = modal ? "block" : "none";
    return (
        <div class="modal" tabindex="-1" style={{ display: dn }} onClick={setModal}>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header w-100">
                        <h5 class="modal-title m-0">Засах</h5>
                    </div>
                    <div class="modal-body w-100" onClick={(e) => e.stopPropagation()}>
                        <input
                            id="HaH"
                            className="form-control"
                            type="text"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            placeholder="task oruulna uu"
                        />

                        <input type="hidden" value={id} />
                    </div>
                    <div class="modal-footer">
                        <button onClick={addTask} type="button" class="btn btn-primary" data-bs-dismiss="modal">Add</button>
                        <button onClick={setModal} type="button" class="btn btn-secondary">Close</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
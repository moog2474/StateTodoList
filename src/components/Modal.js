import React from "react";

export default function Modal({ modal, setModal, addTask, id, obj, setObj, handleEdit }) {
    const dn = modal ? "block" : "none";
    return (
        <div class="modal" tabindex="-1" style={{ display: dn }} onClick={setModal}>
            <div class="modal-dialog" onClick={(e) => e.stopPropagation()}>
                <div class="modal-content">
                    <div class="modal-header w-100">
                        <h5 class="modal-title m-0">Add task</h5>
                    </div>
                    <div class="modal-body w-100">
                        <label type="text">Write task</label>
                        <input
                            id="HaH"
                            className="form-control"
                            type="text"
                            value={setObj.task}
                            onChange={(e) => {
                                setObj({ ...obj, title: e.target.value })
                            }}
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
        </div >

    )
}
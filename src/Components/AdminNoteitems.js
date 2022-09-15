import React from 'react'


function AdminNoteitems(props) {
    const { note } = props;
    return (
        <div className="col-md-4">
            <div className="card my-3 shadow-lg" style={{ color: props.mode === "dark" ? "white" : "black" }} >
                <div className="card-body">
                    <div className="d-flex align-items-center ">
                        <p className="card-title"><b>Title  :</b>{note.title}</p>
                        {/* <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                        <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i> */}
                    </div>
                    <p className="card-text"> <b>Description  :</b> {note.description}</p>
                    <p className="card-text"> <b>Email   :</b> {note.email}</p>

                </div>
            </div>
        </div>
  )
}

export default AdminNoteitems

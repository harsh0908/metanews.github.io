import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import {  useNavigate } from 'react-router-dom';
import AdminNoteitems from './AdminNoteitems';


const Allnews = (props) => {

    const context = useContext(noteContext);
    const { notes, getNews, editNote } = context;
    let navigate = useNavigate();
    useEffect(() => {
    if((localStorage.getItem('token'))){
           getNews()
    }
    else{
        navigate('/admin')
    }
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id: "", etitle: "", edescription: "",eemail:""})
    //  console.log({note})
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description , eemail: currentNote.email})
    }

    const handleClick = (e)=>{ 
        editNote(note.id, note.etitle, note.edescription,note.eemail)
        refClose.current.click();
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <div>
            
            
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div  className="modal fade" style={{ color: props.mode === "dark" ? "white" : "black" }} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit News</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">News Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">News Description</label>
                                    <textarea className="form-control"  rows="3" type="text"  id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required></textarea>
                                    {/* <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required/> */}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Your Email</label>
                                    <input type="email" className="form-control" id="eemail" name="eemail" value={note.eemail} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                                </div>
                                
 
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col my-3 container" style={{ color: props.mode === "dark" ? "white" : "black" }} >
            <h3 className={`text-center card shadow-lg p-3 mb-5 text-dark  bg-light`}>
                  Admin - MetaNews
                  </h3>

                <div className="container mx-2 " > 
                {notes.length===0 && 'No News to display'}
                </div>
                <div className='row'  style={{ color: props.mode === "dark" ? "white" : "black" }}>       
                         {notes.map((note) => {
                    return <AdminNoteitems key={note._id} updateNote={updateNote} note={note} />
                })}
                </div>

            </div>
            
        </div>

        
    )
}

export default Allnews
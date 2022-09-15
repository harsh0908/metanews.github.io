import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
// import Notes from "./Notes";

const AddNote = (props) => {
  // const [mode, setMode] = useState("light");

  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", email: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.email);
    setNote({ title: "", description: "", email: "" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className={`container `}>
      <section className="">
        <div className={`container-fluid h-custom `}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              {/* eslint-disable-next-line  */}
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="my photo"
              />
            </div>
            <div
              className={`col-md-8 col-lg-6 col-xl-4 offset-xl-1 `}>
              <h2  >
                Send Yours News
              </h2>
              <form className={`my-3 `}>
                <div
                  className={`mb-3 `}>
                  <label htmlFor="title"   className={`form-label `}>
                    News Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    aria-describedby="emailHelp"
                    value={note.title}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div
                  className={`mb-3 `} >
                  <label htmlFor="description"  className="form-label">
                    News Description
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={note.description}
                    onChange={onChange}
                    minLength={5}
                    required
                  ></textarea>
                  {/* <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required /> */}
                </div>
                <div
                  className={`mb-3`}
                >
                  <label htmlFor="email"  className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                    value={note.email}
                    onChange={onChange}
                    required
                  />
                </div>

                <button
                  disabled={
                    note.title.length < 5 || note.description.length < 5 || note.email.length < 5
                  }
                  type="submit"
                  className={`btn btn-primary mx-2`}
                  onClick={handleClick}
                >
                  Send News
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>

    // <div className="container my-3" style={{ color: props.mode === "dark" ? "light" : "dark" }}>
    // <h2 >Add a Note </h2>
    // <form className="my-3">
    //     <div className="mb-3">
    //         <label htmlFor="title" className="form-label">Title</label>
    //         <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required />
    //     </div>
    //     <div className="mb-3">
    //         <label htmlFor="description" className="form-label">Description</label>
    //         <textarea type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required ></textarea>
    //         {/* <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required /> */}
    //     </div>
    //     <div className="mb-3">
    //         <label htmlFor="tag" className="form-label">Tag</label>
    //         <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
    //     </div>

    //     <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
    // </form>
    // </div>
  );
};

export default AddNote;

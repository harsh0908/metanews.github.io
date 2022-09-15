import React from "react";
// import { Link } from "react-router-dom";

function NewsItems(props){
  
    let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className="container-fuild"  >
        <div  className={`card border-${props.mode === "light" ? "light" : "light"} border   border-5 shadow-lg bg-${props.mode === "light" ? "light" : "dark"} text-${props.mode === "light" ? "dark" : "light"}`} style={{ width: "400px" }}>
          <img src={!imageUrl?"https://i.dawn.com/large/2022/07/20123149ea07406.png?r=123310":imageUrl}  className="card-img-top " alt="..."    />
          <span className="badge  bg-secondary">{source}</span>
          
          <div className="card-body " style={{ width: "400px" }} >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
            Read more..
            </a>
          </div>
        </div>
      </div>
    );
      
}

export default NewsItems;

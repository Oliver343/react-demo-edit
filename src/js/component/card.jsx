import React from "react";

function Card (props) {
    return (
    <div className="card m-2 spaceAround">
        <div className="card-header p-0"><img src={props.img}></img></div>
        <div className="card-body setSize text-centered"><h2>{props.title}</h2><p>{props.text}</p></div>
        <div className="card-footer d-flex justify-content-around"><button className="btn btn-primary">Find out more</button></div>
    </div>
    )
}

export default Card
import React from "react";

const Card = (props) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card h-100">
                <img src={props.imagen} className="card-img-top" alt={props.titulo}/>
                <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{props.titulo}</h5>
                    <p className="card-text">{props.texto}</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
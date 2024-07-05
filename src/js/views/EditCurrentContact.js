import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/AddNewContact.css";



export const EditCurrentContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();



    const handleClick = () => {
		actions.fetchUpdateContact(id);
		actions.fetchGetContact();
		navigate("/"); 
	}


    return(
        <div className="container">
			<h1 className="fw-bold text-center">Editar contacto</h1>
			<div className="mb-3">
				<label className="form-label">Nombre completo </label>
				<input type="text" className="form-control" placeholder="Escribe un nombre " value={name} onChange={(e) => setName(e.target.value)} />
			</div>
			<div className="mb-3">
				<label className="form-label">Email</label>
				<input type="email" className="form-control" placeholder="Escribe un correo" value={email} onChange={(e) => setEmail(e.target.value)} />
			</div>
			<div className="mb-3">
				<label className="form-label">Phone</label>
				<input type="number" className="form-control" placeholder="Escribe un telefono" value={phone} onChange={(e) => setPhone(e.target.value)} />
			</div>
			<div className="mb-3">
				<label className="form-label">Adress</label>
				<input type="text" className="form-control" placeholder="Escribe una direccion" value={adress} onChange={(e) => setAdress(e.target.value)} />
			</div>
			<button onClick={handleClick} className="btn btn-primary w-100">Guardar cambios</button>
			<Link to="/">Volver a tus contactos</Link>
		</div>
    );
}
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

export const Formulario = ({ setAlert, setColaboradores, colaboradores }) => {
const [formulario, setFormulario] = useState({
nombre: "",
correo: "",
edad: "",
cargo: "",
telefono: "",
});

const handleOnChange = (valor) => {
setFormulario({...formulario, [valor.target.name]: valor.target.value })
};

const handleOnSubmit = (e) => {
e.preventDefault();
if(formulario.nombre === "" || formulario.correo === "" || formulario.edad === "" || formulario.cargo === "" || formulario.telefono === "" )
{setAlert({mensaje: "Por favor, completa todos los campos", color: "warning"}); return; }
setAlert({ mensaje: "Colaborador agregado", color: "success" });

const nuevosColaboradores = {...formulario, id: uuidv4()}
setColaboradores([...colaboradores, nuevosColaboradores]);

setFormulario({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  setTimeout(() => {
    setAlert({ mensaje: "", color: "" });}, 2000);
};

return (

<Form onSubmit={handleOnSubmit}>
<Form.Group>
<Form.Control className="mb-2" name="nombre" type="text" placeholder="Nombre del colaborador" onChange={handleOnChange} value={formulario.nombre} />
<Form.Control className="mb-2"name="correo" type="email" placeholder="hola@mundo.com" onChange={handleOnChange} value={formulario.correo}/>
<Form.Control className="mb-2"name="edad" type="text" placeholder="Edad" onChange={handleOnChange} value={formulario.edad}/>
<Form.Control className="mb-2"name="cargo" type="text" placeholder="Cargo" onChange={handleOnChange} value={formulario.cargo}/>
<Form.Control className="mb-3"name="telefono" type="text" placeholder="Teléfono" onChange={handleOnChange} value={formulario.telefono}/>
</Form.Group>
<Button variant="primary" type="submit" className="w-100">Agregar</Button>
</Form>
);};

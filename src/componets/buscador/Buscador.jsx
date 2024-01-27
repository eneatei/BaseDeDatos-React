import React, { useState } from 'react';
import { Form } from "react-bootstrap";

const Buscador = ({ colaboradores, setColaboradores }) => {
  const handleBuscador = (e) => {
    const buscador = e.target.value.toLowerCase();

    const colaboradoresFiltrados = colaboradores.filter(
      (colaborador) =>
        colaborador.nombre.toLowerCase().includes(buscador) ||
        colaborador.correo.toLowerCase().includes(buscador) ||
        colaborador.edad.includes(buscador) ||
        colaborador.cargo.toLowerCase().includes(buscador) ||
        colaborador.telefono.includes(buscador)
    );

    setColaboradores(colaboradoresFiltrados);
  };

  return (
    <Form className="mb-3">
    <Form.Control
      type="text"
      placeholder="Buscar colaborador..."
      value={search}
      onChange={handleBuscador}
    />
  </Form>
  );
}

export default Buscador;
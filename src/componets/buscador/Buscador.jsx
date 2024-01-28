import { Form } from "react-bootstrap";

const Buscador = ({ colaboradores, filterColaboradores }) => {
  const handleBuscador = (e) => {

    const buscador = e.target.value.toLowerCase();

    const resultadoBuscador = colaboradores.filter(
      (colaborador) =>
        colaborador.nombre.toLowerCase().includes(buscador) ||
        colaborador.correo.toLowerCase().includes(buscador) ||
        colaborador.edad.includes(buscador) ||
        colaborador.cargo.toLowerCase().includes(buscador) ||
        colaborador.telefono.includes(buscador)
    );

    filterColaboradores(resultadoBuscador);
  };

  return (
    <Form className="mb-3">
    <Form.Control
      type="text"
      name= "buscador"
      placeholder="Buscar colaborador..."
      onChange={handleBuscador}
    />
  </Form>
  );
}

export default Buscador;
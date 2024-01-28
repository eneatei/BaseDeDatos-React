import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Listado = ({ colaboradores, setColaboradores, filterColaboradores, setFilterColaboradores }) => {
  
  const borrarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
    setFilterColaboradores(nuevosColaboradores);
  };

  const renderTablaColaboradores = filterColaboradores.map((colaborador) => (
    <tr key={colaborador.id}>
      <td>{colaborador.nombre}</td>
      <td>{colaborador.correo}</td>
      <td>{colaborador.edad}</td>
      <td>{colaborador.cargo}</td>
      <td>{colaborador.telefono}</td>
      <td><FontAwesomeIcon icon={faTrash} onClick={() => borrarColaborador(colaborador.id)} /></td>
    </tr>
  ));

  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {renderTablaColaboradores}
      </tbody>
    </Table>
  );
};

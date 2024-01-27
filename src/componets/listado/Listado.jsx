import { Table } from "react-bootstrap"

export const Listado = ({ colaboradores, setColaboradores }) => {

const renderTablaColaboradores = () => {
return colaboradores.map((colaborador) => (
  <tr key={colaborador.id}>
    <td>{colaborador.nombre}</td>
    <td>{colaborador.correo}</td>
    <td>{colaborador.edad}</td>
    <td>{colaborador.cargo}</td>
    <td>{colaborador.telefono}</td>
    </tr>
  ))}


return (
<Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
          {/* <th>Eliminar</th> */}
        </tr>
      </thead>
      <tbody>
        {renderTablaColaboradores()}
        </tbody>
    </Table>
  )
}

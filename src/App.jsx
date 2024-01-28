import { Row, Col } from 'react-bootstrap';
import { Listado } from "./componets/listado/Listado.jsx";
import { BaseColaboradores } from './bd/BaseColaboradores.js';
import { useState } from 'react';
import { Formulario } from './componets/formulario/Formulario.jsx';
import { Alerta } from './componets/alert/Alerta.jsx';
import './App.css'
import Buscador from './componets/buscador/Buscador.jsx';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filterColaboradores, setFilterColaboradores] = useState(colaboradores);

  const [alert, setAlert] = useState({
    mensaje: "",
    color: "",
  });


  return (
    <div className="mx-4">
      <h1 className="Text-start">Lista de colaboradores</h1>
      <Row>
        <Col sm={4}>
          <Buscador
          colaboradores={colaboradores}
          filterColaboradores={setFilterColaboradores}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={9}>
          <Listado
          colaboradores={colaboradores}
          setColaboradores={setColaboradores}
          filterColaboradores={filterColaboradores}
          setFilterColaboradores={setFilterColaboradores}
          />
        </Col>
        <Col md={3}>
          <h4>Agregar colaborador</h4>
          <Formulario
          setAlert={setAlert}
          setColaboradores={setColaboradores}
          colaboradores={colaboradores}/>
          {alert.mensaje !== "" && <Alerta mensaje={alert.mensaje} color={alert.color} />}
        </Col>
      </Row>
    </div>
  );
}

export default App;

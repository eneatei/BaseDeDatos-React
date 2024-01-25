import { Alert } from "react-bootstrap"

export const Alerta = ({ mensaje, color }) => {
  return (
    <Alert variant={color}>{mensaje}</Alert>
  )
}

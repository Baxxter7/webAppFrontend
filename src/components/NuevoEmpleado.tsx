import { ChangeEvent, useState } from "react";
import { appsettings } from "../settings/appsettings";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { IEmpleado } from "../Interfaces/IEmpleado";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

const initialEmpleado = {
    nombre: "",
    correo: "",
    sueldo: 0
}

export function NuevoEmpleado() {
    const [empleado, setEmpleado] = useState<IEmpleado>(initialEmpleado);
    const navigate = useNavigate();

    const inputChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        setEmpleado({ ...empleado, [inputName]: inputValue });
    }

    const volver = () => {
        navigate("/")
    }

    const guardar = async () => {
        const response = await fetch(`${appsettings.apiUrl}Empleado`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(empleado)
        });

        if (response.ok) {
            volver();
            console.log("Registro guardado exitosamente");
            
        } else {
            Swal.fire({
                title: "Error!",
                text: "No se pudo guardar el empleado",
                icon: "warning"
            });
        }
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col sm={{ size: 8, offset: 2 }}>
                    <h4>Nuevo Empleado</h4>
                    <hr />
                    <Form>
                        <FormGroup>
                            <Label>Nombre</Label>
                            <Input type="text" name="nombre" onChange={inputChangeValue} value={empleado.nombre} />
                            <Label>Correo</Label>
                            <Input type="text" name="correo" onChange={inputChangeValue} value={empleado.correo} />
                            <Label>Sueldo</Label>
                            <Input type="number" name="sueldo" onChange={inputChangeValue} value={empleado.sueldo} />
                        </FormGroup>
                        <Button color="primary" className="me-4" onClick={guardar}>Guardar</Button>
                        <Button color="secondary" onClick={volver}>Volver</Button>
                    </Form>

                </Col>
            </Row>
        </Container>
    )
}
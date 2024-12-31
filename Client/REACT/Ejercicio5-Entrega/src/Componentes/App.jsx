import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
} from "reactstrap";

let lista = [];

const alumnos = [];

export default class App extends React.Component {
  state = {
    alumnos: alumnos,
    modalError: false,
    modalId: false,
    modalDelete: false,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombre: "",
      grupo: "",
    },
    mensaje: ""
  };

  insertar = () => {
    var valorNuevo= {...this.state.form};
    this.validarCreate(valorNuevo);
  }

  editar = (editarAlumno) => {
    var indice = 0;
    var alumnos = this.state.alumnos;
    alumnos.map((alumno) => {
      if (editarAlumno.id == alumno.id) {
        this.validarUpdate(editarAlumno, indice);
      }
      indice++;
    });
  };

    eliminar = (id) => {
      var indice = 0;
      var alumnos = this.state.alumnos;
      alumnos.map((alumno) => {
        if (id == alumno.id) {
          alumnos.splice(indice, 1);
        }
        indice++;
      });
      this.setState({ alumnos: alumnos, modalDelete: false, alumno: lista });
  };

  validarCreate = (alumno) => {
        if (alumno.id != "" && alumno.nombre != "" && alumno.grupo != "")
        {
            lista = this.state.alumnos;
            lista.push(alumno);
            this.setState({ modalInsertar: false, alumno: lista });
        }
        else
        {
            this.setState({modalError: true, mensaje: <h3>Todos los Campos son Obligatorios. Por Favor Verifica si Falta Algún Dato. Gracias.</h3>})
        }
    }

    validarUpdate = (alumno, indice) => {
        if (alumno.nombre != "" && alumno.grupo != "")
        {
            alumnos[indice].nombre = alumno.nombre;
            alumnos[indice].grupo = alumno.grupo;
            this.setState({ alumnos: alumnos, modalActualizar: false, alumno: lista });
        }
        else
        {
            this.setState({modalError: true, mensaje: <h3>Todos los Campos son Obligatorios. Por Favor Verifica si Falta Algún Dato. Gracias.</h3>})
        }
    }

  mostrarModalError = (mensaje) => {
    this.setState({mensaje: mensaje, modalError: true });
  };

  cerrarModalError = () => {
    this.setState({modalError: false });
  };

  mostrarModalId = () => {
    this.setState({modalId: true });
  };

  cerrarModalId = () => {
    this.setState({modalId: false });
  };

  mostrarModalInsertar = () => {
    this.setState({modalInsertar: true });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  mostrarModalActualizar = (alumno) => {
    this.setState({ form: alumno, modalActualizar: true });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalDelete = (alumno) => {
    this.setState({form: alumno, modalDelete: true});
  }

  cerrarModalDelete = () => {
    this.setState({modalDelete: false});
  }

  handleChange = (e) => {
    while (lista.some((alumno) => e.target.value == alumno.id))
    {
        this.mostrarModalId();
        e.target.value = "";
    }
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
  };

  render() {
    
    return (
        <Container>
            <h1>Base de Datos de Alumnos del Centro</h1>
            <br />
          <Button color="success" onClick={() => this.mostrarModalInsertar()}>Crear</Button>
          <br /> <br />
          {alumnos.length ? (
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Grupo</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              { this.state.alumnos.map((alumno) => (
                <tr key={alumno.id}>
                  <td>{alumno.id}</td>
                  <td>{alumno.nombre}</td>
                  <td>{alumno.grupo}</td>
                  <td>
                    <Button color="primary" onClick={() => this.mostrarModalActualizar(alumno)}>
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.mostrarModalDelete(alumno)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          ) : (
            <h3>La Lista Está Vacía, Agrega Alumnos.</h3>
          )}

            <Modal isOpen={this.state.modalError}>
            <ModalHeader>
                <div className="error"><h1>Error:</h1></div>
            </ModalHeader>

            <ModalBody>
                {this.state.mensaje}
            </ModalBody>

            <ModalFooter>
            <Button color="success" onClick={() => this.cerrarModalError()}>
            Aceptar
            </Button>
            </ModalFooter>
            </Modal>

            <Modal isOpen={this.state.modalId}>
            <ModalHeader>
                <div className="error"><h1>Error:</h1></div>
            </ModalHeader>

            <ModalBody>
                <div><h3><strong>Lo Siento Esa ID Está en Uso.</strong></h3></div>
                <div><h4>Por Favor Elige Otra, Mira en la Lista que ID Está Disponible.</h4></div>
            </ModalBody>

            <ModalFooter>
            <Button color="success" onClick={() => this.cerrarModalId()}>
            Aceptar
            </Button>
            </ModalFooter>
            </Modal>

            <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader>
            <div><h3>Ingresa los Datos del Alumno</h3></div>
            </ModalHeader>

            <ModalBody>
            <FormGroup>
            <label htmlFor="id">
                Id: 
            </label>
            <input id="id" name="id" type="number" className="form-control" onChange={this.handleChange} required />
            <span id="sid">Completa el campo ID</span>
            </FormGroup>

            <FormGroup>
            <label htmlFor="nombre">
                Nombre: 
            </label>
            <input id="nombre" name="nombre" type="text" className="form-control" onChange={this.handleChange} required />
            <span id="snombre">Completa el campo Nombre</span>
            </FormGroup>

            <FormGroup>
            <label htmlFor="grupo">
                Grupo: 
            </label>
                <select id="grupo" name="grupo" type='text' className="form-control" onChange={this.handleChange} required >
                    <option value={""}>Selecciona un Grupo</option>
                    <option value={"A"}>Grupo A</option>
                    <option value={"B"}>Grupo B</option>
                </select>
                <span id="sgrupo">Selecciona un Grupo</span>
            </FormGroup>
            </ModalBody>

            <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}>
            Agregar
            </Button>
            <Button color="secondary" onClick={() => this.cerrarModalInsertar()}>
            Cancelar
            </Button>
            </ModalFooter>
            </Modal>

            <Modal isOpen={this.state.modalActualizar}>
            <ModalHeader>
            <div><h3>Editar Datos del Alumno</h3></div>
            </ModalHeader>

            <ModalBody>
            <FormGroup>
            <label htmlFor="id">
                Id:
            </label>
            <input readOnly id="id" name="id" className="form-control" value={this.state.form.id} />
            </FormGroup>

            <FormGroup>
            <label htmlFor="nombre">
                Nombre:
            </label>
            <input id="nombre" name="nombre" type="text" className="form-control" onChange={this.handleChange} value={this.state.form.nombre} required />
            <span id="snombre">Completa el Campo Nombre</span>
            </FormGroup>

            <FormGroup>
            <label htmlFor="grupo">
                Grupo:
            </label>
            <select id="grupo" name="grupo" type='text' className="form-control" onChange={this.handleChange} value={this.state.form.grupo} required >
                    <option value={""}>Selecciona un Grupo</option>
                    <option value={"A"}>Grupo A</option>
                    <option value={"B"}>Grupo B</option>
                </select>
                <span id="sgrupo">Selecciona un Grupo</span>
            </FormGroup>
            </ModalBody>

            <ModalFooter>
            <Button color="primary" onClick={() => this.editar(this.state.form)}>
            Editar
            </Button>
            <Button color="secondary" onClick={() => this.cerrarModalActualizar()}>
            Cancelar
            </Button>
            </ModalFooter>
            </Modal>

            <Modal isOpen={this.state.modalDelete}>
            <ModalHeader>
                <div className="error"><h1>Borrar Alumno:</h1></div>
            </ModalHeader>

            <ModalBody>
                <div><h3><strong>¿Estás Seguro que Quieres Eliminar el Alumno con ID: {this.state.form.id} de la Base de Datos?</strong></h3></div>
            </ModalBody>

            <ModalFooter>
            <Button color="danger" onClick={() => this.eliminar(this.state.form.id)}>
            Eliminar
            </Button>
            <Button color="success" onClick={() => this.cerrarModalDelete()}>
            Cancelar
            </Button>
            </ModalFooter>
            </Modal>
        </Container>
    );
  }
}
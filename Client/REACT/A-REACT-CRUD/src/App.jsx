import React from "react";
import "./App.css";
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

const alumno = [{
    id: 1,
    nombre: "César Matelat", 
    grupo: "A"
}];

class App extends React.Component {
  state = {
    alumno: alumno,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombre: "",
      grupo: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var alumnos = this.state.alumno;
    alumnos.map((registro) => {
      if (dato.id == registro.id) {
        alumnos[contador].nombre = dato.nombre;
        alumnos[contador].grupo = dato.grupo;
      }
      contador++;
    });
    this.setState({ alumno: alumnos, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var alumnos = this.state.alumno;
      alumnos.map((registro) => {
        if (dato.id == registro.id) {
          alumnos.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ alumno: alumnos, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    var index = alumno.length - 1;
    valorNuevo.id=this.state.alumno[index].id + 1;
    var lista = this.state.alumno;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, alumno: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
        // <main className="content">
        <>
        <Container>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <br /> <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>nombre</th>
                <th>grupo</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              { this.state.alumno.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.grupo}</td>
                  <td>
                    <Button color="primary" onClick={() => this.mostrarModalActualizar(dato)}>
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input className="form-control" readOnly type="text" value={this.state.form.id} />
            </FormGroup>
            
            <FormGroup>
              <label>
                nombre: 
              </label>
              <input className="form-control" name="nombre" type="text" onChange={this.handleChange} value={this.state.form.nombre} />
            </FormGroup>
            
            <FormGroup>
              <label>
                grupo: 
              </label>
              <select id='group' type='text' name="grupo" onChange={this.handleChange} required>
                    <option value={""}>Selecciona un Grupo</option>
                    <option value={"A"}>Grupo A</option>
                    <option value={"B"}>Grupo B</option>
                </select>
                &nbsp;<label htmlFor="group">Grupo</label>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.editar(this.state.form)}>
              Editar
            </Button>
            <Button color="danger" onClick={() => this.cerrarModalActualizar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar nombre</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input className="form-control" readOnly type="text" value={this.state.alumno[alumno.length - 1].id + 1} />
            </FormGroup>
            
            <FormGroup>
              <label>
                nombre: 
              </label>
              <input className="form-control" name="nombre" type="text" onChange={this.handleChange} />
            </FormGroup>
            
            <FormGroup>
                <select id='group' type='text' name="grupo" onChange={this.handleChange} required>
                    <option value={""}>Selecciona un Grupo</option>
                    <option value={"A"}>Grupo A</option>
                    <option value={"B"}>Grupo B</option>
                </select>
                &nbsp;<label htmlFor="group">Grupo</label>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}>
              Insertar
            </Button>
            <Button className="btn btn-danger" onClick={() => this.cerrarModalInsertar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
        </>
    );
  }
}
export default App;
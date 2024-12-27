const Footer = ({ Alumnos }) => {
    return (
      <footer className="footer">
        <h3>
          {/* {Alumnos.length} Lista {list.length === 1 ? "Producto" : "Productos"}{" "} */}
          {Alumnos.length === 1 ? "Hay " + Alumnos.length + " Alumno en la Lista" : "Hay " + Alumnos.length + " Alumnos en la Lista"}{" "}
        </h3>
      </footer>
    );
  };
  
  export default Footer;
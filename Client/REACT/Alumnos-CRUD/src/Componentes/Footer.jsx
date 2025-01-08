const Footer = ({ alumnos }) => {
    return (
      <footer className="footer">
        <h3>
          {alumnos.length === 1 ? "Hay " + alumnos.length + " Alumno en la Lista" : "Hay " + alumnos.length + " Alumnos en la Lista"}{" "}
        </h3>
      </footer>
    );
  };
  
  export default Footer;
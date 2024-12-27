const Footer = ({ list }) => {
    return (
      <footer className="footer">
        <h3>
          {/* {list.length} Lista {list.length === 1 ? "Producto" : "Productos"}{" "} */}
          {list.length === 1 ? "Hay " + list.length + " Producto en la Lista" : "Hay " + list.length + " Productos en la Lista"}{" "}
        </h3>
      </footer>
    );
  };
  
  export default Footer;
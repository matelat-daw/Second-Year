const Content = ({ list, handleCheck, handleDelete }) => {
    return (
      <main className="content">
        {list.length ? (
          <ul>
            {list.map((item) => {
              return (
                <li className="list" key={item.id}>
                  <label onDoubleClick={() => handleCheck(item.id)}>
                    <span className="h3">{item.item}</span>
                  </label>
                  <button className="small" onClick={() => handleDelete(item.id)}>Elimina</button>
                </li>
              );
            })}
          </ul>
        ) : (
          <h3
            style={{
              marginTop: "2rem",
            }}
          >
            {" "}
            La Lista Está Vacía{" "}
          </h3>
        )}
      </main>
    );
  };
  
  export default Content;
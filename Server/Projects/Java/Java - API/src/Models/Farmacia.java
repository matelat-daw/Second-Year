package Models;

public class Farmacia {
    private String Lunes;
    private String Nombre;
    private String Web;

    // public Farmacia(String Lunes, String Nombre, String Web)
    // {
    //     this.Lunes = Lunes;
    //     this.Nombre = Nombre;
    //     this.Web = Web;
    // }

    public void SetLunes(String monday)
    {
        if (monday != "")
        {
            this.Nombre = monday;
        }
        else
        {
            throw new IllegalArgumentException("El Campo Lunes no Puede essta Vacío.");
        }
    }

    public String GetLunes() {
        return Lunes;
    }

    public void SetName(String name)
    {
        if (name != "")
        {
            this.Nombre = name;
        }
        else
        {
            throw new IllegalArgumentException("El Campo Nombre no Puede essta Vacío.");
        }
    }

    public String GetNombre() {
        return Nombre;
    }

    public void SetWeb(String web)
    {
        if (web != "")
        {
            this.Nombre = web;
        }
        else
        {
            throw new IllegalArgumentException("El Campo Web no Puede essta Vacío.");
        }
    }

    public String GetWeb() {
        return Web;
    }
}
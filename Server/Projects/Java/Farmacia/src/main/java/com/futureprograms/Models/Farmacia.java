package com.futureprograms.Models;

public class Farmacia {
    private String WEB;
    private String LUNES;
    private String TELEFONO;
    private String NOMBRE;
    private float UTM_X;
    private float UTM_Y;

    public Farmacia(String web, String LUNES, String phone, String name, float UTM_X, float UTM_Y) {
        setWEB(web);
        setLUNES(LUNES);
        setTELEFONO(phone);
        setNOMBRE(name);
        setUTM_X(UTM_X);
        setUTM_Y(UTM_Y);
    }

    public void setWEB(String Web)
    {
        this.WEB = Web;
    }

    public String getWEB()
    {
        return this.WEB;
    }

    public void setLUNES(String Lunes)
    {
        this.LUNES = Lunes;
    }

    public String getLUNES()
    {
        return this.LUNES;
    }

    public void setTELEFONO(String Telefono)
    {
        this.TELEFONO = Telefono;
    }

    public String getTELEFONO()
    {
        return this.TELEFONO;
    }

    public void setNOMBRE(String Nombre)
    {
        this.NOMBRE = Nombre;
    }

    public String getNOMBRE()
    {
        return this.NOMBRE;
    }

    public void setUTM_X(float UTM_X)
    {
        this.UTM_X = UTM_X;
    }

    public float getUTM_X()
    {
        return this.UTM_X;
    }

    public void setUTM_Y(float UTM_Y)
    {
        this.UTM_Y = UTM_Y;
    }

    public float getUTM_Y()
    {
        return this.UTM_Y;
    }

    @Override
    public String toString() {
        return "Farmacia:" +
                "Web='" + WEB + '\'' +
                ", Lunes='" + LUNES + '\'' +
                ", Telefono='" + TELEFONO + '\'' +
                ", Nombre='" + NOMBRE + '\'' +
                ", UTM_X=" + UTM_X +
                ", UTM_Y=" + UTM_Y +
                '\n';
    }
}
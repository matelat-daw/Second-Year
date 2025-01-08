package com.futureprograms;

import com.futureprograms.Controllers.FarmaciaController;
import java.util.Scanner;

public class Main {
    private static final Scanner sc = new Scanner(System.in);
    private static FarmaciaController fc;
    private static int option;

    public static void main(String[] args) throws Exception {
        System.out.println("Te Damos La Bienvenida.");
        fc = new FarmaciaController();
        PrintMainMenu();
        try {
            boolean ok = fc.saveFarmacias();
            if (ok)
            {
                System.out.println("Se ha Persistido la Lista de Farmacias en el Fichero farmacias.json");
            }
        } catch (Exception e)
        {
            System.out.println("Ocurrió el Error: " + e.getMessage());
        }
    }

    private static void PrintMainMenu() throws Exception {
        do {
            System.out.println("|---------------------|");
            System.out.println("|    Menú Principal   |");
            System.out.println("|_____________________|");
            System.out.println();
            System.out.println("Elija una de las Siguientes Opciones:");
            System.out.println();
            System.out.println("1) Ver Lista de Farmacias");
            System.out.println("2) Buscar Farmacia");
            System.out.println("0) Salir");
            System.out.println("-------------------------");
            System.out.println("9) Administrador.\n");
            System.out.print("Introduzca una Opción: ");
            option = getOption();
            switch (option) {
                case 0:
                    System.out.println("Cerrando la Aplicación:");
                    break;
                case 1:
                    String farmacias = fc.listarFarmacias();
                    System.out.println(farmacias);
                    System.out.println();
                    break;
                case 2:
                    System.out.print("Ingresa al Menos una parte del Nombre de la Farmacia a Buscar: ");
                    String name = sc.nextLine();
                    String farmacia = fc.buscarFarmacia(name);
                    System.out.println("La Farmacia es: " + farmacia);
                    break;
                case 9:
                    goAdminMenu();
                    break;
                default:
                    System.out.println("La Opción no es Correcta, Ingresa 0, 1, 2 ó 9");
            }
        } while (option != 0);
    }

    private static int getOption() throws Exception {
        try {
                return Integer.parseInt(sc.nextLine());
        } catch (Exception e)
        {
            throw new Exception("Tienes que Introducir un Número Como se Describe en el Menú. Gracias.");
        }
    }

    private static void goAdminMenu() throws Exception {
        PrintAdminMenu();
    }

    private static void PrintAdminMenu() throws Exception {
        do {
            System.out.println("|---------------------|");
            System.out.println("|Menú de Administrador|");
            System.out.println("|_____________________|");
            System.out.println();
            System.out.println("Elija una de las Siguientes Opciones:");
            System.out.println();
            System.out.println("1) Añadir Farmacia");
            System.out.println("2) Borrar Farmacia");
            System.out.println("0) Salir del Menú de Administrador");
            System.out.println();
            System.out.print("Introduzca una Opción: ");
            option = getOption();
            switch (option) {
                case 0:
                    PrintMainMenu();
                    break;
                case 1:
                    addFarmaciaInput();
                    break;
                case 2:
                    removeFarmacia();
                    break;
                default:
                    System.out.println("La Opción no es Correcta, Ingresa 0, 1 ó 2");
            }
        } while (option != 0);
    }

    private static void addFarmaciaInput()
    {
        System.out.print("Ingresa el Nombre de la Farmacia: ");
        String name = sc.nextLine();
        System.out.print("Ingresa el Teléfono de la Farmacia: ");
        String phone = sc.nextLine();
        System.out.print("Ingresa la Web de la Farmacia: ");
        String web = sc.nextLine();
        fc.insertarFarmacia(name, phone, web);
    }

    private static void removeFarmacia()
    {
        System.out.print("Ingresa el Teléfono de la Farmacia a Eliminar: ");
        String phone = sc.nextLine();
        System.out.println(fc.borrarFarmacia(phone));
    }
}
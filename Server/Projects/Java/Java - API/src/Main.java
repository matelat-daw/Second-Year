import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Game game = new Game();
        game.SetName("Tomb Raider I");
        game.SetPrice(15.50);
        Scanner input = new Scanner(System.in);
        int option = 0;

        System.out.printf("Te Damos La Bienvenida.");
        System.out.println();
        while (option != 6) {
            System.out.println("1) Ver Lista de Juegos");
            System.out.println("2) Crear un Nuevo Juego");
            System.out.println("3) Leer un Juego por su ID");
            System.out.println("4) Modificar un Juego");
            System.out.println("5) Borrar un Juego");
            System.out.println("6) Salir");
            System.out.println();
            System.out.printf("Por Favor Selecciona una Opción del Menú: ");
            option = input.nextInt();
            switch (option)
            {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
                default:
            }
            System.out.println("Seleccionaste la opción: " + option);
        }
    }
}
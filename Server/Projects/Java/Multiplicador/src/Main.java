import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {

        int number;
        // BufferedReader consoleInput = new BufferedReader(new InputStreamReader(System.in));
        // Scanner consoleInput = new Scanner(new InputStreamReader(System.in));
        Scanner consoleInput = new Scanner(System.in);

        System.out.print("Ingresa un Número: ");
        // number = Integer.parseInt(consoleInput.readLine());
        number = Integer.parseInt(consoleInput.nextLine());
        System.out.println("El Resultado es: " + number * 10);
    }
}
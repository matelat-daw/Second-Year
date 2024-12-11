import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        int number1;
        int number2;
        Scanner consoleInput = new Scanner(System.in);
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
        System.out.print("Ingresa el Primer Número: ");
        number1 = consoleInput.nextInt();
        System.out.print("Ingresa el Segundo Número: ");
        number2 = consoleInput.nextInt();
        int sum = number1 + number2;

        System.out.println("La Suma del Número: " + number1 + " y el Número: " + number2 + " es: " + sum);
    }
}
import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        int year;
        int thisYear;
        int age;
        Scanner consoleInput = new Scanner(System.in);
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
        System.out.print("Ingresa tu Año de Nacimiento: ");
        year = consoleInput.nextInt();
        System.out.print("Ingresa el Año Actual: ");
        thisYear = consoleInput.nextInt();
        age = thisYear - year;
        System.out.println("Tu Edad es: " + age);
    }
}
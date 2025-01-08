<?php
$title = "Página de Contacto - Ticket.es"; // Página de contacto, llamada por el script contact.php.
include "includes/header.php";
include "includes/modal2.html";
include "includes/nav-contact.html";
include "includes/nav-mob-contact.html";
?>
<section class='container-fluid pt-3'>
    <div class='row'>
        <div class='col-sm-1'></div>
            <div class='col-sm-10'>
                <div id='page_top'>
                    <br><br><br><br>
                    <?php
                    if (isset($_POST["callme"])) // Si recibe datos por POST.
                    {
                        $call = $_POST["callme"];
                        $date = $_POST["date"];
                        $email = $_POST["email"];
                        $phone = $_POST["phone"];
                        $latindate = explode("-", $date);
                        $date = $latindate[2] . "/" . $latindate[1] . "/" . $latindate[0];
                        $start = $_POST["starthour"];
                        $end = $_POST["endhour"];
                        echo "<h1>Nos Pondremos en Contacto Contigo por $call";
                        if ($phone != 1)
                        {
                            echo " al: $phone";
                        }
                        else
                        {
                            echo " a: $email";
                        }
                        echo ", el día $date entre las Horas: $start y $end, Gracias.</h1>"; // Nos pondremos en contacto contigo.
                        echo "<input type='hidden' id='mssg' value='";
                        if ($phone != 1)
                        {
                            echo $phone;
                        }
                        else
                        {
                            echo $email;
                        }
                        echo " el día $date, desde las: $start, hasta las $end.'>";
                        echo "<br><h3>Si estás conectado con el Teléfono, al Hacer click en el botón de debajo seleccioná la App WhatsApp para enviar un mensaje para ponernos en contacto contigo.</h3>";
                        echo "<br><h3>Si estás en un ordenador, se abrirá una página y deberás hacer click en el botón Continuar al chat, si está instalado, se abrirá el WhatsApp, si no, se abrirá otra página donde tienes que hacer click en Usar WhatsApp Web. Por Favor completa el mensaje agregando tu nombre al final. Gracias</h3>";
                        echo "<br><button onclick='connect(" . json_encode($call) . ")' class='btn btn-primary' style='width: 160px; height: 80px;'>Entra en Contacto.</button>";
                    }
                    else
                    {
                        echo "<script>toast(2, 'Error Grave:', 'Haz Llegado Aquí por Error.');</script>";
                    }
                    ?>
                </div>
            </div>
        <div class='col-sm-1'></div>
    </div>
</section>
<br>
<br>
<button class="btn btn-danger" onclick="window.close()">Cierra Esta Ventana</button>
<br>
<?php
include "includes/footer.html";
?>
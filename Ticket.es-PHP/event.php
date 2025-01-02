<?php
include "includes/conn.php";
$title = "Ticket.es - Resultados de Eventos"; // Título de la página
include "includes/car.html";
include "includes/header.php"; // El Header HTML 5.
$ok = false;
include "includes/modal.html"; // Este diálogo muestra los errores.
include "includes/modal-carrousel.html"; // Este diálogo muestra las Imágenes de los eventos.
include "loguedin.php";
include "includes/showLogin.php";
logued($conn);

if (isset($_REQUEST["kind"])) // Si llegan datos por POST.
{
    $kind = $_REQUEST["kind"];
    if (!isset($_REQUEST["place"]))
    {
        $place = "";
    }
    else
    {
        $place = $_REQUEST["place"];
    }
    include "includes/showEvents.php";
    fromEvents($conn, $kind, $place);
}
else
{
    echo "<script>toast(2, 'Error:', 'Has Llegado Aquí por error.');</script>"; // Si se entra sin enviar datos por POST, error.
}
if (isset($_SESSION["idc"]))
{
    include "nav-emp.html";
    include "nav-mob-emp.html";
    $id = $_SESSION["idc"]; // Asigno a $id el valor de la sesión id.
    $sql = "SELECT * FROM company WHERE id=$id;"; // Preparo la consulta buscando solo por la id.
    $ok = show($conn, $sql, "", "comp"); // Asigno a la variable $ok el resultado de la función show().
    echo "</div></nav>";
}
else
{
    if (isset($_SESSION["id"]))
    {
        include "nav-esp.html";
        include "nav-mob-esp.html";
        echo "</div></nav>";
    }
    else
    {
        echo '
        <div id="pc"></div>
        <div id="mobile"></div>';
    }
}
?>
<section class="container-fluid pt-3">
    <div class="row">
        <div class="col-md-10">
            <div id="page_top">
                <br><br><br><br>
                <?php
                    if ($ok)
                    {
                        echo "<script>var kind = '';</script>";
                        echo "<script>kind = '" . $kind . "';</script>";
                        echo "<script>var id = [];</script>";
                        echo "<script>var evento = [];</script>";
                        echo "<script>var path = [];</script>";
                        echo "<script>var desc = [];</script>";
                        echo "<script>var price = [];</script>";
                        echo "<script>var where = [];</script>";
                        echo "<script>var start = [];</script>";
                        echo "<script>var end = [];</script>";
                        echo "<script>var hour = [];</script>";
                        for ($i = 0; $i < count($event); $i++)
                        {
                            echo "<script>id[" . $i . "] = '" . $id[$i] . "';</script>";
                            echo "<script>evento[" . $i . "] = '" . $event[$i] . "';</script>";
                            echo "<script>path[" . $i . "] = '" . $path[$i] . "';</script>";
                            echo "<script>desc[" . $i . "] = '" . $desc[$i] . "';</script>";
                            echo "<script>price[" . $i . "] = '" . $price[$i] . "';</script>";
                            echo "<script>where[" . $i . "] = '" . $where[$i] . "';</script>";
                            echo "<script>start[" . $i . "] = '" . $start[$i] . "';</script>";
                            echo "<script>end[" . $i . "] = '" . $end[$i] . "';</script>";
                            echo "<script>hour[" . $i . "] = '" . $hour[$i] . "';</script>";
                        }
                        ?>
                        <div id="table"></div>
                        <br>
                        <span id="page"></span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onclick="prev()" id="prev">Anteriores Resultados</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onclick="next()" id="next">Siguientes Resultados</button><br>
                        <script>change(1, 5, "events");</script>
                        <?php
                    }
                ?>
            </div>
        </div>
    </div>
    <br><br>
</section>
<?php
include "includes/footer.html";
?>
<?php
for ($i = 0; $i < count($_POST); $i++)
{
    if (isset($_POST["art" . $i + 1]))
    {
        $id[$i] = $_POST["id" . $i + 1];
        $art[$i] = $_POST["art" . $i + 1];
        $total[$i] = $_POST["total" . $i + 1];
        echo "Artículo con ID: " . $id[$i] . ": " . $art[$i] . " Unidades";
        echo " Total a Pagar: " . $total[$i] . "<br>";
    }
}
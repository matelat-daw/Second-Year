<?php
for ($i = 0; $i < count($_POST); $i++)
{
    if (isset($_POST["art" . $i + 1]))
    {
        $id[$i] = $_POST["id" . $i + 1];
        $art[$i] = $_POST["art" . $i + 1];
        $total[$i] = $_POST["total" . $i + 1];
        $full += $total[$i];
        echo "Artículo con ID: " . $id[$i] . ": " . $art[$i] . " Unidades";
        echo ", Parcial a Pagar: " . $total[$i] . "<br>";
    }
}
echo "Total a Pagar: " . $full;
echo "<script>localStorage.setItem('total', $full)</script>";
echo "<script>window.open('prepay/index.html')</script>";
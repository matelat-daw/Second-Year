// El método getElementsByTagName retorna un colección con todos los elementos que tienen la etiqueta que hemos especificado
// Selecciona todos los elementos li completando la siguiente plantilla

document.getElementsByTagName("li");

// El método getElementsByTagName permite seleccionar un elemento determinado indicando su posición en la colección
// Selecciona el elemento "dos" de la lista completando la siguiente plantilla

document.getElementsByTagName("li")[1];

// El método previousElementSibling nos permite seleccionar el elemento anterior de uno dado
// Selecciona el elemento anterior al "dos" completando la siguiente plantilla

document.getElementsByTagName("li")[1].previousElementSibling;

// El método nextElementSibling selecciona el elemento posterior a un elemento dado
//Selecciona el elemento hermano siguiente al "dos" completando la siguiente plantilla

document.getElementsByTagName("li")[1].nextElementSibling;

// El método nextElementSibling selecciona el elemento posterior a un elemento dado
// Selecciona el siguiente elemento hermano del siguiente elemento hermano de "dos" completando la siguiente plantilla

document.getElementsByTagName("li")[1].nextElementSibling.nextElementSibling;

// El método children retorna una colección de tipo HTMLCollection con todos los elemento hijos
// Selecciona el elemento "dos" de la lista completando la siguiente plantilla

document.getElementsByTagName("ul")[0].children[1];

// El método firstElementChild retorna el primer elemento hijo de un elemento dado
// Selecciona el primer elemento hijo de la lista ul completando la siguiente plantilla

document.getElementsByTagName("ul")[0].firstElementChild

// El método lastElementChild retorna el último elemento hijo de un elemento dado
// Selecciona el último elemento hijo de la lista ul completando la siguiente plantilla

document.getElementsByTagName("ul")[0].lastElementChild;

// El método parentElement retorna el elemento padre de un elemento dado
// Selecciona el elemento padre de la lista ul completando la siguiente plantilla

document.getElementsByTagName("ul")[0].parentElement;

// El método hasChildNodes retorna true si un elemento tiene nodos hijo
// Averigua si el elemento ul tiene hijos completando la siguiente plantilla

document.getElementsByTagName("ul")[0].hasChildNodes();

// El método childElementCount retorna el número de elementos hijo que tiene un elemento
// Averigua el número de hijos que tiene el elemento ul completando la siguiente plantilla

document.getElementsByTagName("ul")[0].childElementCount;



// El método previousSibling nos permite seleccionar el nodo anterior de uno dado
// Selecciona el nodo anterior al li con texto "tres" completando la siguiente plantilla

document.getElementsByTagName("li")[2].previousSibling;

// El método previousSibling nos permite seleccionar el nodo anterior de uno dado. Después de hacer este ejercicio analiza por qué no hemos obtenido un elemento li
// Selecciona el nodo anterior al li con texto "dos". completando la siguiente plantilla

document.getElementsByTagName("li")[1].previousSibling;

// El método nexSibling selecciona el nodo posterior a un elemento dado.
// Selecciona el nodo posterior al li con texto "dos". completando la siguiente plantilla

document.getElementsByTagName("li")[1].nextSibling;

// El método nextSibling selecciona el nodo posterior a un elemento dado. Después de hacer este ejercicio analiza por qué no hemos obtenido un elemento li
// Selecciona el nodo posterior al li con texto "tres". completando la siguiente plantilla

document.getElementsByTagName("li")[1].nextSibling.nextSibling;

// El método childNode retorna una colección de tipo NodeList con todos los nodos hijos
// Selecciona todos los nodos hijos del elemento ul completando la siguiente plantilla

document.getElementsByTagName("ul")[0].childNodes;

// El método children retorna, a diferencia de childNode, una colección de tipo HTMLCollection con todos los elemento hijos
// Selecciona todos los elementos hijo del elemento ul y compara con el resultado de childNode completando la siguiente plantilla

document.getElementsByTagName("ul")[0].children;

// El método firstChild retorna el primer nodo hijo de un elemento dado
// Selecciona el primer nodo hijo de la lista ul completando la siguiente plantilla

document.getElementsByTagName("ul")[0].firstChild;

// El método lastChild retorna el último nodo hijo de un elemento dado
// Selecciona el último nodo hijo de la lista ul completando la siguiente plantilla

document.getElementsByTagName("ul")[0].lastChild;



// El método getElementById retorna el elemento cuyo id hemos indicado como parámetro
// Selecciona la receta "Pizza de frutas" a través de su id completando la siguiente plantilla

document.getElementById("pizza");

// El método getElementsByClassName retorna un colección con los elementos que tienen la clase CSS que hemos especificado por parámetro
// Selecciona todas la frutas de cada recetas que son rojas completando la siguiente plantilla

document.getElementsByClassName("roja");

// El método querySelectorAll retorna una colección con TODOS los elementos seleccionados por el selector CSS que hemos indicado como parámetro
// Selecciona todas la frutas de cada recetas que son rojas, utilizando un selector CSS de clase, y guárdalas en la variable frutasRojas completando la siguiente plantilla

frutasRojas=document.querySelectorAll(".roja");

// El método querySelector retorna sólo el PRIMER elemento de todos los seleccionados por el selector CSS que hemos indicado como parámetro
// Selecciona la primera fruta roja, utilizando un selector CSS de clase, y guárdalas en la variable primeraFrutaRoja completando la siguiente plantilla

primeraFrutaRoja = document.querySelector(".roja");

// El método style nos permite modificar el estilo de un elemento previamente seleccionado.
// Modifica el color de fondo a rojo (backgroundColor) de la primera fruta roja. completando la siguiente plantilla

primeraFrutaRoja.style.backgroundColor="red";

// El método textContent Modifica el texto de un elemento
// Modifica el texto de la primera fruta roja que ahora es "Fresón - 50gr" completando la siguiente plantilla

primeraFrutaRoja.textContent="Fresón - 50gr";

// El método querySelectorAll es muy versátil ya que nos permite realizar selecciones de elementos utilizando toda la potencia de los selectores CSS
// Selecciona los elementos li correspondientes a los nombres de la recetas utilizando sólo selectores de hijo directo (>) y guárdalos en la variable elementosReceta completando la siguiente plantilla

elementosReceta=document.querySelectorAll("body>ul>li");

// El método forEach nos permite recorrer la colección de elementos previamente seleccionado para modificar, por ejemplo, el estilo de los elementos
// Modifica el color de fondo a rojo de todas las frutas rojas completando la siguiente plantilla

frutasRojas.forEach(function(elemento){elemento.style.backgroundColor="red"});

// El método querySelectorAll lo podemos utilizar también en un "subárbol" del documento
// Selecciona todos los elementos li correspondientes a los ingredientes del primer elemento receta y guárdalos en la variable ingredientesMacedonia completando la siguiente plantilla

ingredientesMacedonia=elementosReceta[0].nextElementSibling.querySelectorAll("li");

// El método textContent permite obtener el nombre de los ingredientes
// Muestra el nombre y peso del primer ingrediente de la primera receta completando la siguiente plantilla

ingredientesMacedonia[0].textContent;



// El método querySelector permite seleccionar un elemento para luego añadirle elementos hijo. Vamos a añadir el número cardinal "Cinco" a la lista...
// Paso 1: Selecciona la lista de cardinales utilizando un selector de etiqueta completando la siguiente plantilla

listaCardinales=document.querySelector("ul");

// El método createElement es un método de document que crea un elemento del tipo que le pasemos por parámetro. Inicialmente dicho elemento estará vacío y "huérfano"
// Paso 2: Necesitamos crear un nodo li. Crea un nodo li y guárdalo en la variable miLi completando la siguiente plantilla

miLi=document.createElement("li");

// El método appendChild permite añadir a un elemento un hijo que le pasamos por parámetro
// Paso 3: Añadimos el elemento li, que acabamos de crear, a la lista ul completando la siguiente plantilla

listaCardinales.appendChild(miLi);

// El método createElement permite crear elementos de cualquier tipo. Si analizamos el documento HTML, debemos crear un elemento de tipo span, que es el que contendrá el texto "Cinco" y que será hijo de miLi.
// Paso 4: Crea un elemento de tipo span y guárdalo en la variable miSpan. Inicialmente estará vacío y será huérfano. completando la siguiente plantilla

miSpan=document.createElement("span");

// El método textContent nos permite ponerle el texto "Cinco" a nuestro nuevo span recién creado
// Paso 5: Añade el texto "Cinco" al span completando la siguiente plantilla

miSpan.textContent="Cinco";

// El método appendChild permite añadir a un elemento un hijo
// Paso 6: Añade el elemento span al elemento li completando la siguiente plantilla

miLi.appendChild(miSpan);

// El método createElement permite también crear elementos h1. Ahora Vamos a crear una cabecera con el texto "Cardianales"
// Paso 1: Crea el elemeno h1 completando la siguiente plantilla

miH1=document.createElement("h1");

// El método textContent lo utilizaremos para añadirle texto al h1.
// Paso 2: Añade el contenido de texto completando la siguiente plantilla

miH1.textContent="Cardinales";

// El método insertAdjacentElement permite añadir un hijo a un elemento. Podemos especificar 4 opciones par el primer parámetro: beforebegin, afterbegin, beforeend y afterend. Ten en cuenta que no podemos usar appendchild ... ¿por qué?
// Paso 3: Añade el h1 al body completando la siguiente plantilla

document.body.insertAdjacentElement("afterbegin",miH1);



// El método getElementsByTagName nos permite seleccionar el elemento "h1" que queremos eliminar.
// Vamos a eliminar el elemento h1 en 2 pasos.
// Paso 1/2: Selecciona el elemento h1 que queremos eliminar y guárdalo en la variable miH1 completando la siguiente plantilla

miH1=document.getElementsByTagName("h1")[0];

// El método removeChild permite eliminar un nodo hijo de un elemento dado.
// Paso 2/2: Elimina el elemento h1 ejecutando el método removeChild del padre, pasándole como parámetro el nodo hijo que hemos seleccionado en el paso anterior completando la siguiente plantilla

document.body.removeChild(miH1);

// El método getElementById permite seleccionar una receta por id
// Ahora vamos a eliminar el ingrediente "Plátano" de la receta "Pizza de frutas".
// Paso 1/3: Seleccionar el padre del elemento que queremos borrar completando la siguiente plantilla

listaIngredientes=document.getElementById("pizza").nextElementSibling;

// El método getElementsByTagName lo podemos utilizar para seleccionar el ingrediente que queremos eliminar
// Paso 2/3: Selecciona "Plátano" completando la siguiente plantilla

platano=listaIngredientes.getElementsByTagName("li")[2];

// El método removeChild permite eliminar el ingrediente que ya hemos seleccionado
// Paso 3/3: Elimina el elemento con texto "Plátano" completando la siguiente plantilla

document.getElementById("pizza").nextElementSibling.removeChild(platano);



// El método className es una propiedad que tienen todos los elementos. Nos permite añadir o modificar el atributo "class" de cualquier elemento
// (Observa cómo se reflejan los cambios en la solapa "Elements" de DevTools).
// Asígnale a la receta "Tarta de frutas" la clase "roja" completando la siguiente plantilla

document.getElementById("tarta").className="roja";

// El método removeAttribute nos permite eliminar un atributo de un elemento.
// Elimina el atributo "class" a la receta "Tarta de frutas" completando la siguiente plantilla

document.getElementById("tarta").removeAttribute("class");

// El método setAttribute nos permite añadir un atributo a un elemento. Es una alternativa al ejercicio con className anterior.
// (Observa cómo se reflejan los cambios en la solapa "Elements" de DevTools).
// Asígnale a la receta "Tarta de frutas" la clase "roja" completando la siguiente plantilla

document.getElementById("tarta").setAttribute("class","roja");

// El método classList.add permite modificar el aspecto de los elementos a través de un cambio de clase en lugar de cambiar su estilo de forma directa
// El código CSS tiene varias clases para resaltar las frutas rojas. Utiliza la opción "1" para modificar el aspectos de las frutas rojas completando la siguiente plantilla

document.querySelectorAll(".roja").forEach(function(elemento){elemento.classList.add("resaltar-rojas-1")});

// El método classList.remove permite eliminar una clase de la lista de clases a las que pertenece un elemento
// Elimina la clase que resalta la receta "Tarta de frutas" de su lista de clases completando la siguiente plantilla

document.getElementById("tarta").classList.remove("resaltar-rojas-1");

// El método classList.toggle permite añadir una clase (si no la tiene) o quitar una clase (si la tiene) de la lista de clases de un elemento.
// Quita el resalte de los elementos. ¿has podido hacerlo?. Vuelve a ejecutar "toggle" a ver qué ocurre. Hazlo completando la siguiente plantilla

document.querySelectorAll(".roja").forEach(function(elemento){elemento.classList.toggle("resaltar-rojas-1")});

// El método classList.toggle es como un interruptor que enciende lo que está apagado y apaga lo que está encendido
// Resalta toda las frutas amarillas con la opción 2 para resaltar. Ejecuta "toggle" varias veces a ver qué ocurre. Hazlo completando la siguiente plantilla

document.querySelectorAll(".amarilla").forEach(function(elemento){elemento.classList.toggle("resaltar-amarillas-2")})
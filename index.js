/**
 * aqui accedemos al document.
 * utilizamos el selector 'getElementById' el cual recibe el id del nodo o elemento
 * del document que queremos accesar.
 * y  utilizamos el metodo addEventListener() el cual sirve para escuchar y recibe 2 argumentos
 * 1er argumento es el nombre del evento que pondremos a escuchar
 * 2do argumento es una expresion funcion anonima o tambien puede recibir una funcion arrow
 */

const arreglo = [];
document
  .getElementById("mayusculas-form")
  .addEventListener("submit", function (event) {
    /**
     * (event)  hace referencia al evento que se captura tambien es habitual usar (e)
     * event.preventDefault() se utiliza para evitar que el evento se ejecute por default
     *al cargar la pagina evitando que se envie el formulario vacio.
     */
    event.preventDefault();

    // hacemos el llamado a nuestra funcion convertirMayuscula()
    convertirMayuscula();
  });

function convertirMayuscula() {


  /**
   *usaremos las siguientes variables para almacenar los nodos y haces las respectivas operaciones
   *resultado de convertir las frases o palabras, del mismo modo tendremos nuestro mensaje de error 
   *con su respectivo id='errorMsn' el cual modificaremos para mostrar mensaje de error en caso de presentarse
   */
  
  const nodoData = document.getElementById("data");
  const nodoArea = document.getElementById("area");

  let nodoErrorMsn = document.getElementById("errorMsn");

  /**
   * accedemos a la propiedad (.value) de cada nodo la cual guarda el valor en texto (string)
   * ingresado por el usuario y lo guaramos en un arreglo, en este caso usaremos el metodo push()
   * para agregar datos a nuentro arreglo, debido a que es un requerimientro guardar los datos en mayusucula
   * y ya que estamos trabajando con Strings usaremos un metodo toUpperCase() el cual nos convertira 
   * nustra data en formato mayuscula, entonces tomamos el valor, lo convertiremos y lo agreagaremos al 
   * arreglo
   */
  const data = nodoData.value.toUpperCase();

  arreglo.push(data);

  nodoArea.value = arreglo.join("\n");
  nodoData.value = "";

  /**
   * validaremos que el input del texto no llegue vacio
   * en la expresion la expresion (===) se valida si las comparaciones son iguales
   * si se cumple la condicion sera suficiente para mostrar el mensaje de error
   */
  let mensaje;
  if (data === "") {
    mensaje = "No se permiten <strong>campos vacios</strong>";
    /**
     * hacemos el llamado a nuestra funcion showMsnError() que sera la encargada
     * de mostrar el mensaje de error
     * esta recibe como argumentos el mensaje de error que debera mostrar
     * y el nodo nodoErrorMsn donde se mostrara el mensaje que se envia
     */
    showMsnError(mensaje, nodoErrorMsn);
  }

}

function showMsnError(mensajeError, nodoErrorMsn) {
  /**
   * en nuestro nodoErrorMsn accedemos al metodo .setAttribute()
   * el cual recibe como primer argumento el nombre de la propiead html que desamos modificar
   * para este caso vamos modificar la propiedad 'class' y como segundo argumento
   * enviamos las clases de estilo que seran asignadas a la propiedad 'class' en este caso
   * asignaremos algunas clases de estilos pertenecientes al framework de estilos boostrap
   * bg-danger --> genera un fondo rojo
   * rounded-3 --> redondea las esquinas
   * mb-2 ---> margin-bottom agrega un margen en la parte inferior del nodoErrorMsn
   * p-2 ---> agrega un padding alrededor de todo el nodoErrorMsn
   *
   */

  nodoErrorMsn.setAttribute("class", "bg-danger rounded-3 mb-2 p-2");
  /**
   * modificamos el nodoErrorMsn accediendo a su propiedad .innerHTML
   * la cual nos permite utilizar la sintaxis html para crear etiquetas
   * desde javaScript en este caso crearemos una etiqueta 'strong'
   * para poner en negrita la palabra campos vacios
   */
  nodoErrorMsn.innerHTML = mensajeError;

  /**
   * utilizamos la instruccion de return para romper el flujo de nuestra aplicacion
   * y evitar que se continue ejecutando el codigo que pueda seguir
   */
  return;
}

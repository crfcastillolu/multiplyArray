// var carrito = [];

// var agregarCarrito = function(item,cantidad){
// 	carrito.push([item,cantidad]);
// };

// var quitarElemento = function(){
// 	carrito.pop();
// };

// var solicitarProducto = function(){
// 	var cantidad = prompt("Agregue una cantidad de elementos para agregar al carro de compras");
// 	var item = prompt("Agregue un elemento al carro de compras");

// 	agregarCarrito(item, cantidad);
// 	alert(carrito);
// }

// // Ejecución de código

// var cantidadProductos = prompt("Ingrese cantidad de elementos a comprar");

// for(var index = 0;index < cantidadProductos; index++) {
// 	solicitarProducto();
// }

// var quitarProductos = prompt("Ingrese el producto a retirar");

// // modificar la funcion de quitar, para eliminar el item que yo quiera

// for(var index = 0;index <= carrito.length-1; index++){
// 	if(carrito[index][0] === quitarProductos){   
// 	}
// }

// console.log(carrito);

// var resultado = 0;
// var numeros = [1,2,3]; 

// 	for( var i = 0 ; i <= numeros.length-1 ; i++){

// 		resultado += numeros[i];
// 		console.log(resultado);

// 	}

// var resultado = 0;
// var numeros = [[2],[2],[3]];

// 	for( var i = 0; i <= numeros.length-1 ; i++){
// 		resultado += numeros[i][0];
// 	}

// console.log(resultado);

var resultado = 0;
var numeros = [[1,2],[3,4],[5,6,7]];

	for( var i = 0; i <= numeros.length-1 ; i++){
		resultado += numeros[i];
			for(var j = 1 ; i < numeros.length[j] ; j++){
				resultado += numeros[j];
				console.log(resultado += numeros[j]);
			}
	}

console.log(resultado);

























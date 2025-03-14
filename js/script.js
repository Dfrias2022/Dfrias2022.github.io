// Datos de los productos (pueden venir de una API, base de datos, etc.)
const productos = [
    {
        nombre: "Aceite Natura girasol x900cc",
        imagen: "imagenes/1.jpg",
        precio: "$2200.00"
    },
    {
        nombre: "Aceite Marolio girasol x900cc",
        imagen: "imagenes/2.jpg",
        precio: "$2100.00"
    },
    {
        nombre: "Sal fina Celusal x500Grs",
        imagen: "imagenes/3.jpg",
        precio: "$1000.00"
    },
    {
        nombre: "Hamburguesa clasica ''Paty'' caja x4",
        imagen: "imagenes/4.jpg",
        precio: ["$4300.00 c/u","x2 $8000.00"]
    },
    {
        nombre: "Galletita media tarde x3",
        imagen: "imagenes/5.jpg",
        precio: "$1100.00"
    },
    {
        nombre: "Galletita Desfile x400Grs",
        imagen: "imagenes/6.jpg",
        precio: "$1600.00"
    },
    {
        nombre: "Hamburguesa ''Paty'' finito x2",
        imagen: "imagenes/7.jpg",
        precio: ["$1300.00 c/u","x2 $2400.00","x3 $3000.00"]
    },
    {
        nombre: "Picadillo de carne Molto x 70Grs",
        imagen: "imagenes/8.jpg",
        precio: "$700.00"
    },
    {
        nombre: "Hamburguesa ''Barfy'' caja x4",
        imagen: "imagenes/9.jpg",
        precio: ["$1800.00 c/u","x2 $3000.00"]
    },
    {
        nombre: "Petaca licor cusenier menta",
        imagen: "imagenes/10.jpg",
        precio: "$2000.00"
    },
    {
        nombre: "Galletita ''La providencia'' x3",
        imagen: "imagenes/11.jpg",
        precio: "$1100.00"
    },
    {
        nombre: "Papel higienico Duplex x50Mts",
        imagen: "imagenes/12.jpg",
        precio: "$600.00"
    },
    {
        nombre: "Aceite cañuelas 1.5Lts",
        imagen: "imagenes/13.jpg",
        precio: "$4200.00"
    },
    {
        nombre: "Pure molto x520Grs",
        imagen: "imagenes/14.jpg",
        precio: "$1000.00"
    },
    {
        nombre: "Fideo luchetti x500Grs",
        imagen: "imagenes/15.jpg",
        precio: "$1300.00"
    },
    {
        nombre: "Azucar marolio 1kg",
        imagen: "imagenes/16.jpg",
        precio: "$1100.00"
    },
    {
        nombre: "Pan lactal ''Montesion'' x560Grs",
        imagen: "imagenes/17.jpg",
        precio: "$2500.00"
    },
    {
        nombre: "Harina Marolio ''OOO'' 1Kg",
        imagen: "imagenes/18.jpg",
        precio: "$700.00"
    }
];

// Función para crear un producto
function crearProducto(producto) {
    const divProducto = document.createElement("div");
    divProducto.classList.add("producto");

    // Imagen del producto
    const divImagen = document.createElement("div");
    divImagen.classList.add("imagen-producto");
    const imagen = document.createElement("img");
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
    divImagen.appendChild(imagen);

    // Nombre del producto
    const divNombre = document.createElement("div");
    divNombre.classList.add("nombre-producto");
    divNombre.textContent = producto.nombre;

    // Precio del producto
    const divPrecio = document.createElement("div");
    divPrecio.classList.add("precio-producto");

    if (Array.isArray(producto.precio)) {
        // Si el precio es un array, mostrar todos los precios
        producto.precio.forEach(textoPrecio => {
            const precio = document.createElement("span");
            precio.textContent = textoPrecio;
            divPrecio.appendChild(precio);
        });
    } else {
        // Si el precio es un string, mostrar solo ese precio
        const precio = document.createElement("span");
        precio.textContent = producto.precio;
        divPrecio.appendChild(precio);
    }
    // Agregar elementos al producto
    divProducto.appendChild(divImagen);
    divProducto.appendChild(divNombre);
    divProducto.appendChild(divPrecio);

    return divProducto;
}

// Función para cargar los productos en el contenedor
function cargarProductos() {
    const contenedor = document.getElementById("contenedor-productos");
    productos.forEach(producto => {
        const productoHTML = crearProducto(producto);
        contenedor.appendChild(productoHTML);
    });
}

// Cargar los productos cuando la página esté lista
document.addEventListener("DOMContentLoaded", cargarProductos);
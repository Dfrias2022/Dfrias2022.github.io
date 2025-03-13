// Datos de los productos (pueden venir de una API, base de datos, etc.)
const productos = [
    {
        nombre: "Aceite natura girasol x900cc",
        imagen: "imagenes/1.jpg",
        precio: 19.99
    },
    {
        nombre: "Aceite marolio girasol x900cc",
        imagen: "imagenes/2.jpg",
        precio: 29.99
    },
    {
        nombre: "Sal fina celusal x500Grs",
        imagen: "imagenes/3.jpg",
        precio: 39.99
    },
    {
        nombre: "Hamburguesa Paty x4",
        imagen: "imagenes/4.jpg",
        precio: 49.99
    },
    {
        nombre: "Galletita media tarde x3",
        imagen: "imagenes/5.jpg",
        precio: 49.99
    },
    {
        nombre: "Galletita Desfile x400Grs",
        imagen: "imagenes/6.jpg",
        precio: 49.99
    },
    {
        nombre: "Hamburguesa Paty finito x2",
        imagen: "imagenes/7.jpg",
        precio: 49.99
    },
    {
        nombre: "Picadillo de carne Molto x 70Grs",
        imagen: "imagenes/8.jpg",
        precio: 49.99
    },
    {
        nombre: "Hamburguesa Barfy x4",
        imagen: "imagenes/9.jpg",
        precio: 49.99
    },
    {
        nombre: "Petaca licor cusenier menta",
        imagen: "imagenes/10.jpg",
        precio: 49.99
    },
    {
        nombre: "Galletita La providencia x3",
        imagen: "imagenes/11.jpg",
        precio: 49.99
    },
    {
        nombre: "Papel higienico Duplex x50Mts",
        imagen: "imagenes/12.jpg",
        precio: 49.99
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
    divPrecio.textContent = `$${producto.precio.toFixed(2)}`;

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
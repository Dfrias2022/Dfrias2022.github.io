// Función para formatear la fecha en formato "dd/mm/aaaa"
function formatearFecha(fecha) {
    const dia = String(fecha.getDate()).padStart(2, '0'); // Asegura 2 dígitos
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
    const anio = fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
}

// Función para actualizar el título con la fecha actual
function actualizarTitulo() {
    const fechaActual = new Date(); // Obtiene la fecha actual
    const fechaFormateada = formatearFecha(fechaActual); // Formatea la fecha
    const tituloOfertas = document.getElementById("titulo-ofertas");
    tituloOfertas.textContent = `¡Ofertas Especiales del ${fechaFormateada}!`;
}



// Datos de los productos (pueden venir de una API, base de datos, etc.)
const productos = [
    {
        nombre: "Aceite Natura girasol x900cc[SIN DISPONIBILIDAD]",
        imagen: "imagenes/1.jpg",
        precio: "$2500.00"
    },
    {
        nombre: "Aceite Marolio girasol x900cc[SIN DISPONIBILIDAD]",
        imagen: "imagenes/2.jpg",
        precio: "$2300.00"
    },
    {
        nombre: "Sal fina Celusal x500Grs[SIN DISPONIBILIDAD]",
        imagen: "imagenes/3.jpg",
        precio: "$1000.00"
    },
    {
        nombre: "Hamburguesa clasica ''Paty'' caja x4[SIN DISPONIBILIDAD]",
        imagen: "imagenes/4.jpg",
        precio: ["$4300.00 c/u","x2 $8000.00"]
    },
    {
        nombre: "Galletita media tarde x3[SIN DISPONIBILIDAD]",
        imagen: "imagenes/5.jpg",
        precio: "$1100.00"
    },
    {
        nombre: "Galletita Desfile x400Grs[SIN DISPONIBILIDAD]",
        imagen: "imagenes/6.jpg",
        precio: "$1600.00"
    },
    {
        nombre: "Picadillo de carne Molto x 70Grs[SIN DISPONIBILIDAD]",
        imagen: "imagenes/8.jpg",
        precio: "$700.00"
    },
    {
        nombre: "Hamburguesa ''Barfy'' caja x4[SIN DISPONIBILIDAD]",
        imagen: "imagenes/9.jpg",
        precio: ["$1800.00 c/u","x2 $3200.00"]
    },
    {
        nombre: "Petaca licor cusenier menta[SIN DISPONIBILIDAD]",
        imagen: "imagenes/10.jpg",
        precio: "$2000.00"
    },
    {
        nombre: "Galletita ''La providencia'' x3[SIN DISPONIBILIDAD]",
        imagen: "imagenes/11.jpg",
        precio: "$1100.00"
    },
    {
        nombre: "Papel higienico Duplex x50Mts[SIN DISPONIBILIDAD]",
        imagen: "imagenes/12.jpg",
        precio: "$600.00"
    },
    {
        nombre: "Aceite cañuelas 1.5Lts[SIN DISPONIBILIDAD]",
        imagen: "imagenes/13.jpg",
        precio: "$4200.00"
    },
    {
        nombre: "Pure molto x520Grs[SIN DISPONIBILIDAD]",
        imagen: "imagenes/14.jpg",
        precio: "$1000.00"
    },
    {
        nombre: "Azucar marolio 1kg[SIN DISPONIBILIDAD]",
        imagen: "imagenes/16.jpg",
        precio: "$1100.00"
    },
    {
        nombre: "Pan lactal ''Montesion'' x560Grs[SIN DISPONIBILIDAD]",
        imagen: "imagenes/17.jpg",
        precio: "$2500.00"
    },
    {
        nombre: "Harina Marolio ''OOO'' 1Kg[SIN DISPONIBILIDAD]",
        imagen: "imagenes/18.jpg",
        precio: "$700.00"
    },
    {
        nombre: "Rollo cocina ''Susex'' x3[SIN DISPONIBILIDAD]",
        imagen: "imagenes/19.jpg",
        precio :"$1500.00"
    },
    {
        nombre: "Lavavajillas Esencial x750cc[SIN DISPONIBILIDAD]",
        imagen: "imagenes/20.jpg",
        precio: "$1200.00"
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

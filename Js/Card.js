let productos = [
    {
        nombre: "Television",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "/assets/Cards/1.png",
        img2: "/assets/Cards/2.png",
    },
    {
        nombre: "Parlante",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "/assets/Cards/1.png",
        img2: "/assets/Cards/2.png",
    },
    {
        nombre: "Auriculares",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "/assets/Cards/1.png",
        img2: "/assets/Cards/2.png",
    },
    {
        nombre: "Monitor",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "/assets/Cards/1.png",
        img2: "/assets/Cards/2.png",
    },
    {
        nombre: "5",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "6",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "7",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "8",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "9",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "10",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "11",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "12",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "13",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "14",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "15",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "16",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "17",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "18",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "19",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "20",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "21",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "22",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "23",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "24",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "25",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "26",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "27",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "28",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "29",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "30",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
    {
        nombre: "Moto",
        precio: 10000,
        descripcion: "Descripcion del producto",
        img1: "../assets/Cards/1.png",
        img2: "../assets/Cards/2.png",
    },
];

let contenedor = document.getElementById("ContenedorCard");
let mostrarCantidad = 9;
let productosFiltrados = [...productos];

let inputBusqueda = document.getElementById("Busqueda");

function mostrarProductos() {
    contenedor.innerHTML = "";

    if (productosFiltrados.length === 0) {
        contenedor.innerHTML = `<div class="mensaje-no-encontrado">No se encontraron productos.</div>`;
        return;
    }

    productosFiltrados.slice(0, mostrarCantidad).forEach((producto, index) => {
        contenedor.innerHTML += `
        <div class="segunda-card" data-producto-id="${index}">
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="${producto.img1}" alt="Imagen 1">
                    </div>
                    <div class="swiper-slide">
                        <img src="${producto.img2}" alt="Imagen 2">
                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>
            <h2>${producto.nombre}</h2>
            <h3>${producto.descripcion}</h3>
            <h2>$${producto.precio}</h2>
            <div class="cant-comprar">
                <input type="text" id="cantidad" placeholder="Cantidad" min="1">
                <button class="comprar-btn">Comprar</button>
            </div>
        </div>`;
    });

    setTimeout(() => {
        var swipers = document.querySelectorAll(".mySwiper");
        swipers.forEach(swiperElement => {
            new Swiper(swiperElement, {
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        });
    }, 100);

    // Añadir los event listeners después de renderizar los productos
    let botones = document.querySelectorAll(".comprar-btn");
    botones.forEach((boton) => {
        // Eliminamos el listener si ya existe
        boton.removeEventListener("click", manejarCompra);
        boton.addEventListener("click", manejarCompra);
    });

    verMasBtn.style.display = mostrarCantidad >= productosFiltrados.length ? "none" : "block";
    verMenosBtn.style.display = mostrarCantidad > 9 ? "block" : "none";
}

function manejarCompra(event) {
    let card = event.target.closest(".segunda-card");
    if (!card) {
        console.error("No se pudo encontrar la tarjeta del producto.");
        return;
    }

    let productoId = card.getAttribute("data-producto-id");
    let producto = productosFiltrados[productoId];

    let nombre = producto.nombre;
    let precio = producto.precio;
    let img = card.querySelector(".swiper-slide img").src;
    let cantidadInput = card.querySelector(".cant-comprar input");
    let cantidad = parseInt(cantidadInput.value) || 0;

    agregarAlCarrito(nombre, precio, img, cantidad);  // Función para agregar al carrito
    cantidadInput.value = "0";
}

let botonesContainer = document.createElement("div");
botonesContainer.classList.add("btn-container");

let verMasBtn = document.createElement("button");
verMasBtn.textContent = "Ver más";
verMasBtn.classList.add("BtnVermas");

let verMenosBtn = document.createElement("button");
verMenosBtn.textContent = "Ver menos";
verMenosBtn.classList.add("BtnVermas");

botonesContainer.appendChild(verMasBtn);
botonesContainer.appendChild(verMenosBtn);
document.querySelector(".SeccionCard").appendChild(botonesContainer);

verMasBtn.addEventListener("click", function () {
    mostrarCantidad = Math.min(mostrarCantidad + 9, productosFiltrados.length);
    mostrarProductos();
});

verMenosBtn.addEventListener("click", function () {
    mostrarCantidad = Math.max(mostrarCantidad - 9, 9);
    mostrarProductos();
});

inputBusqueda.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        let termino = inputBusqueda.value.toLowerCase();
        productosFiltrados = termino ? productos.filter(producto =>
            producto.nombre.toLowerCase().includes(termino)
        ) : [...productos];
        mostrarProductos();
        document.querySelector(".nuestros-productos").scrollIntoView({
            behavior: "smooth"
        });
    }
});

mostrarProductos();

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio, img, cantidad) {
    if (cantidad <= 0) {
        console.log("Error: La cantidad debe ser mayor a 0.");
        return;
    }

    console.log(`Producto agregado al carrito: ${nombre}, ${precio}, ${cantidad}, ${img}`);
}

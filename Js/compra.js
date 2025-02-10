document.getElementById("comprarBtn").addEventListener("click", () => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
        Swal.fire({
            title: "Carrito vacío",
            text: "No puedes continuar con la compra porque el carrito está vacío.",
            icon: "warning",
            confirmButtonText: "Aceptar"
        });
        return; // Detiene la ejecución si no hay productos
    }

    Swal.fire({
        title: "Completa tu compra",
        html: `
            <input type="text" id="nombre" class="swal2-input" placeholder="Nombre y Apellido" required>
            <input type="text" id="localidad" class="swal2-input" placeholder="Localidad" required>
            <input type="email" id="correo" class="swal2-input" placeholder="Correo Electrónico" required>
            <input type="tel" id="whatsapp" class="swal2-input" placeholder="Número de WhatsApp" required>
            <select id="envio" class="swal2-select">
                <option value="Retiro en tienda">Retiro en tienda</option>
                <option value="Envío a domicilio">Envío a domicilio</option>
            </select>
            <textarea id="mensaje" class="swal2-textarea" placeholder="Mensaje adicional"></textarea>
        `,
        confirmButtonText: "Confirmar compra",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        preConfirm: () => {
            const nombre = document.getElementById("nombre").value;
            const localidad = document.getElementById("localidad").value;
            const correo = document.getElementById("correo").value;
            const whatsapp = document.getElementById("whatsapp").value;
            const envio = document.getElementById("envio").value;
            const mensaje = document.getElementById("mensaje").value;

            if (!nombre || !localidad || !correo || !whatsapp) {
                Swal.showValidationMessage("Por favor, completa todos los campos requeridos");
                return false;
            }

            return { nombre, localidad, correo, whatsapp, envio, mensaje };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            let carritoHTML = carrito.map((producto, index) => 
                `${index + 1}.
                *${producto.nombre}*
                Cantidad:${producto.cantidad}
                Precio:$${producto.precio * producto.cantidad}
                -------`).join('\n');
            let totalPagar = carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
            carritoHTML += `\n🧾 *Total a pagar: $${totalPagar}*`;

            let form = document.getElementById("compraForm");
            if (form) {
                form.elements["nombre"].value = result.value.nombre;
                form.elements["localidad"].value = result.value.localidad;
                form.elements["email"].value = result.value.correo;
                form.elements["whatsapp"].value = result.value.whatsapp;
                form.elements["envio"].value = result.value.envio;
                form.elements["mensaje"].value = result.value.mensaje;
                form.elements["carrito"].value = `🛒 *Pedido del carrito:*\n\n${carritoHTML}`;
                form.elements["_replyto"].value = result.value.correo;
                form.elements["_cc"].value = result.value.correo;

                localStorage.removeItem("carrito"); // Limpiar carrito

                form.submit(); // Enviar formulario a FormSubmit

                Swal.fire("¡Compra realizada!", "Te hemos enviado un correo con los detalles del pedido.", "success");
            } else {
                Swal.fire("Error", "No se encontró el formulario de compra.", "error");
            }
        }
    });
});
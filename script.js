const pc1 = document.getElementById("pc_1");
const pc2 = document.getElementById("pc_2");
const pc3 = document.getElementById("pc_3");
const pc4 = document.getElementById("pc_4");
const pc5 = document.getElementById("pc_5");

pc1.addEventListener('click', () => {
    pc3.style.color = "rgb(30 58 138 / var(--tw-text-opacity))"
    pc1.style.color = "green"
    pc2.style.color = "rgb(30 58 138 / var(--tw-text-opacity))"
    pc4.style.color = "rgb(30 58 138 / var(--tw-text-opacity))"
    pc5.style.color = "rgb(30 58 138 / var(--tw-text-opacity))"
    document.getElementById('titulo').innerHTML = "COMPRA DE PLASTICO"
    document.getElementById('subtitulo').innerHTML = "¿QUÉ PRODUCTOS COMPRAMOS?"
    document.getElementById("p_1").innerHTML = "Scrap plástico post industriales"
    document.getElementById("p_2").innerHTML = "Compramos scrap plástico como, tarimas, cajas, contenedores, charolas, totes y diversos materiales."
})

pc2.addEventListener('click', () => {
    pc1.style.color = "rgb(30 58 138 / var(--tw-text-opacity))"
    pc2.style.color = "green"
    pc3.style.color = "rgb(30 58 138 / var(--tw-text-opacity))"
    pc4.style.color = "rgb(30 58 138 / var(--tw-text-opacity))"
    pc5.style.color = "rgb(30 58 138 / var(--tw-text-opacity))"
    document.getElementById('titulo').innerHTML = "RECOLECCION DE PLASTICO"
    document.getElementById('subtitulo').innerHTML = "Trabaja en colaboración con el cliente desarrollado productos según sus necesidades"
    document.getElementById("p_1").innerHTML = ""
    document.getElementById("p_2").innerHTML = ""
})

pc3.addEventListener('click', () => {
    pc1.style.color = "rgb(30 58 138 / var(--tw-text-opacity))"
    pc3.style.color = "green"
    pc2.style.color = "rgb(30 58 138 / var(--tw-text-opacity))"
    pc4.style.color = "rgb(30 58 138 / var(--tw-text-opacity))"
    pc5.style.color = "rgb(30 58 138 / var(--tw-text-opacity))"
    document.getElementById('titulo').innerHTML = "LAVADO Y REPARACION"
    document.getElementById('subtitulo').innerHTML = "Lavado y reparacion de equipo vacio (contenedores, tarimas, charolas termo formada y caja industrial)"
    document.getElementById("p_1").innerHTML = ""
    document.getElementById("p_2").innerHTML = ""
})

pc4.addEventListener('click', () => {
    pc1.style.color = "rgb(30 58 138 / var(--tw-text-opacity))"
    pc4.style.color = "green"
    pc2.style.color = "rgb(30 58 138 / var(--tw-text-opacity))"
    pc3.style.color = "rgb(30 58 138 / var(--tw-text-opacity))"
    pc5.style.color = "rgb(30 58 138 / var(--tw-text-opacity))"
    document.getElementById('titulo').innerHTML = "FABRICACION DE PIEZAS"
    document.getElementById('subtitulo').innerHTML = "Fabricacion de piezas especiales de grado automotriz"
    document.getElementById("p_1").innerHTML = ""
    document.getElementById("p_2").innerHTML = ""
})

pc5.addEventListener('click', () => {
    pc1.style.color = "rgb(30 58 138 / var(--tw-text-opacity))"
    pc5.style.color = "green"
    pc2.style.color = "rgb(30 58 138 / var(--tw-text-opacity))"
    pc4.style.color = "rgb(30 58 138 / var(--tw-text-opacity))"
    pc3.style.color = "rgb(30 58 138 / var(--tw-text-opacity))"
    document.getElementById('titulo').innerHTML = "MAQUILADOS"
    document.getElementById('subtitulo').innerHTML = "Maquilados de plasticos reciclabes. (Trituracion y molienda)"
    document.getElementById("p_1").innerHTML = ""
    document.getElementById("p_2").innerHTML = ""
})

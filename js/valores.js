
fetch('json/propiedad.json')
.then(res => res.json())
.then(data => {
    const prop = data.find(p => p.id === propertyId);

    if (!prop) {
        document.body.innerHTML = '<h2>Propiedad no encontrada</h2>';
        return;
    }
    const precioUF = prop.precio_uf;

    document.getElementById("precioUF").innerText =
        new Intl.NumberFormat('es-CL').format(precioUF) + " UF";

    fetch("https://mindicador.cl/api/uf")
    .then(r => r.json())
    .then(d => {
        const ufHoy = d.serie[0].valor;
        const total = precioUF * ufHoy;

        document.getElementById("valorUF").innerText =
            new Intl.NumberFormat('es-CL', {
                style: 'currency',
                currency: 'CLP'
            }).format(ufHoy);

        document.getElementById("precioCLP").innerText =
            new Intl.NumberFormat('es-CL', {
                style: 'currency',
                currency: 'CLP'
            }).format(total);
    });
});
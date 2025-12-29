fetch('json/propiedades.json')
  .then(res => res.json())
  .then(data => {
    const prop = data[0]; // o buscar por ID

    document.getElementById('imagenPrinc').src =
      `${prop.imagen_princicipal}`;

    const galeria4 = document.getElementById('galeria4');
    prop.imagenes_4.forEach(img => {
      galeria4.innerHTML += `<img src="${img}" onclick="changeImage(this)">`;
    });

    const galCompleta = document.getElementById('galCompleta');
    prop.imagenes.forEach(images => {
      galCompleta.innerHTML += `<img src="${images}">`;
    });

    document.getElementById('titulo').innerText =
      `${prop.tipo} en ${prop.ciudad} - ${prop.comuna}`;

    document.getElementById('datos').innerHTML = `
        <li><strong>Código:</strong> ${prop.id}</li>
        <li><strong>Dormitorios:</strong> ${prop.dormitorios}</li>
        <li><strong>Tipo:</strong> ${prop.tipo}</li>
        <li><strong>Baños:</strong> ${prop.banos}</li>
        <li><strong>Ciudad:</strong> ${prop.ciudad}</li>
        <li><strong>Estacionamiento:</strong> ${prop.estacionamientos}</li>
        <li><strong>Comuna:</strong> ${prop.comuna}</li>
        <li><strong>Superfice Total:</strong> ${prop.superficie_total}</li>
        <li><strong>Dirección:</strong> ${prop.direccion}</li>
        <li><strong>Superfice Util:</strong> ${prop.superficie_util}</li>
        <li><strong>Orientación:</strong> ${prop.orientacion}</li>
    `;
  });

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
        <span><strong>Código:</strong> ${prop.id}</span>
        <span><strong>Código:</strong> ${prop.tipo}</span>
        <span><strong>Código:</strong> ${prop.ciudad}</span>
        <span><strong>Código:</strong> ${prop.comuna}</span>
        <span><strong>Dirección:</strong> ${prop.direccion}</span>
        <span><strong>Orientación:</strong> ${prop.orientacion}</span>
        <span><strong>Orientación:</strong> ${prop.orientacion}</span>
        <span><strong>Orientación:</strong> ${prop.dormitorios}</span>
        <span><strong>Orientación:</strong> ${prop.banos}</span>"
        <span><strong>Orientación:</strong> ${prop.estacionamiento}</span>"
        <span><strong>Orientación:</strong> ${prop.superficie_total}</span>"
        <span><strong>Orientación:</strong> ${prop.superficie_util}</span>"
    `;
  });

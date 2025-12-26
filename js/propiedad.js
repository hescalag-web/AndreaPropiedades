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
      `${prop.tipo} en ${prop.comuna}`;

    document.getElementById('precio').innerText =
      `UF ${prop.precio_uf}`;

    document.getElementById('datos-generales').innerHTML = `
      <p><strong>Código:</strong> ${prop.id}</p>
      <p><strong>Ciudad:</strong> ${prop.ciudad}</p>
      <p><strong>Dirección:</strong> ${prop.direccion}</p>
      <p><strong>Orientación:</strong> ${prop.orientacion}</p>
    `;

    document.getElementById('datos-tecnicos').innerHTML = `
      <p><strong>Dormitorios:</strong> ${prop.dormitorios}</p>
      <p><strong>Baños:</strong> ${prop.banos}</p>
      <p><strong>Estacionamientos:</strong> ${prop.estacionamientos}</p>
      <p><strong>Sup. total:</strong> ${prop.superficie_total} m²</p>
      <p><strong>M² útiles:</strong> ${prop.superficie_util} m²</p>
    `;

    const galeria = document.getElementById('galeria');
    prop.imagenes.forEach(img => {
      galeria.innerHTML += `<img src="${img}" />`;
    });
  });

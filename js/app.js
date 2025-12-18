let properties = [];

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    properties = data;
    renderProperties(data);
    handleHash();
  });

function openView(id, hash = '') {
  // cerrar solo overlays
  document.querySelectorAll('.overlay').forEach(v =>
    v.classList.remove('active')
  );

  const view = document.getElementById(id);
  if (view.classList.contains('overlay')) {
    view.classList.add('active');
  }

  if (hash) location.hash = hash;
}

function closeView() {
  document.querySelectorAll('.overlay').forEach(v =>
    v.classList.remove('active')
  );
  location.hash = '';
}

function renderProperties(list) {
  const grid = document.querySelector('#properties .grid');
  grid.innerHTML = '';

  list.forEach(p => {
    grid.innerHTML += `
      <article class="card" onclick="openProperty(${p.id})">
        <img src="${p.imagen}">
        <h3>${p.titulo}</h3>
        <p>${p.precio}</p>
      </article>
    `;
  });
}

function openProperty(id) {
  const p = properties.find(x => x.id === id);
  document.getElementById('detail-img').src = p.imagen;
  document.getElementById('detail-title').innerText = p.titulo;
  document.getElementById('detail-price').innerText = p.precio;
  document.getElementById('detail-desc').innerText = p.descripcion;

  const features = document.getElementById('detail-features');
  features.innerHTML = '';
  p.detalle.forEach(f => features.innerHTML += `<li>${f}</li>`);

  document.getElementById('detail-map').src =
    `https://www.google.com/maps?q=${p.mapa}&output=embed`;

  openView('property-detail', `propiedad/${id}`);
}

window.addEventListener('hashchange', handleHash);

function handleHash() {
  const hash = location.hash.replace('#', '');

  if (hash === 'propiedades') {
    openView('properties');
  } else if (hash === 'contacto') {
    openView('contact');
  } else if (hash.startsWith('propiedad')) {
    openView('property-detail');
  }
}

document.getElementById('priceFilter')?.addEventListener('change', e => {
  const value = e.target.value;
  const filtered = value ? properties.filter(p => p.precio === value) : properties;
  renderProperties(filtered);
});

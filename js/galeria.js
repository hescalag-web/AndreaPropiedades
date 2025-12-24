function changeImage(el) {
  document.getElementById("mainImage").src = el.src;
}

function openGallery() {
  document.getElementById("galleryModal").style.display = "block";
}

function closeGallery() {
  document.getElementById("galleryModal").style.display = "none";
}

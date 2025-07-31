/* Galereya konteyneri */
const gallery = document.getElementById("gallery");

/* img3.jpg → img63.jpg gacha <img> yaratish */
for (let i = 1; i <= 14; i++) {
  const img = document.createElement("img");
  img.src = `./assets/NResults/m${i}.jpg`; // yo‘l shabloni
  img.alt = `DTM result ${i}`;
  img.loading = "lazy";        // tezroq yuklash
  gallery.appendChild(img);
}

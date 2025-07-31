/* Galereya konteyneri */
const gallery = document.getElementById("gallery");

/* img3.jpg → img63.jpg gacha <img> yaratish */
for (let i = 3; i <= 63; i++) {
  const img = document.createElement("img");
  img.src = `./assets/DTMResults/img${i}.jpg`; // yo‘l shabloni
  img.alt = `DTM result ${i}`;
  img.loading = "lazy";        // tezroq yuklash
  gallery.appendChild(img);
}

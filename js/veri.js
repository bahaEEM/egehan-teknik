// Galeri verisi — sadece projeler.html tarafından kullanılır.
// İş fotoğrafları geldikçe aşağıdaki diziye eklenecek.
// Veri formatı örneği:
// { dosya: "gorseller/is-adi.webp", baslik: "İşin kısa adı", aciklama: "Tek cümle açıklama." }
const galeriVerisi = [];

// Galeri render — #galeri elemanı varsa çalışır, yoksa hiçbir şey yapmaz.
document.addEventListener("DOMContentLoaded", function () {
  var alan = document.getElementById("galeri");
  if (!alan) return;

  if (galeriVerisi.length === 0) {
    var bosKutu = document.createElement("div");
    bosKutu.className = "galeri-bos";

    var mesaj = document.createElement("p");
    mesaj.textContent = "İş fotoğraflarımız yakında burada olacak. Örnek işlerimiz için arayabilirsiniz.";

    var telLink = document.createElement("a");
    telLink.href = "tel:+905393451146";
    telLink.className = "buton buton-birincil gecis";
    telLink.textContent = "0539 345 1146";

    bosKutu.appendChild(mesaj);
    bosKutu.appendChild(telLink);
    alan.appendChild(bosKutu);
    return;
  }

  var grid = document.createElement("div");
  grid.className = "galeri-grid";

  galeriVerisi.forEach(function (oge) {
    var figure = document.createElement("figure");
    figure.className = "galeri-oge";

    var img = document.createElement("img");
    img.src = oge.dosya;
    img.alt = oge.baslik;
    img.loading = "lazy";
    figure.appendChild(img);

    var figcaption = document.createElement("figcaption");

    var baslik = document.createElement("strong");
    baslik.textContent = oge.baslik;
    figcaption.appendChild(baslik);

    var aciklama = document.createElement("span");
    aciklama.textContent = oge.aciklama;
    figcaption.appendChild(aciklama);

    figure.appendChild(figcaption);
    grid.appendChild(figure);
  });

  alan.appendChild(grid);
});

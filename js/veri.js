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

/* ====================================================================
   MÜŞTERİ YORUMLARI — index.html tarafından kullanılır.

   Google'ın ücretsiz, resmî bir "yorumlarımı siteye göm" aracı yok.
   Canlı çekmek için Places API + faturalandırma hesabı gerekir ve
   API anahtarı statik sitede herkese görünür olur; ücretli üçüncü
   parti eklentiler de projenin "dış bağımlılık yok" kuralına aykırı.
   Bu yüzden yorumlar buraya ELLE, geldikçe eklenir.

   KURAL: Buraya sadece Google profiline gerçekten bırakılmış yorumlar
   birebir yazılır. Yorum UYDURULMAZ.

   Veri formatı:
   { ad: "Müşteri adı", puan: 5, metin: "Yorum metni.", tarih: "Ağustos 2026" }
   ==================================================================== */
const yorumVerisi = [];

// Google İşletme profili açılınca "yorum bırak" linki buraya yazılacak.
// Boş kaldığı sürece buton hiç basılmaz (ölü link olmasın).
const googleYorumLinki = "";

document.addEventListener("DOMContentLoaded", function () {
  var alan = document.getElementById("yorumlar-alani");
  if (!alan) return;

  if (yorumVerisi.length === 0) {
    var bos = document.createElement("p");
    bos.className = "yorum-bos";
    bos.textContent =
      "İlk müşteri yorumlarımız yakında burada görünecek. " +
      "Bizimle çalıştıysanız görüşünüzü paylaşmanız bize çok yardımcı olur.";
    alan.appendChild(bos);
  } else {
    var grid = document.createElement("ul");
    grid.className = "yorum-grid";

    yorumVerisi.forEach(function (y) {
      var oge = document.createElement("li");
      oge.className = "yorum";

      var puan = document.createElement("span");
      puan.className = "yorum-puan";
      puan.setAttribute("aria-label", y.puan + " yıldız");
      puan.textContent = "★★★★★".slice(0, y.puan);
      oge.appendChild(puan);

      var metin = document.createElement("p");
      metin.className = "yorum-metin";
      metin.textContent = y.metin;
      oge.appendChild(metin);

      var alt = document.createElement("p");
      alt.className = "yorum-ad";
      alt.textContent = y.tarih ? y.ad + " · " + y.tarih : y.ad;
      oge.appendChild(alt);

      grid.appendChild(oge);
    });

    alan.appendChild(grid);
  }

  if (googleYorumLinki) {
    var link = document.createElement("a");
    link.href = googleYorumLinki;
    link.className = "buton buton-birincil gecis yorum-buton";
    link.textContent = "Google'da Değerlendirin";
    link.rel = "noopener";
    link.target = "_blank";
    alan.appendChild(link);
  }
});
